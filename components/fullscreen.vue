<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 bg-black flex flex-col">
    <div class="relative w-full p-4">
      <button
        @click="close"
        class="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex-grow flex items-center justify-center">
      <Splide
        ref="splide"
        :options="splideOptions"
        class="w-full h-full"
        @mounted="goToInitialSlide"
      >
        <SplideSlide
          v-for="(image, idx) in allImages"
          :key="idx"
          class="flex items-center justify-center"
        >
          <div class="w-full h-full flex flex-col">
            <img
              :src="image.src"
              :alt="image.alt"
              class="max-w-full max-h-full object-contain flex-grow"
            />
            <div class="text-white bg-black bg-opacity-50 p-2 w-full">
              {{ image.title }}
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const props = defineProps({
  isOpen: Boolean,
  allImages: Array,
  initialIndex: Number,
});

const emit = defineEmits(["close"]);

const splide = ref(null);

const splideOptions = computed(() => ({
  type: "loop",
  perPage: 1,
  pagination: false,
  arrows: true,
  height: "100%",
  width: "100%",
  focus: "center",
  dragMinThreshold: 10,
  start: props.initialIndex, // Set the initial slide
}));

const close = () => {
  emit("close");
};

const goToInitialSlide = () => {
  if (splide.value) {
    splide.value.go(props.initialIndex);
  }
};

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      nextTick(() => {
        goToInitialSlide();
      });
    }
  }
);

watch(
  () => props.initialIndex,
  (newValue) => {
    if (props.isOpen && splide.value) {
      splide.value.go(newValue);
    }
  }
);
</script>

<style scoped>
:deep(.splide__arrow) {
  background: rgba(0, 0, 0, 0.5);
}

:deep(.splide__arrow svg) {
  fill: #ffffff;
}

:deep(.splide__slide) {
  overflow: hidden;
}

:deep(.splide__track) {
  height: 100%;
}

:deep(.splide__list) {
  height: 100%;
  align-items: center;
}
</style>

<template>
  <section class="pt-12 pb-12 md:pb-0">
    <div
      v-for="(item, index) in galleryItems"
      :key="item.id"
      class="flex flex-wrap"
    >
      <div
        :class="{
          'md:order-last': index % 2 === 0,
          'md:order-first': index % 2 !== 0,
        }"
        class="md:w-1/2 relative aspect-w-4 aspect-h-3"
      >
        <button
          @click="openFullscreen(item.id, currentSlides[item.id])"
          class="absolute top-2 right-2 z-10 bg-white bg-opacity-70 p-1 rounded-full"
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
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
        <Splide
          :options="{
            type: 'loop',
            perPage: 1,
            pagination: true,
            arrows: false,
          }"
          @moved="(splide) => updateCurrentSlide(item.id, splide.index)"
        >
          <SplideSlide v-for="(image, idx) in item.images" :key="idx">
            <NuxtImg
              :src="image"
              :alt="`${item.title} image ${idx + 1}`"
              class="w-full h-auto object-contain"
              :width="4026"
              :height="3019"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div class="md:w-1/2 flex items-center">
        <div class="my-4 mx-4 md:mx-12">
          <h2 class="text-2xl md:text-4xl font-iskry pb-4">{{ item.title }}</h2>
          <p class="font-light text-gray-600 mb-10">{{ item.description }}</p>
          <a
            v-if="item.book"
            href="#contact"
            type="button"
            class="bg-creme-glicine px-8 py-4 font-light md:text-lg shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-50"
          >
            Check Availability
          </a>
        </div>
      </div>
    </div>
    <FullscreenGallery
      :is-open="isFullscreenOpen"
      :all-images="allImages"
      :initial-index="fullscreenInitialIndex"
      @close="closeFullscreen"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import FullscreenGallery from "./fullscreen.vue";

const isFullscreenOpen = ref(false);
const fullscreenInitialIndex = ref(0);
const currentSlides = ref({});

const galleryItems = [
  {
    id: 1,
    title: "Skyline Terrace",
    description:
      "Spanning the entire length of the apartment, this terrace is a secluded oasis, draped for privacy and surrounded by lush greenery. It's the perfect setting for starlit romantic dinners for two, offering expansive views of the open sky.",
    images: [
      "/img/gallery2/terrace2.jpg",
      "/img/gallery2/terrace3.jpg",
      "/img/gallery2/terrace4.jpg",
      "/img/gallery2/terrace5.jpg",
      "/img/gallery2/terrace6.jpg",
    ],
    book: false,
  },
  {
    id: 2,
    title: "Living Area",
    description:
      "Bask in the sunlight from the French window leading to the terrace while keeping track of the meal preparations in the kitchen. The sofa easily converts into a guest bed, accommodating two visitors with ease.",
    images: [
      "/img/gallery2/living3.jpg",

      "/img/gallery2/living2.jpg",
      "/img/gallery2/living4.jpg",
      "/img/gallery2/living5.jpg",
      "/img/gallery2/living6.jpg",
      "/img/gallery2/living7.jpg",

      "/img/gallery2/living9.jpg",
      "/img/gallery2/living10.jpg",
    ],
    book: false,
  },
  {
    id: 3,
    title: "Kitchen",
    description:
      "Enjoy the expansive views as you cook in a kitchen outfitted with an induction plate, a dual-function oven-microwave, and a dishwasher. Essential cutlery, sturdy dishes and a selection of spices ensure every meal is prepared with simplicity and flair.",
    images: [
      "/img/gallery2/kitchen.jpg",
      "/img/gallery2/kitchen3.jpg",
      "/img/gallery2/kitchen2.jpg",
    ],
    book: false,
  },
  {
    id: 4,
    title: "Bedroom",
    description:
      "Relax in this snug retreat, complete with a large window equipped with remote-controlled blinds and an insect net. Enjoy the convenience of private access to the bathroom and a designer closet.",
    images: [
      "/img/gallery2/bedroom.jpg",
      "/img/gallery2/bedroom2.jpg",
      "/img/gallery2/bedroom9.jpg",
      "/img/gallery2/bedroom-wa3.jpg",
      "/img/gallery2/bedroom5.jpg",
      "/img/gallery2/bedroom6.jpg",
      "/img/gallery2/bedroom7.jpg",
      "/img/gallery2/bedroom8.jpg",
      "/img/gallery2/bedroom10.jpg",
    ],
    book: false,
  },
  {
    id: 5,
    title: "Bathroom",
    description:
      "Marvel at how such a compact space can offer so much. Adorned with supersized white tiles, the bathroom features a skylight with remote-controlled blinds, a bidet, a full bathtub with an elegant shower, and a sink set in a niche beneath a stunning mirror.",
    images: [
      "/img/gallery2/bathroom.jpg",
      "/img/gallery2/bathroom2.jpg",
      "/img/gallery2/bathroom3.jpg",
      "/img/gallery2/bathroom4.jpg",
      "/img/gallery2/bathroom5.jpg",
    ],
    book: false,
  },
  {
    id: 6,
    title: "Book Now",
    description:
      "Guests interested in spending at least a week in Milano are preferred.",
    images: [
      "/img/gallery2/vase.jpg",
      "/img/gallery2/candles.jpg",
      "/img/gallery2/detail3.jpg",
    ],
    book: true,
  },
];

const allImages = computed(() => {
  return galleryItems.flatMap((item) =>
    item.images.map((image) => ({
      src: image,
      alt: `${item.title} image`,
      title: item.title,
    }))
  );
});

const getImageIndex = (itemId, imageIndex) => {
  let index = 0;
  for (const item of galleryItems) {
    if (item.id === itemId) {
      return index + imageIndex;
    }
    index += item.images.length;
  }
  return 0;
};

const updateCurrentSlide = (itemId, slideIndex) => {
  currentSlides.value[itemId] = slideIndex;
};

const openFullscreen = (itemId, slideIndex) => {
  fullscreenInitialIndex.value = getImageIndex(itemId, slideIndex);
  isFullscreenOpen.value = true;
};

const closeFullscreen = () => {
  isFullscreenOpen.value = false;
};
</script>

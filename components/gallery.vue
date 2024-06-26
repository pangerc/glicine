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
        class="md:w-1/2"
      >
        <!-- <img :src="item.image" :alt="item.title" class="w-full h-auto" /> -->
        <Splide
          :options="{
            type: 'loop',
            perPage: 1,
            pagination: true,
            arrows: false,
          }"
        >
          <SplideSlide v-for="(image, idx) in item.images" :key="idx">
            <img
              :src="image"
              :alt="`${item.title} image ${idx + 1}`"
              class="w-full h-auto"
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
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const galleryItems = [
  {
    id: 1,
    title: "Skyline Terrace",
    description:
      "Spanning the entire length of the apartment, this terrace is a secluded oasis, draped for privacy and surrounded by lush greenery. It's the perfect setting for starlit romantic dinners for two, offering expansive views of the open sky.",
    images: ["/img/terrace2.png", "/img/terrace.png"],
    book: false,
  },
  {
    id: 2,
    title: "Living Area",
    description:
      "Bask in the sunlight from the French window leading to the terrace while keeping track of the meal preparations in the kitchen. The sofa easily converts into a guest bed, accommodating two visitors with ease.",
    images: ["/img/living.png", "/img/living2.jpg"],
    book: false,
  },
  {
    id: 3,
    title: "Kitchen",
    description:
      "Enjoy the expansive views as you cook in a kitchen outfitted with an induction plate, a dual-function oven-microwave, and a dishwasher. Essential cutlery, sturdy dishes and a selection of spices ensure every meal is prepared with simplicity and flair.",
    images: ["/img/kitchen2.jpg", "/img/kitchen.png"],
    book: false,
  },
  {
    id: 4,
    title: "Bedroom",
    description:
      "Relax in this snug retreat, complete with a large window equipped with remote-controlled blinds and an insect net. Enjoy the convenience of private access to the bathroom and a designer closet.",
    images: ["/img/bedroom.jpg", "/img/bedroom2.jpg"],
    book: false,
  },
  {
    id: 5,
    title: "Bathroom",
    description:
      "Marvel at how such a compact space can offer so much. Adorned with supersized white tiles, the bathroom features a skylight with remote-controlled blinds, a bidet, a full bathtub with an elegant shower, and a sink set in a niche beneath a stunning mirror.",
    images: ["/img/bathroom.png", "/img/bathroom2.png", "/img/bathroom3.jpg"],
    book: false,
  },
  {
    id: 6,
    title: "Book Now",
    description:
      "Guests interested in spending at least a week in Milano are preferred.",
    images: ["/img/vase.jpg", "/img/candles.png", "/img/detail3.jpg"],
    book: true,
  },
];
</script>

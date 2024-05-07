<template>
  <section class="py-12">
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
        <img :src="item.image" :alt="item.title" class="w-full h-auto" />
      </div>
      <div class="md:w-1/2 flex items-center">
        <div class="m-4">
          <h2 class="text-2xl md:text-4xl font-iskry pb-4">{{ item.title }}</h2>
          <p class="font-light text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="md:w-1/2">
        <img src="/img/candles.png" class="w-full h-auto" />
      </div>
      <div class="md:w-1/2">
        <img src="/img/vase.png" class="w-full h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  {
    id: 1,
    title: "Skyline Terrace",
    description:
      "Spanning the entire length of the apartment, this terrace is a secluded oasis, draped for privacy and surrounded by lush greenery. It's the perfect setting for starlit romantic dinners for two, offering expansive views of the open sky.",
    image: "/img/terrace.png",
  },
  {
    id: 2,
    title: "Living Area",
    description:
      "Bask in the sunlight from the French window leading to the terrace while keeping track of the meal preparations in the kitchen. The sofa easily converts into a guest bed, accommodating two visitors with ease.",
    image: "/img/living.png",
  },
  {
    id: 3,
    title: "Kitchen",
    description:
      "Enjoy the expansive views as you cook in a kitchen outfitted with an induction plate, a dual-function oven-microwave, and a dishwasher. Essential cutlery, sturdy dishes and a selection of spices ensure every meal is prepared with simplicity and flair.",
    image: "/img/kitchen.png",
  },
  {
    id: 4,
    title: "Bedroom",
    description:
      "Relax in this snug retreat, complete with a large window equipped with remote-controlled blinds and an insect net. Enjoy the convenience of private access to the bathroom and a designer closet.",
    image: "/img/bedroom.png",
  },
  {
    id: 5,
    title: "Bathroom",
    description:
      "Marvel at how such a compact space can offer so much. Adorned with supersized white tiles, the bathroom features a skylight with remote-controlled blinds, a bidet, a full bathtub with an elegant shower, and a sink set in a niche beneath a stunning mirror.",
    image: "/img/bathroom.png",
  },
];
</script>

<style scoped>
/* Add any additional styles here */
</style>

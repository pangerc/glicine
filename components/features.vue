<template>
  <section
    class="container mx-auto flex flex-col justify-center items-center pb-16"
  >
    <!-- <h1 class="text-4xl md:text-5xl font-iskry">Total Comfort</h1> -->
    <div class="md:grid md:grid-cols-3 w-full mt-10 pl-4 md:pl-24">
      <div
        v-for="item in features"
        class="font-light text-gray-600 flex justify-start items-center py-4"
      >
        <img :src="`/img/ico/` + item.icon" class="mr-4 w-8 md:w-12" />
        <span class="text-sm">{{ item.desc }}</span>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const features = [
  { desc: "sleeps 4 people", icon: "bed.svg" },
  { desc: "bathtub and shower", icon: "tub.svg" },
  { desc: "elevator", icon: "lift.svg" },
  { desc: "washer and dryer", icon: "laundry.svg" },
  { desc: "dishwasher", icon: "dishwasher.svg" },
  { desc: "induction, oven and microwave", icon: "oven.svg" },
  { desc: "high speed internet", icon: "router.svg" },
  { desc: "automated check-in", icon: "lock.svg" },
  { desc: "terrace", icon: "terrace.svg" },
];
</script>

<template>
  <div class="bg-gray-900">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Casa Glicine</span>
            <img
              class="h-8 w-auto"
              src="/img/logo-blk.svg"
              alt="Casa Glicine"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-white"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            class="bg-lime rounded-full px-4 py-2 text-sm font-medium leading-6 text-black uppercase"
            >Contact Us</a
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Casa Glicine</span>
              <img
                class="h-8 w-auto"
                src="/img/logo-wht-glow.svg"
                alt="Casa Glicine"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-400"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="flex flex-col">
      <!-- Background Video Container -->
      <div
        class="relative w-full overflow-hidden aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9"
      >
        <!-- Video Element -->
        <video
          class="absolute top-0 left-0 w-full h-full object-cover"
          autoplay
          muted
          loop
          id="herohero"
        >
          <source src="/video/glicine6.mp4" type="video/mp4" />
        </video>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 flex items-end justify-center px-4 md:px-8 pb-10 md:pb-16 lg:pb-32 max-w-5xl"
        >
          <div class="text-left space-y-4">
            <h1 class="text-white text-4xl md:text-7xl lg:text-8xl italic">
              TAKING CABLE TO <br />
              NEW FRONTIERS
            </h1>
            <p class="text-white text-lg md:text-2xl">
              Wirelessly extending DOCSIS networks in sparsely populated, and
              low income areas. High speed broadband on any frequency at
              unbeatable price.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [];
const mobileMenuOpen = ref(false);
</script>

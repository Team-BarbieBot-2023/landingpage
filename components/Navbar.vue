<template>
  <nav class="px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
    <h1 class="text-xl font-bold text-white">My Landing Page</h1>

    <button
      @click="toggleMenu"
      class="lg:hidden text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <ul
      :class="[
        'lg:flex lg:space-x-8',
        isMenuOpen ? 'block' : 'hidden',
        'lg:block'
      ]"
      class="bg-[#0f1d3bf2] absolute lg:static top-16 left-0 right-0 bg-primary-light lg:bg-transparent text-white p-6 lg:p-0 rounded-lg shadow-lg lg:shadow-none transition-all"
    >
      <li>
        <button
          @click="scrollToSection('home')"
          class="block lg:inline-block py-2 px-4 rounded-md hover:bg-primary-dark hover:text-yellow-400 transition"
        >
          Home
        </button>
      </li>
      <li>
        <button
          @click="scrollToSection('work')"
          class="block lg:inline-block py-2 px-4 rounded-md hover:bg-primary-dark hover:text-yellow-400 transition"
        >
          Work
        </button>
      </li>
      <li>
        <button
          @click="scrollToSection('about')"
          class="block lg:inline-block py-2 px-4 rounded-md hover:bg-primary-dark hover:text-yellow-400 transition"
        >
          About
        </button>
      </li>
      <li>
        <button
          @click="scrollToSection('contact')"
          class="block lg:inline-block py-2 px-4 rounded-md hover:bg-primary-dark hover:text-yellow-400 transition"
        >
          Contact
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
  }
}
</script>

<style scoped>
nav {
  background-color: #0f1d3bf2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

button div.rotate-90 {
  transform: rotate(90deg);
}

nav {
  background-color: #0f1d3bf2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

button {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>

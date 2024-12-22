<template>
  <section id="work"
    class="min-h-screen px-8 py-12 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 text-white flex flex-col justify-center items-center">
    <div class="max-w-7xl w-full">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold mb-4">Enhance Your FiveM Server</h2>
        <p class="text-lg text-gray-300">
          Discover custom scripts and tools to create an immersive FiveM experience for your community. Take roleplay to
          the next level with engaging and dynamic features.
        </p>
      </div>

      <div
        class="relative flex flex-col lg:flex-row items-center bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-900 rounded-lg shadow-lg overflow-hidden mb-16">
        <div class="p-8 text-center lg:text-left lg:w-1/2">
          <h3 class="text-3xl font-bold text-white mb-4">Immersive Roleplay Features</h3>
          <p class="text-gray-300 mb-6">
            Transform your FiveM server with scripts that offer advanced roleplay capabilities, from police systems to
            dynamic job management.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 p-4 lg:w-1/2">
          <img src="/imgs/3.webp" alt="Dynamic Systems" class="rounded-lg object-cover col-span-2 shadow-md" />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(card, index) in cards" :key="index"
          class="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
          <img :src="card.image" :alt="card.title" class="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
          <h3 class="text-xl font-bold mb-2 text-white">{{ card.title }}</h3>
          <p class="text-gray-300">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    image: "/imgs/4.webp",
    title: "Custom Job System",
    description:
      "Introduce unique job roles like taxi driver, mechanic, or firefighter to provide realistic roleplay opportunities.",
  },
  {
    image: "/imgs/5.webp",
    title: "Inventory Management",
    description:
      "Manage player items seamlessly with features like drag-and-drop functionality, storage limits, and custom item creation.",
  },
  {
    image: "/imgs/6.webp",
    title: "Advanced Vehicle Tuning",
    description:
      "Allow players to customize their vehicles with engine upgrades, custom paint jobs, and detailed tuning options.",
  },
];
</script>


<style scoped>
button:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>

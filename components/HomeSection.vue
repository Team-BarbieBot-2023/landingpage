<template>
  <section id="home" class="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
    style="background-image: url('/imgs/bg-fivem.webp');">

    <div class="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

    <div class="relative z-10 text-white px-4">
      <h1 class="text-6xl font-extrabold mb-6">Welcome to My World</h1>
      <p class="text-xl mb-8">
        Explore creative designs, impactful projects, and innovative solutions.
      </p>
      <n-button round type="primary" size="large" href="#work"
        class="bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105">
        Get Started
      </n-button>

    </div>
  </section>
</template>

<style scoped>
.absolute {
  position: absolute;
}
</style>

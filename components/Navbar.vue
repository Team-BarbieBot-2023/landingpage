<template>
  <nav class="bg-primary-light dark:bg-primary-dark px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 transition-all">
    <h1 class="text-xl font-bold text-white">My Landing Page</h1>
    <ul class="flex space-x-6">
      <li><button @click="scrollToSection('home')" class="nav-link hover:underline">Home</button></li>
      <li><button @click="scrollToSection('work')" class="nav-link hover:underline">Work</button></li>
      <li><button @click="scrollToSection('about')" class="nav-link hover:underline">About</button></li>
      <li><button @click="scrollToSection('contact')" class="nav-link hover:underline">Contact</button></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // เลื่อนแบบ Smooth Scroll
  }
}
</script>

<style scoped>
/* สไตล์เพิ่มเติม */
.nav-link {
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700; /* สีเหลืองทองเมื่อ Hover */
}
nav {
  background-color: rgba(15, 29, 59, 0.897); /* ทำให้โปร่งใส */
}
</style>

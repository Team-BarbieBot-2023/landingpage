<template>
  <div class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
    <Navbar />
    <HomeSection />
    <WorkSection />
    <AboutSection />
    <ContactSection />
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css';

import Navbar from './components/Navbar.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorkSection from './components/WorkSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
</script>

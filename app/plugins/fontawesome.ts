import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'; // Import ไอคอนที่ต้องการใช้

library.add(faUser, faHome); // เพิ่มไอคอนลงในไลบรารี

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

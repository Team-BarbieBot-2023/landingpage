<template>
  <section id="about" class="bg-gray-100/60 min-h-screen flex flex-col items-center justify-center px-8 py-12">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="relative flex justify-center">
        <div
          class="relative w-64 h-64 bg-gradient-to-tr from-gray-300/70 via-gray-200/60 to-gray-100/50 p-1 rounded-full shadow-lg">
          <img src="/imgs/profile.webp" alt="Profile Picture"
            class="rounded-full object-cover w-full h-full shadow-lg transition-transform duration-300 hover:scale-105" />
        </div>
      </div>

      <div class="text-center lg:text-left space-y-6">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-8">About me</h1>
        <p class="text-gray-600 text-lg">
          Passionate about creating immersive gaming experiences, I specialize in developing scripts that bring games to
          life.
          From gameplay mechanics to dynamic interactions, I aim to craft solutions that enhance player engagement and
          fun.
        </p>
        <p class="text-gray-600">
          Whether it’s a multiplayer server or custom game modes, I’m here to deliver creative and functional scripts
          tailored to your needs!
        </p>
      </div>

    </div>


    <div class="mt-12 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-50/90 p-6 rounded-lg shadow-md text-left">
        <h2 class="text-2xl font-bold text-gray-700 mb-4">ข้อมูลส่วนตัว</h2>
        <p><strong>ชื่อ - สกุล:</strong> Kiattisak Ruengsawat</p>
        <p class="my-3"><strong>ชื่อเล่น:</strong> มิกซ์ (มิน)</p>
        <p><strong>วันเกิด:</strong> June 26, 2009 (Age: 15 years)</p>
      </div>

      <div class="bg-gray-50/90 p-6 rounded-lg shadow-md text-left">
        <h2 class="text-2xl font-bold text-gray-700 mb-4">ทักษะด้านการเขียนโปรแกรม</h2>
        <n-space class="flex flex-wrap gap-2">
          <n-tag type="info" round>HTML</n-tag>
          <n-tag type="success" round>CSS</n-tag>
          <n-tag type="warning" round>JavaScript</n-tag>
          <n-tag type="primary" round>Vue.js</n-tag>
          <n-tag type="primary" round>Nuxt.js</n-tag>
          <n-tag type="info" round>Node.js</n-tag>
          <n-tag type="success" round>Express</n-tag>
          <n-tag type="error" round>Python</n-tag>
          <n-tag type="info" round>Flask</n-tag>
          <n-tag type="info" round>SQL</n-tag>
          <n-tag type="warning" round>MongoDB</n-tag>
        </n-space>
      </div>

      <div class="bg-gray-50/90 p-6 rounded-lg shadow-md text-left">
        <h2 class="text-2xl font-bold text-gray-700 mb-4">ทักษะอื่นๆ</h2>
        <ul class="list-disc pl-5 text-gray-600">
          <li class="mb-2">Graphic Design (Photoshop, Figma)</li>
          <li class="mb-2">Team Collaboration</li>
          <li class="mb-2">Project Management</li>
          <li>Problem Solving</li>
        </ul>
      </div>
    </div>
  </section>
</template>

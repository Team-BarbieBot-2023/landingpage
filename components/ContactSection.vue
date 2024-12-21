<template>
  <section id="contact" class="px-8 py-16 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 text-white">
    <h2 class="text-4xl font-extrabold text-center mb-12">Contact Us</h2>
    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="space-y-6">
        <div>
          <h3 class="text-2xl font-bold mb-2">Get in Touch</h3>
          <p class="text-gray-300">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l4 2m0 0l-4 2m4-2h8m-8 0l4 2m0 0l4-2m-4 2h8m-8 0l4-2m4 2l4-2m0 0l-4-2" />
            </svg>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2v4a2 2 0 002 2h4M21 16l-7.18-7.18a4 4 0 00-5.66 0L5 12m16 4v1a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1m0 0H9" />
            </svg>
            <span>contact@company.com</span>
          </div>
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A4 4 0 010 15.874V8.126a4 4 0 015.121-1.93m14.757 10.608a4 4 0 010-5.66m0 5.66V8.126a4 4 0 010-5.66M5.121 17.804L17.88 6.045" />
            </svg>
            <span>123 Main Street, Cityville, USA</span>
          </div>
        </div>
        <!-- Social Media -->
        <div class="mt-6">
          <h3 class="text-2xl font-bold mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <!-- Social icons -->
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white" />
        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white" />
        <textarea placeholder="Your Message" class="w-full px-4 py-2 rounded-lg bg-gray-900 text-white"></textarea>
        <button type="submit" class="px-6 py-3 bg-primary-light text-white rounded-lg shadow-lg hover:bg-primary-dark">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

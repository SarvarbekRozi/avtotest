<template>
  <div class="bg-light-secondary dark:bg-dark-secondary text-text-main dark:text-white font-lexend min-h-screen flex flex-col antialiased transition-colors duration-300">

    <!-- Main Content -->
    <main class="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumbs -->
      <div class="flex items-center gap-2 text-sm mb-8">
        <NuxtLink class="text-text-secondary hover:text-primary-400 font-medium" to="/">Bosh sahifa</NuxtLink>
        <span class="text-text-secondary">/</span>
        <span class="text-text-main dark:text-white font-medium">Biletlar</span>
      </div>

      <!-- Header Section with Progress -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <!-- Title Area -->
        <div class="lg:col-span-2 space-y-4">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-main dark:text-white">
            Imtihon Biletini Tanlang
          </h1>
          <p class="text-lg text-text-secondary dark:text-gray-400 max-w-2xl">
            Bilimingizni sinab ko'ring. O'zingizga mos kategoriya va bilet raqamini tanlab, imtihonni boshlang.
          </p>
        </div>
        <!-- Progress Card -->
        <div class="bg-light-primary dark:bg-dark-tertiary p-6 rounded-2xl border border-light-border dark:border-[#2a4033] shadow-sm">
          <div class="flex justify-between items-center mb-3">
            <span class="font-bold text-text-main dark:text-white">Umumiy Natija</span>
            <span class="text-sm font-medium px-2.5 py-1 rounded-full bg-light-border dark:bg-[#2a4033] text-primary-400">{{ completedTickets }}/{{ totalTickets }}</span>
          </div>
          <div class="h-2.5 w-full bg-[#d1e6d9] dark:bg-[#2a4033] rounded-full overflow-hidden mb-3">
            <div class="h-full bg-primary-400 rounded-full" :style="{ width: `${progress}%` }"></div>
          </div>
          <div class="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
            <span class="material-symbols-outlined text-sm">trending_up</span>
            <span>Jami {{ totalTickets }} ta biletdan {{ completedTickets }} tasi yechildi</span>
          </div>
        </div>
      </div>

      <!-- Filters (Chips) -->
      <div class="flex flex-wrap gap-3 mb-8 pb-2">
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-transform hover:scale-105 active:scale-95',
            selectedCategory === 'all' ? 'bg-primary-400 text-text-main' : 'bg-light-primary dark:bg-dark-tertiary border border-light-border dark:border-[#2a4033] hover:border-primary-400/50 text-text-main dark:text-white font-medium'
          ]"
        >
          <span class="material-symbols-outlined text-[18px]">apps</span>
          Barchasi
        </button>
        <button
          @click="selectedCategory = 'B'"
          :class="[
            'group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-md',
            selectedCategory === 'B' ? 'bg-primary-400 text-text-main' : 'bg-light-primary dark:bg-dark-tertiary border border-light-border dark:border-[#2a4033] hover:border-primary-400/50 text-text-main dark:text-white'
          ]"
        >
          <span class="material-symbols-outlined text-[18px]">directions_car</span>
          B-Toifa
        </button>
        <button
          @click="selectedCategory = 'C'"
          :class="[
            'group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-md',
            selectedCategory === 'C' ? 'bg-primary-400 text-text-main' : 'bg-light-primary dark:bg-dark-tertiary border border-light-border dark:border-[#2a4033] hover:border-primary-400/50 text-text-main dark:text-white'
          ]"
        >
          <span class="material-symbols-outlined text-[18px]">local_shipping</span>
          C-Toifa
        </button>
        <button
          @click="selectedCategory = 'A'"
          :class="[
            'group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-md',
            selectedCategory === 'A' ? 'bg-primary-400 text-text-main' : 'bg-light-primary dark:bg-dark-tertiary border border-light-border dark:border-[#2a4033] hover:border-primary-400/50 text-text-main dark:text-white'
          ]"
        >
          <span class="material-symbols-outlined text-[18px]">two_wheeler</span>
          A-Toifa
        </button>
      </div>

      <!-- Ticket Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <!-- Card 1: Passed (Green) -->
        <div class="group relative bg-light-primary dark:bg-dark-tertiary p-6 rounded-2xl border border-green-200 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-700 hover:shadow-lg hover:shadow-green-100 dark:hover:shadow-none transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-green-500 text-6xl">check_circle</span>
          </div>
          <div class="flex justify-between items-start mb-6">
            <div class="size-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
              <span class="material-symbols-outlined">check</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">O'tgan</span>
          </div>
          <h3 class="text-2xl font-bold text-text-main dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">1-Bilet</h3>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-3xl font-black text-green-500">18</span>
            <span class="text-sm text-text-secondary font-medium mt-2">/ 20</span>
          </div>
          <button class="w-full h-10 rounded-lg border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 font-bold text-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">refresh</span>
            Qayta ishlash
          </button>
        </div>

        <!-- Card 2: Failed (Red) -->
        <div class="group relative bg-light-primary dark:bg-dark-tertiary p-6 rounded-2xl border border-red-200 dark:border-red-900/30 hover:border-red-400 dark:hover:border-red-700 hover:shadow-lg hover:shadow-red-100 dark:hover:shadow-none transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-red-500 text-6xl">cancel</span>
          </div>
          <div class="flex justify-between items-start mb-6">
            <div class="size-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
              <span class="material-symbols-outlined">close</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">O'tmadi</span>
          </div>
          <h3 class="text-2xl font-bold text-text-main dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">2-Bilet</h3>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-3xl font-black text-red-500">14</span>
            <span class="text-sm text-text-secondary font-medium mt-2">/ 20</span>
          </div>
          <button class="w-full h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">replay</span>
            Qayta urinish
          </button>
        </div>

        <!-- Card 3: In Progress (Primary/Orange) -->
        <div class="group relative bg-light-primary dark:bg-dark-tertiary p-6 rounded-2xl border border-primary-400/30 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-400/10 transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <div class="flex justify-between items-start mb-6">
            <div class="size-10 rounded-xl bg-primary-400/20 flex items-center justify-center text-green-700 dark:text-green-300">
              <span class="material-symbols-outlined">pending</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">Jarayonda</span>
          </div>
          <h3 class="text-2xl font-bold text-text-main dark:text-white mb-2">3-Bilet</h3>
          <div class="w-full bg-light-border dark:bg-[#2a4033] rounded-full h-2 mb-2">
            <div class="bg-orange-500 h-2 rounded-full" style="width: 45%"></div>
          </div>
          <p class="text-sm text-text-secondary mb-5">9/20 savol qoldi</p>
          <button class="w-full h-10 rounded-lg bg-primary-400 text-text-main font-bold text-sm hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <span class="material-symbols-outlined text-[18px]">play_arrow</span>
            Davom ettirish
          </button>
        </div>

        <!-- Card 4-7: New (Default) -->
        <div
          v-for="n in 4"
          :key="n + 3"
          class="group relative bg-light-primary dark:bg-dark-tertiary p-6 rounded-2xl border border-light-border dark:border-[#2a4033] hover:border-primary-400/50 hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <div class="flex justify-between items-start mb-6">
            <div class="size-10 rounded-xl bg-[#f0fdf4] dark:bg-[#1f3528] flex items-center justify-center text-text-secondary dark:text-gray-400 group-hover:bg-primary-400/20 group-hover:text-green-800 dark:group-hover:text-green-300 transition-colors">
              <span class="material-symbols-outlined">assignment</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs font-bold uppercase tracking-wider">Yangi</span>
          </div>
          <h3 class="text-2xl font-bold text-text-main dark:text-white mb-8 group-hover:text-primary-400 transition-colors">{{ n + 3 }}-Bilet</h3>
          <button class="w-full h-10 rounded-lg bg-light-border dark:bg-[#2a4033] group-hover:bg-primary-400 text-text-main font-bold text-sm transition-all flex items-center justify-center gap-2">
            Boshlash
            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        <!-- Card 8: Locked (Optional visual) -->
        <div class="group relative bg-gray-50 dark:bg-[#15231c] p-6 rounded-2xl border border-transparent dark:border-[#2a4033] transition-all duration-300 opacity-60 hover:opacity-100 cursor-not-allowed">
          <div class="flex justify-between items-start mb-6">
            <div class="size-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400">
              <span class="material-symbols-outlined">lock</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-500 text-xs font-bold uppercase tracking-wider">Yopiq</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-8">8-Bilet</h3>
          <button class="w-full h-10 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-400 font-bold text-sm flex items-center justify-center gap-2 cursor-not-allowed">
            Ochish
            <span class="material-symbols-outlined text-[18px]">lock</span>
          </button>
        </div>
      </div>
    </main>

    <!-- Simple Footer -->
    <footer class="border-t border-light-border dark:border-[#2a4033] py-8 mt-12 bg-light-primary dark:bg-dark-tertiary">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-text-secondary dark:text-gray-500">© 2024 Avtotest. Barcha huquqlar himoyalangan.</p>
        <div class="flex gap-6 text-sm font-medium text-text-main dark:text-white">
          <NuxtLink class="hover:text-primary-400 transition-colors" to="/yordam">Yordam</NuxtLink>
          <NuxtLink class="hover:text-primary-400 transition-colors" to="/maxfiylik">Maxfiylik siyosati</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const selectedCategory = ref('all')
const completedTickets = ref(15)
const totalTickets = ref(70)

const progress = computed(() => {
  return Math.round((completedTickets.value / totalTickets.value) * 100)
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Custom scrollbar for chips */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

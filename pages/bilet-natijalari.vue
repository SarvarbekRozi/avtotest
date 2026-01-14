<template>
  <div class="bg-light-secondary dark:bg-dark-secondary text-text-main antialiased min-h-screen flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-white/80 dark:bg-dark-tertiary/90 backdrop-blur-md border-b border-light-border dark:border-gray-800">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 flex items-center justify-center bg-primary-400 rounded-lg text-white">
              <span class="material-symbols-outlined text-[20px]">directions_car</span>
            </div>
            <h1 class="text-text-main dark:text-white text-xl font-bold tracking-tight">Avtotest</h1>
          </div>
          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink class="text-sm font-medium text-text-secondary hover:text-primary-400 transition-colors" to="/">Asosiy</NuxtLink>
            <NuxtLink class="text-sm font-medium text-text-secondary hover:text-primary-400 transition-colors" to="/darslar">Darslar</NuxtLink>
            <NuxtLink class="text-sm font-medium text-text-main dark:text-white font-semibold" to="/testlar">Testlar</NuxtLink>
          </nav>
          <!-- Profile -->
          <div class="flex items-center gap-4">
            <div class="hidden sm:flex flex-col items-end mr-2">
              <span class="text-xs font-bold text-text-main dark:text-white">{{ userName }}</span>
              <span class="text-[10px] text-text-secondary">O'quvchi</span>
            </div>
            <button class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden border-2 border-transparent hover:border-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
              <img :src="userAvatar" alt="User profile avatar" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow w-full max-w-[960px] mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-8">
      <!-- Result Summary Card -->
      <div class="bg-light-primary dark:bg-dark-tertiary rounded-2xl p-8 shadow-soft border border-light-border dark:border-gray-700 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 opacity-5">
          <span class="material-symbols-outlined text-[200px] text-primary-400">emoji_events</span>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <!-- Circular Progress -->
          <div class="relative w-40 h-40 flex-shrink-0">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <!-- Background Circle -->
              <path
                class="text-gray-100 dark:text-gray-700"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              ></path>
              <!-- Progress Circle -->
              <path
                class="text-primary-400 drop-shadow-md"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                :stroke-dasharray="`${scorePercentage}, 100`"
                stroke-linecap="round"
                stroke-width="3"
              ></path>
            </svg>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span class="text-4xl font-black text-text-main dark:text-white tracking-tight">{{ scorePercentage }}%</span>
            </div>
          </div>
          <!-- Text Content -->
          <div class="flex-1 text-center md:text-left flex flex-col gap-2">
            <div class="inline-flex items-center gap-2 justify-center md:justify-start">
              <span class="bg-primary-400/20 text-green-700 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{{ resultStatus }}</span>
              <span class="text-text-secondary text-xs">Bilet №{{ ticketNumber }}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-text-main dark:text-white leading-tight">{{ resultMessage }}</h2>
            <p class="text-text-secondary dark:text-gray-400 text-lg">{{ resultDescription }}</p>
          </div>
          <!-- Main Action -->
          <div class="flex-shrink-0">
            <button class="bg-primary-400 hover:bg-primary-600 text-text-main font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
              <span class="material-symbols-outlined">restart_alt</span>
              Qayta topshirish
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Total -->
        <div class="bg-light-primary dark:bg-dark-tertiary rounded-xl p-6 border border-light-border dark:border-gray-700 flex flex-col gap-2 shadow-sm">
          <div class="flex items-center gap-3 mb-1">
            <div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
              <span class="material-symbols-outlined text-[20px]">quiz</span>
            </div>
            <span class="text-sm font-medium text-text-secondary">Jami savollar</span>
          </div>
          <span class="text-3xl font-bold text-text-main dark:text-white">{{ totalQuestions }} ta</span>
        </div>
        <!-- Correct -->
        <div class="bg-light-primary dark:bg-dark-tertiary rounded-xl p-6 border border-light-border dark:border-gray-700 flex flex-col gap-2 shadow-sm">
          <div class="flex items-center gap-3 mb-1">
            <div class="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-500">
              <span class="material-symbols-outlined text-[20px]">check_circle</span>
            </div>
            <span class="text-sm font-medium text-text-secondary">To'g'ri javoblar</span>
          </div>
          <span class="text-3xl font-bold text-text-main dark:text-white">{{ correctAnswers }} ta</span>
        </div>
        <!-- Incorrect -->
        <div class="bg-light-primary dark:bg-dark-tertiary rounded-xl p-6 border border-light-border dark:border-gray-700 flex flex-col gap-2 shadow-sm">
          <div class="flex items-center gap-3 mb-1">
            <div class="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-500">
              <span class="material-symbols-outlined text-[20px]">cancel</span>
            </div>
            <span class="text-sm font-medium text-text-secondary">Xato javoblar</span>
          </div>
          <span class="text-3xl font-bold text-text-main dark:text-white">{{ incorrectAnswers }} ta</span>
        </div>
      </div>

      <!-- Mistake Analysis Section -->
      <section class="flex flex-col gap-6">
        <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
          <h3 class="text-2xl font-bold text-text-main dark:text-white flex items-center gap-2">
            <span class="material-symbols-outlined text-red-500">error</span>
            Xatolar tahlili
          </h3>
          <span class="text-sm text-text-secondary">{{ mistakes.length }} ta savolda xatolik</span>
        </div>

        <!-- Mistake Cards -->
        <div
          v-for="(mistake, index) in mistakes"
          :key="index"
          class="bg-light-primary dark:bg-dark-tertiary rounded-2xl border border-red-100 dark:border-red-900/30 overflow-hidden shadow-soft"
        >
          <!-- Question Header -->
          <div class="p-6 pb-4">
            <div class="flex justify-between items-start gap-4">
              <h4 class="text-lg font-bold text-text-main dark:text-white leading-snug">
                {{ index + 1 }}. {{ mistake.question }}
              </h4>
              <span class="bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-1 rounded">Xato</span>
            </div>
          </div>
          <!-- Content Body -->
          <div class="px-6 pb-6 flex flex-col md:flex-row gap-6">
            <!-- Image -->
            <div class="w-full md:w-1/3 flex-shrink-0">
              <div class="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 relative group">
                <img
                  :src="mistake.image"
                  :alt="mistake.imageAlt"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <!-- Options & Explanation -->
            <div class="flex-1 flex flex-col gap-4">
              <!-- User's Wrong Answer -->
              <div class="p-3 rounded-lg border-2 border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 flex items-start gap-3">
                <span class="material-symbols-outlined text-red-500 mt-0.5">cancel</span>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-red-500 uppercase">Sizning javobingiz</span>
                  <span class="text-sm font-medium text-text-main dark:text-gray-200">{{ mistake.userAnswer }}</span>
                </div>
              </div>
              <!-- Correct Answer -->
              <div class="p-3 rounded-lg border-2 border-primary-400/50 bg-primary-400/10 flex items-start gap-3">
                <span class="material-symbols-outlined text-green-600 dark:text-primary-400 mt-0.5">check_circle</span>
                <div class="flex flex-col">
                  <span class="text-xs font-bold text-green-600 dark:text-primary-400 uppercase">To'g'ri javob</span>
                  <span class="text-sm font-medium text-text-main dark:text-gray-200">{{ mistake.correctAnswer }}</span>
                </div>
              </div>
              <!-- Explanation -->
              <div class="mt-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex gap-3">
                <span class="material-symbols-outlined text-amber-400 flex-shrink-0">lightbulb</span>
                <p>
                  <span class="font-bold text-text-main dark:text-white block mb-1">Izoh:</span>
                  {{ mistake.explanation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Secondary Actions / Footer -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-gray-100 dark:border-gray-800 mt-4">
        <NuxtLink class="text-text-secondary hover:text-text-main font-medium flex items-center gap-2 transition-colors" to="/">
          <span class="material-symbols-outlined">arrow_back</span>
          Bosh sahifaga qaytish
        </NuxtLink>
        <button class="bg-white dark:bg-dark-tertiary border border-gray-200 dark:border-gray-600 text-text-main dark:text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
          <span class="material-symbols-outlined">list_alt</span>
          Barcha javoblarni ko'rish
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
const userName = ref('Azizbek T.')
const userAvatar = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuCCugIAixx76h2izKtlMo5DIGXY48I30UOppc6dzT974ezgcG5RSoE41yfSKVc-RpoIA1v_KHw8367sh5YrxXY_SORiuOPNcXbmqVl-OsRARcl_ndGvF8lMPBmsgKjMWzVolQ-zjr8f594LTrJ3OyXm4yVrUDXl-hNRaoitvdxGNIUjK07fP3At82BaZfHBFaDMbwxqSlm6NOcmbRLDNMQddBG_H0JhHrbMQYSQvTRapjSYcMOFuFD-JmISa6fzPoEUrmMGxvIQrV8')
const ticketNumber = ref(5)
const totalQuestions = ref(20)
const correctAnswers = ref(18)
const incorrectAnswers = ref(2)

const scorePercentage = computed(() => {
  return Math.round((correctAnswers.value / totalQuestions.value) * 100)
})

const resultStatus = computed(() => {
  return scorePercentage.value >= 70 ? 'Muvaffaqiyatli' : 'Muvaffaqiyatsiz'
})

const resultMessage = computed(() => {
  return scorePercentage.value >= 70
    ? "Tabriklaymiz, imtihondan o'tdingiz!"
    : "Afsuski, imtihondan o'ta olmadingiz"
})

const resultDescription = computed(() => {
  return scorePercentage.value >= 70
    ? "Siz yo'l harakati qoidalarini yaxshi o'zlashtirgansiz. Xatolarni ko'rib chiqishni unutmang."
    : "Yo'l harakati qoidalarini qaytadan o'rganing va qayta urinib ko'ring."
})

const mistakes = ref([
  {
    question: "Chorrahada kim birinchi harakatlanish huquqiga ega?",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHzPekYQ1sieL9Vcek7HwKt0iMIZO9aaHiuT_schHskBn_F8A_AG0otm2BpPPhjpgUHLNGKp5h8mJDT0Pw769lpnW_r7pwegjVE2agJgDBWAL58gGRtg7I7UjlCwPN6aBCjELMSlqoW8Ui9pDMl7-8Y3h1IurAASMG3lnCg1tDnQAgiNIUySsyXMRcbcmCndNSA1FoQuMrKiZJY8-hA4KRWvDzPyk0-rt_WvEGiclQxXFp40R_tELIUXVxQO9-U_oKL-SShxSxNto",
    imageAlt: "Intersection with cars and pedestrians",
    userAnswer: "Yashil avtomobil",
    correctAnswer: "Piyoda",
    explanation: "Tartibga solinmagan chorrahalarda burilayotgan haydovchi qatnov qismini kesib o'tayotgan piyodalarga yo'l berishi shart."
  },
  {
    question: "Ushbu belgi qanday ma'noni anglatadi?",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-9YKWAK-8Mi2t9NJcOlvYa_uP8GLxJRAgr2-ast8phVhLgD1WOn4clklYWc7SV69asQQgmBOlsK3EMoulT_gQXT9sB74DWWDjvxoJfnFCdYulwxTIYXAuJjFV8FXEVcxoRg14S5oojRNky3GRuAgtUuLEloEpb4dfMEJkCJdAEVeJdhT85Ed49zmex41IqbYaOVRUtPAqs0jWrJmNwSpVItcmdYAuBrNKH_AQ8ghcFiJcCZGxV3VXRlG-09qRTBzz10XvBrzneGE",
    imageAlt: "Blue circular road sign showing a turn",
    userAnswer: "Chapga burilish taqiqlanadi",
    correctAnswer: "Faqat to'g'riga harakatlanish",
    explanation: "4.1.1 belgisi faqat ko'rsatilgan yo'nalishda (to'g'riga) harakatlanishga ruxsat beradi. Boshqa yo'nalishlarga yurish taqiqlanadi."
  }
])
</script>

<style scoped>
/* Custom Scrollbar for cleaner look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

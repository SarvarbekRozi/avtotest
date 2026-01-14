<template>
  <div class="flex flex-col gap-10">
    <!-- Header Section -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary-500/10 text-primary-600 border border-primary-500/20">
          Shaxsiy rivojlanish
        </span>
      </div>
      <h1 class="text-slate-900 text-3xl md:text-5xl font-bold font-lexend tracking-tight">
        Xatolar ustida ishlash
      </h1>
      <p class="text-slate-600 text-lg max-w-2xl leading-relaxed">
        Test davomida yo'l qo'yilgan xatolarni tahlil qiling va bilimingizdagi bo'shliqlarni to'ldiring.
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-lg transition-all group">
        <div class="flex justify-between items-start mb-4">
          <div class="p-2.5 rounded-xl bg-red-50 text-red-500 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined">error_outline</span>
          </div>
        </div>
        <div>
          <p class="text-slate-600 text-sm font-medium">Jami xatolar</p>
          <div class="flex items-baseline gap-2">
            <p class="text-slate-900 text-4xl font-bold font-lexend mt-1">{{ stats.totalErrors }}</p>
            <span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">{{ stats.errorChange }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-lg transition-all group">
        <div class="flex justify-between items-start mb-4">
          <div class="p-2.5 rounded-xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined">check_circle_outline</span>
          </div>
        </div>
        <div>
          <p class="text-slate-600 text-sm font-medium">Tuzatilgan</p>
          <div class="flex items-baseline gap-2">
            <p class="text-slate-900 text-4xl font-bold font-lexend mt-1">{{ stats.corrected }}</p>
            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{{ stats.correctedChange }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-lg transition-all group">
        <div class="flex justify-between items-start mb-4">
          <div class="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined">trending_up</span>
          </div>
        </div>
        <div>
          <p class="text-slate-600 text-sm font-medium">Samaradorlik</p>
          <div class="flex items-baseline gap-2">
            <p class="text-slate-900 text-4xl font-bold font-lexend mt-1">{{ stats.efficiency }}%</p>
            <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{{ stats.efficiencyChange }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Priority Topics Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- High Priority Card -->
      <div class="relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl flex flex-col justify-between p-8">
        <div class="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-primary-500/10 to-transparent pointer-events-none"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3 py-1 text-orange-400 border border-orange-500/20 mb-4">
            <span class="material-symbols-outlined text-sm">warning</span>
            <span class="text-xs font-bold uppercase tracking-wide">Yuqori xatolik</span>
          </div>
          <h3 class="text-2xl font-bold text-white font-lexend mb-2">Ustuvorlik belgilari</h3>
          <p class="text-slate-400 leading-relaxed text-base mb-6">
            Siz ushbu mavzuda <span class="text-white font-bold">7 marta</span> xato qildingiz. Imtihondan o'tish uchun takrorlash tavsiya etiladi.
          </p>
        </div>
        <button class="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary-600 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          <span class="material-symbols-outlined">play_circle</span>
          <span>Mavzuni mashq qilish</span>
        </button>
      </div>

      <!-- Medium Priority Card -->
      <div class="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between p-8 group hover:shadow-lg transition-all">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-600 border border-blue-100 mb-4">
            <span class="material-symbols-outlined text-sm">trending_up</span>
            <span class="text-xs font-bold uppercase tracking-wide">O'rtacha xatolik</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 font-lexend mb-2">Chorrahada harakatlanish</h3>
          <p class="text-slate-600 leading-relaxed text-base mb-6">
            Siz ushbu mavzuda <span class="text-slate-900 font-bold">5 marta</span> xato qildingiz. Bilimlaringizni mustahkamlang.
          </p>
        </div>
        <button class="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 px-4 py-3.5 text-sm font-bold transition-all group-hover:border-blue-200">
          <span class="material-symbols-outlined">play_circle</span>
          <span>Mavzuni mashq qilish</span>
        </button>
      </div>
    </div>

    <!-- Filter & Sort Section -->
    <div class="sticky top-[70px] z-30 bg-white/95 backdrop-blur-sm py-4 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:border-none md:static">
      <div class="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
        <div class="flex gap-2 p-1">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap',
              activeFilter === filter.id
                ? 'bg-slate-900 text-white shadow-md ring-1 ring-slate-900'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto justify-end">
        <span class="text-sm text-slate-600 font-medium">Saralash:</span>
        <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
          <span class="text-sm font-bold text-slate-900">{{ sortOption }}</span>
          <span class="material-symbols-outlined text-slate-600 text-lg">sort</span>
        </button>
      </div>
    </div>

    <!-- Questions List -->
    <div class="flex flex-col gap-8">
      <div
        v-for="question in questions"
        :key="question.id"
        class="flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft"
      >
        <div class="flex flex-col lg:flex-row p-6 lg:p-8 gap-8">
          <!-- Question Content -->
          <div class="flex-1 flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <span class="text-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-primary-500"></span>
                Savol #{{ question.id }} • {{ question.category }}
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold border border-red-100">
                <span class="material-symbols-outlined text-sm">close</span>
                Noto'g'ri
              </span>
            </div>

            <h4 class="text-slate-900 text-xl font-semibold leading-snug font-lexend">
              {{ question.text }}
            </h4>

            <!-- Answer Options -->
            <div class="flex flex-col gap-3">
              <div
                v-for="(answer, index) in question.answers"
                :key="index"
                :class="[
                  'relative flex items-center p-4 rounded-xl border',
                  answer.isCorrect
                    ? 'border-green-600/30 bg-green-50/50'
                    : answer.isUserAnswer
                    ? 'border-red-500/30 bg-red-50/50'
                    : 'border-slate-200 bg-white hover:bg-slate-50 transition-colors'
                ]"
              >
                <div class="flex items-center gap-4 w-full">
                  <div
                    :class="[
                      'size-6 rounded-full border-2 flex items-center justify-center shrink-0',
                      answer.isCorrect
                        ? 'border-green-600 bg-green-600 text-white'
                        : answer.isUserAnswer
                        ? 'border-red-500 bg-white'
                        : 'border-gray-300'
                    ]"
                  >
                    <span v-if="answer.isCorrect" class="material-symbols-outlined text-base font-bold">check</span>
                    <div v-else-if="answer.isUserAnswer" class="size-3 rounded-full bg-red-500"></div>
                  </div>
                  <span :class="['text-sm', answer.isCorrect || answer.isUserAnswer ? 'text-slate-900 font-medium' : 'text-slate-600']">
                    {{ answer.text }}
                  </span>
                </div>
                <div
                  v-if="answer.isUserAnswer"
                  class="absolute right-4 text-[10px] font-bold text-red-500 uppercase tracking-wider opacity-80 bg-white/50 px-2 py-0.5 rounded"
                >
                  Sizning javobingiz
                </div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-[320px] shrink-0">
            <div class="aspect-[4/3] rounded-xl bg-slate-50 overflow-hidden border border-slate-200 relative shadow-sm">
              <div
                class="w-full h-full bg-center"
                :class="question.imageContain ? 'bg-contain bg-no-repeat' : 'bg-cover'"
                :style="{ backgroundImage: `url('${question.image}')` }"
              ></div>
              <div class="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] text-slate-600 font-mono border border-slate-200">
                ID: {{ question.id }}
              </div>
            </div>
          </div>
        </div>

        <!-- Explanation Section -->
        <div class="bg-slate-50 border-t border-slate-200 p-6 lg:px-8">
          <div class="flex gap-4">
            <div class="bg-primary-500/20 text-primary-600 rounded-full p-2 h-fit shrink-0">
              <span class="material-symbols-outlined text-xl">lightbulb</span>
            </div>
            <div class="space-y-1.5">
              <span class="text-slate-900 text-sm font-bold uppercase tracking-wide">Tushuntirish</span>
              <p class="text-slate-600 text-sm leading-relaxed">
                {{ question.explanation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Action Button -->
  <div class="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
    <div class="pointer-events-auto shadow-2xl shadow-primary-500/20 rounded-2xl">
      <button class="flex items-center justify-center rounded-2xl h-14 px-8 bg-slate-900 hover:bg-black active:scale-95 transition-all text-white gap-3 text-base font-bold shadow-lg ring-4 ring-white">
        <span class="material-symbols-outlined text-primary-500 text-2xl animate-spin-slow">autorenew</span>
        <span>Barcha xatolarni qayta ishlash</span>
      </button>
    </div>
  </div>

  <div class="h-24"></div>
</template>

<script setup>
// Stats data
const stats = ref({
  totalErrors: 142,
  errorChange: '-12%',
  corrected: 89,
  correctedChange: '+24%',
  efficiency: 65,
  efficiencyChange: '+5%'
})

// Filters
const activeFilter = ref('all')
const filters = ref([
  { id: 'all', label: 'Barchasi' },
  { id: 'signs', label: 'Belgilar (12)' },
  { id: 'intersection', label: 'Chorrahada (8)' },
  { id: 'technical', label: 'Texnik holat (5)' }
])

const sortOption = ref('Eng yangi')

// Questions data
const questions = ref([
  {
    id: 482,
    category: 'Chorrahalar',
    text: 'Svetoforning yashil ishorasi yonganda, chapga burilayotgan yengil avtomobil haydovchisi kimga yo\'l berishi kerak?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAt941YHICZHd7Qd3w1EndOPzATPCZE8w8ReA05iM9lxmCDK5xfN_WYU0nnY1AOe3Ln4tGAO8y6-BPuXO3aRQw0ZRMB0XtF8WYrvX-WqK9fudbTgSwjZ7B6fj0IDyLt_4cA1TTBmYRdDbj19_WBhTyJDaSXPpHvMvGDBuAQ0JOvGtNj6Qak1CbfDlwpyOKzMZUpUCCyEX82C3sCIigMnkRCX-_UblxosgfEdI70hsM_YfbSfgNsPoIGXkpkM4zlIUsFONpdGCj7xI',
    imageContain: false,
    answers: [
      { text: 'Faqat piyodalarga', isCorrect: false, isUserAnswer: true },
      { text: 'Piyodalarga va qarama-qarshi yo\'nalishdan to\'g\'riga harakatlanayotgan transport vositasiga', isCorrect: true, isUserAnswer: false },
      { text: 'Hech kimga', isCorrect: false, isUserAnswer: false }
    ],
    explanation: 'Svetoforning yashil ishorasi yonganda, chapga burilayotgan relssiz transport vositasi haydovchisi qarama-qarshi yo\'nalishdan to\'g\'riga yoki o\'ngga harakatlanayotgan transport vositalariga, shuningdek qatnov qismini kesib o\'tayotgan piyodalarga yo\'l berishi shart.'
  },
  {
    id: 103,
    category: 'Yo\'l belgilari',
    text: 'Ushbu belgi qanday ma\'noni anglatadi?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU8au9Ajx1uVmkpJqRkzlNou_DJEuMYG_hdz6MT_0Zr5eiJJw4SSDqYgqkvIbkyU31nS5LI9dQXg25JdOfU-9q0bFsA9SviWu_l3AUeZ1rxP_flDb-k2JG8JjzVLO4O8D-PetVv6p3MKEpFqlh52t4m-O55XDcJEJQNLr3kR3n38XY0b2QuUesF8OU6GagLsGqwsAjgddPIetE6CHZIvIljLtQTz7Gvm-omwWM9kMgvAUY6hDcMX6Bxz0VzhWeIlySx9ymUEUi-G4',
    imageContain: true,
    answers: [
      { text: 'To\'xtash taqiqlanadi', isCorrect: true, isUserAnswer: false },
      { text: 'To\'xtab turish taqiqlanadi', isCorrect: false, isUserAnswer: true },
      { text: 'Kirish taqiqlanadi', isCorrect: false, isUserAnswer: false }
    ],
    explanation: '3.27 "To\'xtash taqiqlanadi" belgisi transport vositalarining to\'xtashini va to\'xtab turishini taqiqlaydi. Ushbu belgi faqat yo\'lning o\'zi o\'rnatilgan tomoniga amal qiladi va belgilangan hududda har qanday to\'xtash qoidabuzarlik hisoblanadi (favqulodda to\'xtash bundan mustasno).'
  }
])
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>

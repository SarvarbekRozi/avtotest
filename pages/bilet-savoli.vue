<template>
  <div class="bg-light-secondary dark:bg-dark-secondary text-text-main dark:text-white font-lexend h-screen flex flex-col overflow-hidden">

    <!-- Test Status Bar -->
    <div class="flex-none bg-white dark:bg-dark-tertiary border-b border-light-border dark:border-[#2a3c32] px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm z-10">
      <!-- Ticket Info -->
      <div class="flex items-center gap-3 min-w-fit">
        <span class="material-symbols-outlined text-primary-400">article</span>
        <span class="font-bold text-lg text-text-main dark:text-white">Bilet #{{ ticketNumber }}</span>
      </div>
      <!-- Question Progress -->
      <div class="flex-1 w-full md:max-w-3xl overflow-x-auto no-scrollbar">
        <div class="flex items-center md:justify-center gap-2 px-2">
          <!-- Completed -->
          <button
            v-for="n in 4"
            :key="'completed-' + n"
            @click="currentQuestion = n"
            class="size-8 min-w-[2rem] rounded-full bg-primary-400/20 text-primary-400 dark:text-primary-400 font-medium text-sm flex items-center justify-center transition-colors hover:bg-primary-400 hover:text-white"
          >
            {{ n }}
          </button>
          <!-- Current -->
          <button class="size-9 min-w-[2.25rem] rounded-full bg-primary-400 text-text-main font-bold text-base flex items-center justify-center shadow-lg shadow-primary-400/30 ring-2 ring-primary-400/20 ring-offset-2 ring-offset-white dark:ring-offset-dark-tertiary">
            {{ currentQuestion }}
          </button>
          <!-- Remaining -->
          <button
            v-for="n in [6, 7, 8, 9, 10]"
            :key="'remaining-' + n"
            @click="currentQuestion = n"
            :class="['size-8 min-w-[2rem] rounded-full bg-light-tertiary dark:bg-[#2a3c32] text-gray-500 dark:text-gray-400 font-medium text-sm flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3a4c42] transition-colors', n > 8 ? 'hidden sm:flex' : '']"
          >
            {{ n }}
          </button>
          <!-- Indication of more items -->
          <span class="text-gray-400 text-xs">...</span>
          <button class="size-8 min-w-[2rem] rounded-full bg-light-tertiary dark:bg-[#2a3c32] text-gray-500 dark:text-gray-400 font-medium text-sm flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3a4c42] transition-colors">20</button>
        </div>
      </div>
      <!-- Timer -->
      <div class="flex items-center gap-2 min-w-fit bg-light-border dark:bg-[#2a3c32] px-3 py-1.5 rounded-lg">
        <span class="material-symbols-outlined text-sm text-text-main dark:text-primary-400">timer</span>
        <div class="flex items-center gap-1">
          <span class="text-text-main dark:text-white font-bold font-mono text-lg">{{ formattedTime }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content Layout (Split Screen) -->
    <main class="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
      <!-- Left Side: Visual/Image -->
      <div class="lg:w-7/12 w-full bg-light-tertiary dark:bg-black/40 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
        <!-- Background Pattern for depth -->
        <div class="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style="background-image: radial-gradient(#36e27b 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="relative w-full h-full max-h-[60vh] lg:max-h-full flex items-center justify-center">
          <!-- Image Container with soft shadow -->
          <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-full max-h-full border border-gray-200 dark:border-gray-700">
            <img
              :src="currentQuestionData.image"
              :alt="currentQuestionData.imageAlt"
              class="object-contain max-h-full max-w-full w-auto h-auto block"
            />
            <!-- Zoom Button Overlay -->
            <button class="absolute bottom-4 right-4 size-10 bg-white/90 hover:bg-white dark:bg-black/60 dark:hover:bg-black/80 rounded-full flex items-center justify-center shadow-lg transition-all backdrop-blur-sm group">
              <span class="material-symbols-outlined text-gray-700 dark:text-white group-hover:scale-110 transition-transform">zoom_in</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Side: Question & Interactions -->
      <div class="lg:w-5/12 w-full bg-light-primary dark:bg-dark-tertiary flex flex-col h-full border-l border-light-border dark:border-[#2a3c32] shadow-[-4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6 lg:p-8 lg:px-10">
          <div class="max-w-2xl mx-auto flex flex-col h-full">
            <!-- Question Header -->
            <div class="mb-8">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-2.5 py-0.5 rounded-full bg-primary-400/10 text-primary-400 text-xs font-bold uppercase tracking-wider">Savol {{ currentQuestion }}/20</span>
                <span class="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">{{ currentQuestionData.category }}</span>
              </div>
              <h1 class="text-text-main dark:text-white text-2xl lg:text-3xl font-bold leading-tight">
                {{ currentQuestionData.question }}
              </h1>
            </div>

            <!-- Answers Stack -->
            <div class="flex flex-col gap-3">
              <button
                v-for="(option, index) in currentQuestionData.options"
                :key="index"
                @click="selectAnswer(index)"
                :class="[
                  'group relative w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4 shadow-sm',
                  selectedAnswer === index
                    ? 'border-primary-400 bg-primary-400/5 dark:bg-primary-400/10 shadow-md'
                    : 'border-transparent bg-light-tertiary dark:bg-[#1f3529] hover:bg-white hover:border-primary-400/50 dark:hover:bg-[#264030] hover:shadow-md'
                ]"
              >
                <div :class="[
                  'size-10 min-w-[2.5rem] rounded-lg flex items-center justify-center font-bold transition-colors',
                  selectedAnswer === index
                    ? 'bg-primary-400 text-text-main shadow-sm'
                    : 'bg-white dark:bg-dark-tertiary border border-gray-200 dark:border-gray-600 text-gray-500 group-hover:text-primary-400 group-hover:border-primary-400'
                ]">
                  {{ option.letter }}
                </div>
                <span :class="[
                  'text-base lg:text-lg font-medium',
                  selectedAnswer === index ? 'text-text-main dark:text-white font-bold' : 'text-text-main dark:text-gray-100'
                ]">
                  {{ option.text }}
                </span>
                <span v-if="selectedAnswer === index" class="material-symbols-outlined ml-auto text-primary-400">check_circle</span>
              </button>
            </div>

            <!-- Spacer -->
            <div class="flex-grow min-h-[2rem]"></div>
          </div>
        </div>

        <!-- Bottom Action Bar (Fixed at bottom of right panel) -->
        <div class="p-6 border-t border-light-border dark:border-[#2a3c32] bg-white/80 dark:bg-dark-tertiary/80 backdrop-blur-md">
          <div class="max-w-2xl mx-auto flex items-center justify-between">
            <button
              @click="previousQuestion"
              :disabled="currentQuestion === 1"
              class="flex items-center gap-2 text-gray-500 hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="material-symbols-outlined">arrow_back</span>
              <span>Oldingi</span>
            </button>
            <button
              @click="nextQuestion"
              class="flex items-center gap-2 bg-text-main hover:bg-black text-white dark:bg-primary-400 dark:text-text-main dark:hover:bg-primary-600 transition-colors font-bold text-base px-8 py-3 rounded-xl shadow-lg shadow-gray-200 dark:shadow-none"
            >
              <span>Keyingi savol</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const ticketNumber = ref(15)
const currentQuestion = ref(5)
const selectedAnswer = ref(2) // C is selected by default (index 2)
const timeRemaining = ref(1185) // 19:45 in seconds

const currentQuestionData = ref({
  question: "Chorrahada kim birinchi o'tish huquqiga ega?",
  category: "Chorrahada harakatlanish",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAznySkqw1Zw35vzmgzFqh0M2f8L6TvNBuaCVilqQMPPCYVfqhGci1aTYUqoDi0yCQyhC4Dp1smCaiX4yJVZmcD2J9s1VEP4EA_TltXUZe_L3sGyaN-Kc-n-djegU8xtmcHVm68Qc8frYQ-sN0YOP7MhPgEfe0wDfKvsqSvvSQWqDzITXMGOx2xnlBEhNkqTP8Rrk0pkOtkf0cUxt_WwrnuPNgQNMz-GMi-8CjHAXglJpcoULax_jUBDbxATIIYQvpGQ_wkoojKL7o",
  imageAlt: "Traffic intersection diagram showing a red car, a green car, and a tram at a 4-way crossing",
  options: [
    { letter: 'A', text: 'Yashil avtomobil' },
    { letter: 'B', text: 'Qizil avtomobil' },
    { letter: 'C', text: 'Tramvay' },
    { letter: 'D', text: 'Barchasi bir vaqtda' }
  ]
})

const formattedTime = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60)
  const seconds = timeRemaining.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const selectAnswer = (index) => {
  selectedAnswer.value = index
}

const nextQuestion = () => {
  if (currentQuestion.value < 20) {
    currentQuestion.value++
    selectedAnswer.value = null
  }
}

const previousQuestion = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--
    selectedAnswer.value = null
  }
}

// Timer countdown
onMounted(() => {
  const timer = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)

  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>

<style scoped>
/* Custom scrollbar for question numbers if needed */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

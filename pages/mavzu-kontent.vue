<template>
  <div class="bg-light-secondary dark:bg-dark-primary min-h-screen flex flex-col text-text-main dark:text-white transition-colors duration-200">
    <main class="flex-1 flex flex-col items-center py-10 px-4 lg:px-0">
      <div class="w-full max-w-5xl flex flex-col gap-8">
        <!-- Breadcrumbs -->
        <div class="flex flex-wrap items-center gap-2 text-sm px-1">
          <NuxtLink to="/" class="text-gray-500 dark:text-gray-400 font-medium hover:text-primary-500 hover:underline transition-colors">
            Bosh sahifa
          </NuxtLink>
          <span class="text-gray-400 material-symbols-outlined text-sm">chevron_right</span>
          <NuxtLink to="/mavzu-tanlash" class="text-gray-500 dark:text-gray-400 font-medium hover:text-primary-500 hover:underline transition-colors">
            Mavzular
          </NuxtLink>
          <span class="text-gray-400 material-symbols-outlined text-sm">chevron_right</span>
          <span class="text-primary-500 font-semibold">{{ currentTopic.title }}</span>
        </div>

        <!-- Topic Header -->
        <div class="flex flex-col gap-6">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-primary-500/10 text-primary-500 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                {{ currentTopic.badge }}
              </span>
            </div>
            <h1 class="text-3xl lg:text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-3">
              {{ currentTopic.title }}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-lg max-w-3xl">
              {{ currentTopic.description }}
            </p>
          </div>

          <!-- Theory Section -->
          <div class="bg-white dark:bg-dark-secondary rounded-2xl shadow-soft border border-light-border dark:border-dark-tertiary overflow-hidden transition-all hover:shadow-lg">
            <div class="flex flex-col md:flex-row">
              <div class="p-8 flex-1 flex flex-col justify-center gap-6">
                <div class="flex items-center gap-3">
                  <div class="bg-primary-500/10 text-primary-500 p-2 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined">menu_book</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Nazariy qism</h3>
                </div>
                <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  <p v-for="(paragraph, index) in currentTopic.theoryText" :key="index" v-html="paragraph"></p>
                </div>
              </div>
              <div class="w-full md:w-5/12 bg-slate-50 dark:bg-dark-tertiary min-h-[280px] flex items-center justify-center p-8 border-l border-gray-100 dark:border-dark-tertiary">
                <img
                  :src="currentTopic.theoryImage"
                  :alt="currentTopic.theoryImageAlt"
                  class="max-w-full h-auto rounded-lg shadow-sm object-contain mix-blend-multiply dark:mix-blend-normal transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-light-secondary dark:bg-dark-primary px-4 text-sm text-gray-400 uppercase tracking-widest font-semibold">
              Test
            </span>
          </div>
        </div>

        <!-- Test Section -->
        <section class="flex flex-col gap-6" id="test-section">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
              <span class="flex items-center justify-center size-10 rounded-full bg-primary-500/10 text-primary-500">
                <span class="material-symbols-outlined">quiz</span>
              </span>
              Mini-Test: Bilimingizni sinang
            </h2>
            <span class="text-sm font-semibold bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-4 py-1.5 rounded-full text-gray-700 dark:text-gray-200 shadow-sm">
              Savol {{ currentQuestion }} / {{ totalQuestions }}
            </span>
          </div>

          <div class="bg-white dark:bg-dark-secondary rounded-2xl shadow-soft border border-light-border dark:border-dark-tertiary overflow-hidden">
            <!-- Progress Bar -->
            <div class="w-full h-1.5 bg-gray-100 dark:bg-gray-800">
              <div
                class="h-full bg-primary-500 rounded-r-full shadow-[0_0_10px_rgba(19,236,91,0.5)] transition-all duration-300"
                :style="{ width: `${(currentQuestion / totalQuestions) * 100}%` }"
              ></div>
            </div>

            <div class="p-6 md:p-8 flex flex-col gap-8">
              <!-- Question Content -->
              <div class="flex flex-col lg:flex-row gap-8 items-start">
                <!-- Question Image -->
                <div class="w-full lg:w-[320px] shrink-0">
                  <div class="aspect-[4/3] w-full rounded-xl bg-gray-50 dark:bg-dark-tertiary border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center p-6 group">
                    <img
                      :src="questions[currentQuestion - 1].image"
                      :alt="questions[currentQuestion - 1].imageAlt"
                      class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <!-- Question and Answers -->
                <div class="flex-1 flex flex-col gap-6 w-full">
                  <div>
                    <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {{ questions[currentQuestion - 1].question }}
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      {{ questions[currentQuestion - 1].hint }}
                    </p>
                  </div>

                  <!-- Answer Options -->
                  <div class="flex flex-col gap-3">
                    <button
                      v-for="(answer, index) in questions[currentQuestion - 1].answers"
                      :key="index"
                      :class="[
                        'group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all w-full shadow-sm',
                        getAnswerClasses(index, answer)
                      ]"
                      @click="selectAnswer(index)"
                      :disabled="selectedAnswer !== null"
                    >
                      <div
                        :class="[
                          'flex items-center justify-center size-6 shrink-0 rounded-full border-2 transition-colors',
                          getAnswerIconClasses(index, answer)
                        ]"
                      >
                        <span v-if="showAnswerIcon(index, answer)" class="material-symbols-outlined text-sm font-bold">
                          {{ getAnswerIcon(index, answer) }}
                        </span>
                      </div>
                      <span :class="getAnswerTextClasses(index, answer)">
                        {{ answer.text }}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Feedback Section -->
              <div
                v-if="selectedAnswer !== null && !questions[currentQuestion - 1].answers[selectedAnswer].isCorrect"
                class="animate-fade-in-down rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-6 flex flex-col sm:flex-row gap-5"
              >
                <div class="shrink-0 pt-1">
                  <div class="size-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-red-600 dark:text-red-400">lightbulb</span>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <h4 class="text-red-800 dark:text-red-300 font-bold text-lg">Nega bu noto'g'ri?</h4>
                  <p class="text-red-700 dark:text-red-400 text-sm leading-relaxed" v-html="questions[currentQuestion - 1].explanation"></p>
                </div>
              </div>

              <!-- Navigation -->
              <div class="flex items-center justify-end pt-6 border-t border-gray-100 dark:border-gray-800">
                <button
                  v-if="selectedAnswer !== null"
                  @click="nextQuestion"
                  class="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary-600/20 hover:shadow-xl transition-all active:scale-[0.98]"
                >
                  {{ currentQuestion < totalQuestions ? 'Keyingi savol' : 'Yakunlash' }}
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const currentQuestion = ref(1)
const totalQuestions = ref(5)
const selectedAnswer = ref(null)

const currentTopic = ref({
  badge: '3-Mavzu',
  title: 'Ogohlantiruvchi belgilar',
  description: 'Ushbu darsda siz ogohlantiruvchi belgilar, ularning turlari va yo\'l harakati xavfsizligidagi ahamiyati haqida o\'rganasiz.',
  theoryText: [
    'Ogohlantiruvchi belgilar haydovchilarni xavfli yo\'l qismiga yaqinlashayotgani haqida xabardor qiladi. Ushbu belgilar odatda oq fonli qizil hoshiyali uchburchak shaklida bo\'ladi.',
    'Aholi punktlarida ushbu belgilar xavfli joydan <strong class="text-primary-500 dark:text-blue-400 font-bold">50-100 metr</strong> oldin, aholi punktlaridan tashqarida esa <strong class="text-primary-500 dark:text-blue-400 font-bold">150-300 metr</strong> oldin o\'rnatiladi.'
  ],
  theoryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYsHmPlx7Ktp834Ob_WJilclAYrnIVC7cZg3dqTXpmT5IZ18zVl9afZ6RyZ9j1yJ4yWhEAPcUK0_o84DIFgJmbr5N8Hsyzne1LyZyg5VzMUxN1vLGHJqQCN_T7QdcTJz3_5vpszd3EUUWHOwwkbfykIe2FFY5XN86UAzNAInIrSEBzGQTPSzSH8B6WXhGpju0pjU1bMWdjFB1gdXYFWKp9s9HdirTR5s-rbvqnQ8wh6R8uQoeCur9fGfbjJktH3iBCfLBrgZvb-sg',
  theoryImageAlt: 'Illustration of a red triangular warning traffic sign showing a winding road'
})

const questions = ref([
  {
    question: 'Rasmda tasvirlangan belgi qanday ma\'noni anglatadi?',
    hint: 'To\'g\'ri javobni tanlang. Eslatma: Belgi maktablar va bolalar bog\'chalari yaqinida tez-tez uchraydi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mUWIOq15AXHt6PGpaY15XB0974jnlnhbpU7MLaa_YVqnjA2P8uNXyuUXVXudgP27TO5ri-e1Atp_F8boIJPncykOlrG8zFlWP4ZezDUIP-Ml19Khc0f-oJ9ak5Jo9KltbBJXX5DeT0ADQ4twb5a-y00RR-uRK5Zplo-qA7iH4mFwLyqOTKW-q6BRlmJ2aJyMW82Jg8MJV0ReAThsfqrciNeGyItVysc0goBUW7q_T0bP0lpSCGkD76JcAZtXGF0fJfU6_I8t-vs',
    imageAlt: 'Traffic sign showing two children running inside a red triangle',
    answers: [
      { text: 'Piyodalar o\'tish joyi', isCorrect: false },
      { text: 'Bolalar', isCorrect: true },
      { text: 'Tezlikni oshirish taqiqlanadi', isCorrect: false }
    ],
    explanation: '"Piyodalar o\'tish joyi" belgisi odatda piyoda yurib ketayotgan odam tasviri bilan bo\'ladi. <br class="hidden sm:block"/>' +
                 'Rasmda yugurib ketayotgan bolalar tasvirlangan, bu esa <strong class="underline decoration-2 underline-offset-2">"Bolalar"</strong> ogohlantiruvchi belgisidir. U haydovchini yo\'lning qatnov qismida bolalar paydo bo\'lishi ehtimoli haqida ogohlantiradi.'
  },
  {
    question: 'Quyidagi belgilarning qaysi biri to\'g\'ri?',
    hint: 'Diqqat bilan o\'ylab javob bering.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYsHmPlx7Ktp834Ob_WJilclAYrnIVC7cZg3dqTXpmT5IZ18zVl9afZ6RyZ9j1yJ4yWhEAPcUK0_o84DIFgJmbr5N8Hsyzne1LyZyg5VzMUxN1vLGHJqQCN_T7QdcTJz3_5vpszd3EUUWHOwwkbfykIe2FFY5XN86UAzNAInIrSEBzGQTPSzSH8B6WXhGpju0pjU1bMWdjFB1gdXYFWKp9s9HdirTR5s-rbvqnQ8wh6R8uQoeCur9fGfbjJktH3iBCfLBrgZvb-sg',
    imageAlt: 'Illustration of a red triangular warning traffic sign',
    answers: [
      { text: 'Xavfli burilish', isCorrect: true },
      { text: 'Yol ta\'mirlash', isCorrect: false },
      { text: 'Yo\'l tor', isCorrect: false }
    ],
    explanation: 'Bu ogohlantiruvchi belgi haydovchini xavfli burilish haqida ogohlantiradi.'
  },
  {
    question: 'Ogohlantiruvchi belgilar qanday shakldagi bo\'ladi?',
    hint: 'Belgilarning shakli juda muhim.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYsHmPlx7Ktp834Ob_WJilclAYrnIVC7cZg3dqTXpmT5IZ18zVl9afZ6RyZ9j1yJ4yWhEAPcUK0_o84DIFgJmbr5N8Hsyzne1LyZyg5VzMUxN1vLGHJqQCN_T7QdcTJz3_5vpszd3EUUWHOwwkbfykIe2FFY5XN86UAzNAInIrSEBzGQTPSzSH8B6WXhGpju0pjU1bMWdjFB1gdXYFWKp9s9HdirTR5s-rbvqnQ8wh6R8uQoeCur9fGfbjJktH3iBCfLBrgZvb-sg',
    imageAlt: 'Warning traffic sign illustration',
    answers: [
      { text: 'Doira shaklida', isCorrect: false },
      { text: 'Uchburchak shaklida', isCorrect: true },
      { text: 'To\'rtburchak shaklida', isCorrect: false }
    ],
    explanation: 'Ogohlantiruvchi belgilar odatda oq fonli qizil hoshiyali uchburchak shaklida bo\'ladi.'
  },
  {
    question: 'Aholi punktlarida ogohlantiruvchi belgilar xavfli joydan qancha masofada o\'rnatiladi?',
    hint: 'Masofani eslang.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYsHmPlx7Ktp834Ob_WJilclAYrnIVC7cZg3dqTXpmT5IZ18zVl9afZ6RyZ9j1yJ4yWhEAPcUK0_o84DIFgJmbr5N8Hsyzne1LyZyg5VzMUxN1vLGHJqQCN_T7QdcTJz3_5vpszd3EUUWHOwwkbfykIe2FFY5XN86UAzNAInIrSEBzGQTPSzSH8B6WXhGpju0pjU1bMWdjFB1gdXYFWKp9s9HdirTR5s-rbvqnQ8wh6R8uQoeCur9fGfbjJktH3iBCfLBrgZvb-sg',
    imageAlt: 'Warning traffic sign',
    answers: [
      { text: '50-100 metr', isCorrect: true },
      { text: '150-300 metr', isCorrect: false },
      { text: '10-20 metr', isCorrect: false }
    ],
    explanation: 'Aholi punktlarida ogohlantiruvchi belgilar xavfli joydan 50-100 metr oldin o\'rnatiladi.'
  },
  {
    question: 'Aholi punktlaridan tashqarida ogohlantiruvchi belgilar qancha masofada o\'rnatiladi?',
    hint: 'Aholi punktlaridan tashqarida masofa farq qiladi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYsHmPlx7Ktp834Ob_WJilclAYrnIVC7cZg3dqTXpmT5IZ18zVl9afZ6RyZ9j1yJ4yWhEAPcUK0_o84DIFgJmbr5N8Hsyzne1LyZyg5VzMUxN1vLGHJqQCN_T7QdcTJz3_5vpszd3EUUWHOwwkbfykIe2FFY5XN86UAzNAInIrSEBzGQTPSzSH8B6WXhGpju0pjU1bMWdjFB1gdXYFWKp9s9HdirTR5s-rbvqnQ8wh6R8uQoeCur9fGfbjJktH3iBCfLBrgZvb-sg',
    imageAlt: 'Warning traffic sign on highway',
    answers: [
      { text: '50-100 metr', isCorrect: false },
      { text: '150-300 metr', isCorrect: true },
      { text: '500-1000 metr', isCorrect: false }
    ],
    explanation: 'Aholi punktlaridan tashqarida ogohlantiruvchi belgilar xavfli joydan 150-300 metr oldin o\'rnatiladi.'
  }
])

const selectAnswer = (index) => {
  if (selectedAnswer.value === null) {
    selectedAnswer.value = index
  }
}

const nextQuestion = () => {
  if (currentQuestion.value < totalQuestions.value) {
    currentQuestion.value++
    selectedAnswer.value = null
  } else {
    // Navigate to results page or back to topics
    navigateTo('/mavzu-tanlash')
  }
}

const getAnswerClasses = (index, answer) => {
  if (selectedAnswer.value === null) {
    return 'border border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:bg-primary-500/5 dark:hover:bg-primary-500/10 bg-white dark:bg-transparent hover:shadow-md'
  }

  if (selectedAnswer.value === index) {
    if (answer.isCorrect) {
      return 'border-2 border-green-500 bg-green-50/50 dark:bg-green-900/10'
    } else {
      return 'border-2 border-red-500 bg-red-50/50 dark:bg-red-900/10'
    }
  }

  if (answer.isCorrect) {
    return 'border-2 border-green-500 bg-green-50/50 dark:bg-green-900/10'
  }

  return 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent opacity-50'
}

const getAnswerIconClasses = (index, answer) => {
  if (selectedAnswer.value === null) {
    return 'border-gray-300 group-hover:border-primary-500'
  }

  if (selectedAnswer.value === index && !answer.isCorrect) {
    return 'border-red-500 text-red-500 bg-white dark:bg-transparent'
  }

  if (answer.isCorrect) {
    return 'border-green-500 text-green-500 bg-white dark:bg-transparent'
  }

  return 'border-gray-300'
}

const getAnswerTextClasses = (index, answer) => {
  if (selectedAnswer.value === null) {
    return 'font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary-500'
  }

  if (selectedAnswer.value === index && !answer.isCorrect) {
    return 'font-medium text-red-700 dark:text-red-300'
  }

  if (answer.isCorrect) {
    return 'font-medium text-green-700 dark:text-green-300'
  }

  return 'font-medium text-gray-700 dark:text-gray-200'
}

const showAnswerIcon = (index, answer) => {
  return selectedAnswer.value !== null && (answer.isCorrect || selectedAnswer.value === index)
}

const getAnswerIcon = (index, answer) => {
  if (answer.isCorrect) {
    return 'check'
  }
  if (selectedAnswer.value === index && !answer.isCorrect) {
    return 'close'
  }
  return ''
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.3s ease-out;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

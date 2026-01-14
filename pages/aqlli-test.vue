<template>
  <div class="flex flex-col gap-8">
    <!-- Progress Bar Section -->
    <section class="w-full max-w-4xl mx-auto">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between items-end">
          <div>
            <h2 class="text-slate-900 text-lg font-bold">Mavzu: {{ currentTopic }}</h2>
            <p class="text-text-secondary text-sm mt-1">Aqlli test rejimi</p>
          </div>
          <div class="text-right">
            <span class="text-2xl font-bold text-primary-500">{{ progress }}%</span>
            <p class="text-text-secondary text-xs font-medium">Progress</p>
          </div>
        </div>
        <!-- Progress Track -->
        <div class="h-3 w-full bg-light-border rounded-full overflow-hidden">
          <div
            class="h-full bg-primary-500 rounded-full transition-all duration-500 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <p class="text-text-secondary text-sm font-medium text-right">
          {{ currentQuestion }} / {{ totalQuestions }} savol
        </p>
      </div>
    </section>

    <!-- Question & Content Grid -->
    <section class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Visual (Scenario) -->
      <div class="lg:col-span-7 flex flex-col gap-4">
        <div class="relative aspect-video w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group cursor-pointer" @click="zoomImage">
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url('${questionData.image}')` }"
          ></div>
          <!-- Zoom hint overlay -->
          <div class="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined">zoom_in</span>
          </div>
        </div>
        <div class="flex items-center gap-2 text-text-secondary text-sm bg-white px-4 py-2 rounded-lg border border-slate-200 w-fit">
          <span class="material-symbols-outlined text-[18px]">info</span>
          <span>Tasvirni kattalashtirish uchun bosing</span>
        </div>
      </div>

      <!-- Right Column: Question & Interaction -->
      <div class="lg:col-span-5 flex flex-col gap-6">
        <!-- Question Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 class="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2">
            {{ questionData.question }}
          </h3>
          <p class="text-text-secondary text-base">
            {{ questionData.description }}
          </p>
        </div>

        <!-- Answer Options -->
        <div class="flex flex-col gap-3">
          <button
            v-for="(option, index) in questionData.options"
            :key="index"
            @click="selectAnswer(index)"
            :disabled="answerSelected"
            :class="[
              'group flex w-full items-center p-4 rounded-xl border-2 transition-all text-left relative',
              getOptionClass(option, index)
            ]"
          >
            <!-- Status Icon (shown after answer) -->
            <div
              v-if="answerSelected && (option.isCorrect || option.isSelected)"
              class="absolute right-4"
              :class="option.isCorrect ? 'text-primary-500' : 'text-red-500'"
            >
              <span class="material-symbols-outlined">
                {{ option.isCorrect ? 'check_circle' : 'cancel' }}
              </span>
            </div>

            <!-- Option Letter -->
            <div
              :class="[
                'flex items-center justify-center size-8 rounded-lg font-bold mr-4 transition-colors',
                getLetterClass(option, index)
              ]"
            >
              {{ String.fromCharCode(65 + index) }}
            </div>

            <!-- Option Text -->
            <span class="text-base font-medium text-slate-900">{{ option.text }}</span>
          </button>
        </div>

        <!-- Explanation / Feedback (Visible after answer) -->
        <div v-if="answerSelected" class="p-4 bg-light-secondary rounded-xl border border-slate-200">
          <div class="flex gap-2 text-slate-900 font-bold mb-1 items-center">
            <span class="material-symbols-outlined text-primary-500">lightbulb</span>
            <span>Tushuntirish:</span>
          </div>
          <p class="text-sm text-text-secondary leading-relaxed">
            {{ questionData.explanation }}
          </p>
        </div>

        <!-- Action Footer -->
        <div class="flex items-center gap-4 pt-2">
          <button
            @click="previousQuestion"
            :disabled="currentQuestion === 1"
            class="flex-1 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Oldingi
          </button>
          <button
            @click="nextQuestion"
            :disabled="!answerSelected"
            class="flex-[2] h-12 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{{ currentQuestion === totalQuestions ? 'Tugatish' : 'Keyingi savol' }}</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Smart Assistant Feedback (Adaptive Learning) -->
    <div
      v-if="showAssistant"
      class="fixed bottom-6 right-6 left-6 md:left-auto max-w-md z-40 animate-in slide-in-from-bottom-5 fade-in duration-500"
    >
      <div class="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200">
        <div class="relative shrink-0">
          <div
            class="size-12 rounded-full bg-cover bg-center border-2 border-primary-500"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJFQPHu94r3_I_PHxvSieu-YkNfR7yccHVR6KbqXPIqrPGCBabSUO1n9ip9GeE8yGdoyytohZlgpRgf-fx7DgzLGpXL7EhNcCJHuo0n0pS8XKOIyzhbWdSJBg7GNKaMl9PUCWYQKtenf-KkMzQxi-pxNMoxWd7U_VItsNp4U6OXorxnPHvF3uwCeqiMrYIAU-favfx57clh2THbrxYuIAYvd21TyPCXbKADLjuxempoDVDW92v9SP6JlUrdeefpgefLieMBCayO98');"
          ></div>
          <div class="absolute -bottom-1 -right-1 size-4 bg-primary-500 rounded-full border-2 border-white"></div>
        </div>
        <div class="flex flex-col gap-2">
          <div>
            <p class="text-primary-500 text-xs font-bold uppercase tracking-wider mb-0.5">Aqlli Yordamchi</p>
            <p class="text-slate-900 text-sm leading-snug font-medium">
              Siz bu turdagi savollarda tez-tez xato qilayapsiz. Ushbu mavzudan ko'proq savol beraymi?
            </p>
          </div>
          <div class="flex gap-2 mt-1">
            <button
              @click="acceptAssistantSuggestion"
              class="px-4 py-1.5 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 text-xs font-bold transition-colors"
            >
              Ha, albatta
            </button>
            <button
              @click="dismissAssistant"
              class="px-4 py-1.5 rounded-lg text-text-secondary hover:text-slate-900 text-xs font-medium transition-colors"
            >
              Yo'q, keyinroq
            </button>
          </div>
        </div>
        <button
          @click="dismissAssistant"
          class="text-slate-500 hover:text-slate-900 transition-colors -mt-1 -mr-1"
        >
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Progress tracking
const currentQuestion = ref(13)
const totalQuestions = ref(20)
const progress = computed(() => Math.round((currentQuestion.value / totalQuestions.value) * 100))
const currentTopic = ref('Chorrahalardan o\'tish qoidalari')

// Answer state
const answerSelected = ref(false)
const selectedAnswer = ref(null)

// Assistant state
const showAssistant = ref(true)

// Question data
const questionData = ref({
  question: 'Chorrahada kim birinchi o\'tish huquqiga ega?',
  description: 'Quyidagi rasmga asoslanib to\'g\'ri javobni tanlang. Tramvay va yengil avtomobil harakatlanish yo\'nalishlariga e\'tibor bering.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJKsL0yHgkZ7AW02Qv4QazF3N-G3apT9ZAOej9SdRozmx3V4EQZkGmCp0Hp-NIUb04Q9CAJRPWwGDRcaTg-NRWskcM-K-qmoY3KdhbLzV0hx6kBy7kpZIfFO2zaC8YjHmgTf-maCd-wlWv53gYcbgulpCy5RPAnGP2wQNMIWZBfGW1A6SHF1LXqXSRmWuxTSwQzvHxXWTW5Zt9NsriiBrD-dxH4TjroFFWmZKPxtXzZsA9a3K4ASeHDaqd9gFEOPEID47bhrAomFI',
  options: [
    { text: 'Qizil avtomobil', isCorrect: false, isSelected: false },
    { text: 'Ko\'k avtomobil', isCorrect: false, isSelected: false },
    { text: 'Ikkala avtomobil bir vaqtda', isCorrect: false, isSelected: true },
    { text: 'Tramvay', isCorrect: true, isSelected: false }
  ],
  explanation: 'Teng ahamiyatli yo\'llar chorrahasida tramvay, harakatlanish yo\'nalishidan qat\'i nazar, relssiz transport vositalariga nisbatan oldin o\'tish huquqiga ega.'
})

// Mark the selected answer as already answered for demo
answerSelected.value = true

// Methods
const selectAnswer = (index) => {
  if (answerSelected.value) return

  selectedAnswer.value = index
  answerSelected.value = true

  // Update options to mark selected
  questionData.value.options = questionData.value.options.map((opt, i) => ({
    ...opt,
    isSelected: i === index
  }))
}

const getOptionClass = (option, index) => {
  if (!answerSelected.value) {
    return 'border-slate-200 bg-white hover:border-primary-500/50 hover:bg-primary-500/5'
  }

  if (option.isCorrect) {
    return 'border-primary-500 bg-green-50 shadow-[0_0_15px_rgba(19,236,91,0.2)]'
  }

  if (option.isSelected && !option.isCorrect) {
    return 'border-red-500 bg-red-50'
  }

  return 'border-slate-200 bg-white'
}

const getLetterClass = (option, index) => {
  if (!answerSelected.value) {
    return 'bg-slate-200 text-slate-900 group-hover:bg-primary-500 group-hover:text-slate-900'
  }

  if (option.isCorrect) {
    return 'bg-primary-500 text-slate-900'
  }

  if (option.isSelected && !option.isCorrect) {
    return 'bg-red-500 text-white'
  }

  return 'bg-slate-200 text-slate-700'
}

const nextQuestion = () => {
  if (currentQuestion.value < totalQuestions.value) {
    currentQuestion.value++
    answerSelected.value = false
    selectedAnswer.value = null
    // Reset options
    questionData.value.options = questionData.value.options.map(opt => ({
      ...opt,
      isSelected: false
    }))
  }
}

const previousQuestion = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--
    answerSelected.value = false
    selectedAnswer.value = null
  }
}

const zoomImage = () => {
  // Implement image zoom modal
  console.log('Zoom image')
}

const acceptAssistantSuggestion = () => {
  showAssistant.value = false
  // Implement logic to add more questions from this topic
  console.log('Adding more questions from this topic')
}

const dismissAssistant = () => {
  showAssistant.value = false
}
</script>

<style scoped>
@keyframes slide-in-from-bottom-5 {
  from {
    transform: translateY(1.25rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-in {
  animation-fill-mode: both;
}

.slide-in-from-bottom-5 {
  animation-name: slide-in-from-bottom-5;
}

.fade-in {
  animation-name: fade-in;
}

.duration-500 {
  animation-duration: 500ms;
}
</style>

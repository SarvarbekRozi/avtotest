<template>
  <div class="bg-white text-slate-900 h-screen flex flex-col overflow-hidden selection:bg-primary-600 selection:text-white">
    <main class="flex-1 w-full max-w-[1440px] mx-auto flex flex-col overflow-hidden bg-white">
      <div class="w-full px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-100 z-10 bg-white/90 backdrop-blur-sm sticky top-0">
        <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div class="flex items-center gap-2 text-primary-600 bg-primary-500/5 px-4 py-2 rounded-lg border border-primary-600/10">
            <span class="material-symbols-outlined text-[20px] fill-current">timer</span>
            <span class="text-xl font-bold tabular-nums font-mono tracking-tight">{{ formattedTime }}</span>
          </div>
          <div class="sm:hidden flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
            <span class="text-sm font-bold text-gray-600">{{ currentQuestion }}/{{ totalQuestions }}</span>
          </div>
        </div>

        <div class="hidden sm:flex flex-1 max-w-2xl px-8 flex-col gap-2">
          <div class="flex justify-between items-end">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Imtihon jarayoni</span>
            <span class="text-xs font-bold text-primary-600">{{ progress }}%</span>
          </div>
          <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-primary-600 rounded-r-full shadow-[0_0_10px_rgba(0,198,94,0.3)] transition-all duration-500 ease-out" :style="{ width: progress + '%' }"></div>
          </div>
        </div>

        <div class="hidden sm:flex items-center gap-3">
          <div class="text-right">
            <p class="text-xs text-gray-500 font-medium">Joriy savol</p>
            <div class="flex items-baseline gap-1 justify-end">
              <span class="text-2xl font-bold text-gray-900 leading-none">{{ currentQuestion }}</span>
              <span class="text-sm font-medium text-gray-400">/ {{ totalQuestions }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 w-full min-h-0 p-4 md:p-6 lg:p-8">
        <div class="w-full h-full grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div class="lg:col-span-7 flex flex-col h-full min-h-0">
            <div class="bg-gray-50 rounded-2xl border border-gray-200 p-2 flex items-center justify-center relative overflow-hidden h-full group shadow-inner">
              <div class="w-full h-full relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div class="w-full h-full bg-center bg-contain bg-no-repeat" :style="{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvNgmwAa2x_SvFDqR70mgf8HbWypzOUR-UfiTCAB5hl11PTSd6-yLAzrXuUgQXlAhwxqRl_LmOpPT_uVrgaXMoDaiimlXzgz-of8Vv4w8UdtTEeURdn-ZanMv5d1xAVRYiGch15Eldz1oJu7aErrLzS2yUZuZYz3JU2JO7upW2AqGfnbg24drzpqkmy-mUP8D1hu-5RPAGGyoKLR-FM7Hdii7AsZ5RW1YmP8CUm1_7yYbrn8UTiBjhcP0TD09o8kdVfNyBzbY4xNM')`, backgroundBlendMode: 'multiply' }"></div>
              </div>
              <button class="absolute bottom-6 right-6 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-xl border border-gray-200 shadow-lg transition-all active:scale-95 group-hover:scale-110">
                <span class="material-symbols-outlined text-xl">zoom_in</span>
              </button>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col h-full min-h-0 relative">
            <div class="flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-24">
              <div class="mb-6 space-y-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                  Chorrahalar
                </div>
                <h2 class="text-xl md:text-2xl font-bold leading-snug text-slate-900">
                  Chorrahada harakatlanish navbatini aniqlang.
                </h2>
                <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl flex gap-3 items-start">
                  <span class="material-symbols-outlined text-gray-400 shrink-0 text-xl mt-0.5">help</span>
                  <p class="text-gray-600 text-sm font-medium leading-relaxed">
                    Quyidagi vaziyatda qaysi transport vositasi birinchi bo'lib harakatlanish huquqiga ega?
                  </p>
                </div>
              </div>

              <form class="flex flex-col gap-3 w-full">
                <label v-for="(answer, index) in answers" :key="index" class="group relative flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-primary-600/50 hover:bg-primary-500/5 cursor-pointer transition-all duration-200 active:scale-[0.99]">
                  <input v-model="selectedAnswer" class="peer sr-only" name="answer" type="radio" :value="answer.id"/>
                  <div class="flex items-center justify-center size-12 rounded-lg bg-gray-100 text-gray-500 font-bold text-lg group-hover:bg-white group-hover:text-primary-600 group-hover:shadow-sm transition-all peer-checked:bg-primary-600 peer-checked:text-white shrink-0 ring-1 ring-transparent peer-checked:ring-offset-2 peer-checked:ring-primary-600">
                    {{ answer.label }}
                  </div>
                  <span class="text-gray-800 font-medium text-lg peer-checked:text-primary-600 transition-colors">
                    {{ answer.text }}
                  </span>
                  <div class="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-primary-600 pointer-events-none ring-0"></div>
                </label>
              </form>
            </div>

            <div class="absolute bottom-0 left-0 right-0 pt-6 pb-2 bg-gradient-to-t from-white via-white to-transparent z-10 pr-2">
              <button @click="nextQuestion" class="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(0,198,94,0.4)] group active:scale-[0.98] active:shadow-sm">
                <span>Keyingi savol</span>
                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div class="flex justify-center mt-4">
                <button class="text-gray-400 hover:text-red-500 text-sm font-medium transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-red-50">
                  <span class="material-symbols-outlined text-lg">flag</span>
                  Xatolik haqida xabar berish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentQuestion = ref(5)
const totalQuestions = ref(20)
const timeRemaining = ref(1125) // 18:45 in seconds
const selectedAnswer = ref(null)

const answers = ref([
  { id: 'a', label: 'A', text: 'Qizil avtomobil, keyin ko\'k avtomobil.' },
  { id: 'b', label: 'B', text: 'Ko\'k avtomobil, keyin qizil avtomobil.' },
  { id: 'c', label: 'C', text: 'Ikkalasi bir vaqtda o\'tadi.' },
  { id: 'd', label: 'D', text: 'Yo\'l harakati qoidalarida ko\'rsatilmagan.' }
])

const progress = computed(() => {
  return Math.round((currentQuestion.value / totalQuestions.value) * 100)
})

const formattedTime = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60)
  const seconds = timeRemaining.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

let timerInterval = null

onMounted(() => {
  timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      clearInterval(timerInterval)
      // Navigate to results page when time runs out
      router.push('/imtihon-natijalari')
    }
  }, 1000)
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})

const nextQuestion = () => {
  if (currentQuestion.value < totalQuestions.value) {
    currentQuestion.value++
    selectedAnswer.value = null
  } else {
    // Navigate to results page when all questions are answered
    router.push('/imtihon-natijalari')
  }
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #E2E8F0;
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #CBD5E1;
}
</style>

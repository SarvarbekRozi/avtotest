<template>
  <div class="text-slate-800 overflow-x-hidden min-h-screen flex flex-col bg-white">
    <main class="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        <div class="lg:col-span-7 flex flex-col gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-5 border border-green-200">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Natija
            </div>
            <h1 class="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Imtihon <span class="text-primary-400">muvaffaqiyatli</span> topshirildi!
            </h1>
            <p class="text-slate-500 text-lg leading-relaxed max-w-xl">
              Tabriklaymiz! Siz nazariy imtihondan o'tdingiz. Sizning bilim darajangiz haydovchilik guvohnomasi olish uchun yetarli.
            </p>
          </div>
          <div class="flex flex-wrap gap-4 pt-2">
            <button @click="retakeExam" class="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(54,226,123,0.2)]">
              <span class="material-symbols-outlined text-[20px]">replay</span>
              <span>Qayta topshirish</span>
            </button>
            <NuxtLink to="/" class="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold transition-all hover:scale-105 active:scale-95 border border-slate-200 hover:border-slate-300 shadow-sm">
              <span class="material-symbols-outlined text-[20px]">home</span>
              <span>Bosh sahifa</span>
            </NuxtLink>
          </div>
        </div>

        <div class="lg:col-span-5 w-full">
          <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 relative overflow-hidden h-full flex flex-col justify-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div class="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none opacity-60"></div>
            <div class="relative z-10">
              <div class="flex justify-between items-end mb-4">
                <div>
                  <p class="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wide">Umumiy natija</p>
                  <div class="text-6xl font-black text-slate-900 tracking-tighter">{{ score }}<span class="text-3xl text-primary-400 align-top">%</span></div>
                </div>
                <div class="text-right">
                  <div class="inline-flex flex-col items-end">
                    <span class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">O'tish bali</span>
                    <span class="text-slate-800 font-bold text-lg bg-slate-100 px-2 py-0.5 rounded-lg">80%</span>
                  </div>
                </div>
              </div>
              <div class="w-full h-4 rounded-full bg-slate-100 overflow-hidden mb-8 border border-slate-100">
                <div class="h-full rounded-full bg-primary-600 shadow-[0_0_10px_rgba(54,226,123,0.4)]" :style="{ width: score + '%' }"></div>
              </div>
              <div class="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-start gap-3">
                <span class="material-symbols-outlined text-primary-600 mt-0.5">verified</span>
                <p class="text-sm text-slate-600 font-medium leading-relaxed">
                  Ajoyib natija! Siz {{ totalQuestions }} ta savoldan {{ correctAnswers }} tasiga to'g'ri javob berdingiz. Xatolarni ko'rib chiqing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex items-center gap-5 transition-all hover:-translate-y-1">
          <div class="size-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            <span class="material-symbols-outlined text-[28px]">quiz</span>
          </div>
          <div>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Jami savollar</p>
            <p class="text-slate-900 text-3xl font-black">{{ totalQuestions }} ta</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex items-center gap-5 transition-all hover:-translate-y-1 group">
          <div class="size-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 shrink-0 border border-green-100 group-hover:bg-green-100 transition-colors">
            <span class="material-symbols-outlined text-[28px]">check_circle</span>
          </div>
          <div>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">To'g'ri javoblar</p>
            <p class="text-slate-900 text-3xl font-black">{{ correctAnswers }} ta</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex items-center gap-5 transition-all hover:-translate-y-1 group">
          <div class="size-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 shrink-0 border border-red-100 group-hover:bg-red-100 transition-colors">
            <span class="material-symbols-outlined text-[28px]">cancel</span>
          </div>
          <div>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Xato javoblar</p>
            <p class="text-slate-900 text-3xl font-black">{{ wrongAnswers }} ta</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-12">
        <div class="w-full flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <h2 class="text-slate-900 text-2xl font-bold flex items-center gap-3">
              <span class="w-1.5 h-7 rounded-full bg-primary-400"></span>
              Xatolar tahlili
            </h2>
            <span class="px-3 py-1 rounded-full bg-red-50 text-red-500 text-sm font-bold border border-red-100">{{ wrongAnswers }} ta xato</span>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div class="p-6 md:p-8 pb-4">
              <div class="flex gap-5">
                <div class="shrink-0 size-10 rounded-full bg-red-50 text-red-500 border border-red-100 flex items-center justify-center font-black text-base mt-1 shadow-sm">1</div>
                <div class="flex-grow">
                  <h3 class="text-slate-900 font-bold text-xl leading-snug mb-3">Chorrahalardan o'tish qoidalari</h3>
                  <div class="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                    <p class="text-slate-600 text-base italic font-medium leading-relaxed">"Tartibga solinmagan chorrahada qaysi transport vositasi birinchi o'tish huquqiga ega?"</p>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div class="p-4 rounded-xl bg-red-50 border border-red-100 relative group">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="material-symbols-outlined text-red-500 text-[18px]">close</span>
                        <p class="text-[11px] text-red-500 uppercase font-black tracking-wider">Sizning javobingiz</p>
                      </div>
                      <p class="text-slate-800 text-base font-semibold">Chap tomondan kelayotgan avtomobil</p>
                    </div>
                    <div class="p-4 rounded-xl bg-green-50 border border-green-100 relative group">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="material-symbols-outlined text-primary-600 text-[18px]">check</span>
                        <p class="text-[11px] text-primary-600 uppercase font-black tracking-wider">To'g'ri javob</p>
                      </div>
                      <p class="text-slate-800 text-base font-semibold">O'ng tomondan kelayotgan transport vositasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 p-4 px-8 flex justify-end border-t border-slate-100">
              <a class="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-green-600 transition-colors font-bold group" href="#">
                <span class="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Mavzuni o'rganish
              </a>
            </div>
          </div>

          <div v-for="(error, index) in [2, 3]" :key="index" @click="toggleError(index)" class="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-400/30 transition-all cursor-pointer group shadow-sm hover:shadow-md">
            <div class="flex justify-between items-center gap-4">
              <div class="flex items-center gap-5">
                <div class="shrink-0 size-10 rounded-full bg-red-50 text-red-500 border border-red-100 flex items-center justify-center font-black text-base shadow-sm">{{ error }}</div>
                <div>
                  <h3 class="text-slate-900 font-bold text-lg leading-snug group-hover:text-primary-600 transition-colors">{{ error === 2 ? 'Yo\'l belgilari' : 'Tezlik rejimi' }}</h3>
                  <p class="text-slate-500 text-sm mt-1 line-clamp-1">{{ error === 2 ? 'Savol: "To\'xtamasdan harakatlanish taqiqlangan" belgisi qaysi guruhga kiradi?' : 'Savol: Aholi punktlarida yengil avtomobillar uchun ruxsat etilgan maksimal tezlik qancha?' }}</p>
                </div>
              </div>
              <div class="size-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary-600 group-hover:bg-white transition-all">
                <span class="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-6">
          <h2 class="text-slate-900 text-2xl font-bold flex items-center gap-3">
            <span class="w-1.5 h-7 rounded-full bg-primary-400"></span>
            Tavsiyalar
          </h2>
          <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div class="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-100 mb-6">
              <span class="material-symbols-outlined text-yellow-600 text-2xl">lightbulb</span>
              <p class="text-slate-700 text-sm leading-relaxed mt-0.5 font-medium">
                Xatolaringiz asosida quyidagi mavzularni takrorlashingizni qat'iy tavsiya qilamiz:
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a class="group block bg-slate-50 p-3 rounded-2xl hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-md transition-all h-full" href="#">
                <div class="aspect-video rounded-xl bg-cover bg-center relative overflow-hidden mb-3" :style="{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVGmN2WxbhLkpi4yaikuiI3_p-x73Or35TcaBK_MJPfjp7P-aqpRQ-e3tRjXkeJcGzHY9WW9VXA_GhiZOeWCYJMzXmOUv_oEfQVOXqZyS3AUhEmQVVuz0tt9vN4CkYpv09QmBTvQesc1_iShqwek54cAWL4H9Vm0b8AWU6Tux9vx1kxKGBB1ys8yWia8PJXjoRFdw0ivrMS329lvkAxIEAlqZ2EFzMcmT7QHiJ51kRDffsi78JEZd9fz0fvQfmMcgF2HP_4MUzoxc')` }">
                  <div class="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-all flex items-center justify-center">
                    <div class="size-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/50">
                      <span class="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-bold">08:12</div>
                </div>
                <div class="px-1 pb-2">
                  <h4 class="text-slate-900 text-sm font-bold leading-snug group-hover:text-primary-600 transition-colors mb-1">Video dars: Chorrahalardan o'tish</h4>
                  <p class="text-slate-500 text-xs">Amaliy misollar bilan tushuntirilgan</p>
                </div>
              </a>
              <a class="group flex flex-col p-5 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-md transition-all h-full justify-between" href="#">
                <div class="flex gap-4 items-start">
                  <div class="size-12 rounded-xl bg-white flex items-center justify-center shrink-0 text-slate-500 border border-slate-200 group-hover:border-primary-600/50 group-hover:text-primary-600 transition-colors shadow-sm">
                    <span class="material-symbols-outlined">article</span>
                  </div>
                  <div>
                    <h4 class="text-slate-900 text-base font-bold leading-snug group-hover:text-primary-600 transition-colors mb-1">Maqola: Yo'l belgilarining turlari</h4>
                    <p class="text-slate-500 text-xs">O'qish vaqti: 5 daqiqa</p>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <span class="material-symbols-outlined text-slate-300 ml-auto text-lg group-hover:translate-x-1 group-hover:text-primary-600 transition-all">chevron_right</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const totalQuestions = ref(20)
const correctAnswers = ref(17)
const expandedErrors = ref([])

const wrongAnswers = computed(() => {
  return totalQuestions.value - correctAnswers.value
})

const score = computed(() => {
  return Math.round((correctAnswers.value / totalQuestions.value) * 100)
})

const toggleError = (index) => {
  const idx = expandedErrors.value.indexOf(index)
  if (idx > -1) {
    expandedErrors.value.splice(idx, 1)
  } else {
    expandedErrors.value.push(index)
  }
}

const retakeExam = () => {
  router.push('/imtihon-boshlash')
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

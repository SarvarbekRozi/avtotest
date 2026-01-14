<template>
  <div class="bg-white min-h-screen flex flex-col overflow-x-hidden text-slate-900 transition-colors duration-300">

    <main class="flex-grow flex flex-col items-center justify-center p-4 py-10 md:py-16 relative overflow-hidden">
      <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-[900px] w-full flex flex-col gap-12 relative z-10">
        <div class="text-center space-y-6">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-600 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            Imtihon rejimi
          </span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-slate-900">
            O'z bilimingizni <br class="hidden md:block"/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500">sinab ko'ring</span>
          </h1>
          <p class="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Haqiqiy imtihon muhiti. Barcha qoidalar YHQ standartlariga moslashtirilgan.
            Tayyormisiz?
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <div class="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span class="material-symbols-outlined text-8xl text-blue-500">quiz</span>
            </div>
            <div class="flex flex-col items-start gap-4 h-full justify-between">
              <div class="size-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">checklist</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-slate-900">20 ta savol</h3>
                <p class="text-slate-500 leading-snug">Turli mavzular bo'yicha tasodifiy tushuvchi savollar to'plami.</p>
              </div>
            </div>
          </div>

          <div class="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span class="material-symbols-outlined text-8xl text-primary-600">timer_off</span>
            </div>
            <div class="flex flex-col items-start gap-4 h-full justify-between">
              <div class="size-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">timer</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-slate-900">20 daqiqa</h3>
                <p class="text-slate-500 leading-snug">Vaqt chegaralangan. Tez va aniq javob berishga harakat qiling.</p>
              </div>
            </div>
          </div>

          <div class="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span class="material-symbols-outlined text-8xl text-orange-500">lock</span>
            </div>
            <div class="flex flex-col items-start gap-4 h-full justify-between">
              <div class="size-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">replay_circle_filled</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-slate-900">Orqaga qaytmaslik</h3>
                <p class="text-slate-500 leading-snug">Javobni belgilaganingizdan so'ng, uni o'zgartirib bo'lmaydi.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-red-50 border border-red-100 p-6 flex flex-col md:flex-row gap-5 items-start max-w-3xl mx-auto">
          <div class="shrink-0 p-2 bg-red-100 rounded-full text-red-600">
            <span class="material-symbols-outlined">health_and_safety</span>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-900 mb-1">Stress rejimi faol</h4>
            <p class="text-slate-600 text-sm leading-relaxed">
              Vaqt tugab borayotganda (oxirgi daqiqalarda) taymer <span class="text-red-600 font-bold">qizil rangda</span> ogohlantiradi. Bu sizni real imtihon bosimiga tayyorlash uchun mo'ljallangan. Vahima qilmang!
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center gap-6 pt-4">
          <button @click="startExam" class="group relative w-full md:w-auto min-w-[320px] flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer"></div>
            <span>Imtihonni Boshlash</span>
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <NuxtLink to="/mashgulotlar" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors py-2 px-4 rounded-lg hover:bg-slate-50">
            <span class="material-symbols-outlined text-lg">arrow_back</span>
            Mashg'ulotlarga qaytish
          </NuxtLink>
        </div>
      </div>
    </main>

    <div class="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-600/50 to-transparent pointer-events-none z-50"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startExam = () => {
  router.push('/imtihon-savoli')
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>

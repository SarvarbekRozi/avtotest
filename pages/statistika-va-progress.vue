<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 class="text-3xl font-black text-slate-900 tracking-tight">Statistika va Progress</h1>
        <p class="text-slate-500 mt-1">Sizning natijalaringiz va imtihonga tayyorgarlik holati</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full border border-orange-100 shadow-sm">
          <span class="material-symbols-outlined text-[20px]">local_fire_department</span>
          <span class="text-sm font-bold">{{ streak }} kunlik streak</span>
        </div>
      </div>
    </div>

    <!-- Main Stats Section -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Exam Probability Card -->
      <div class="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div class="absolute top-0 right-0 p-32 bg-primary-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div class="flex justify-between items-start z-10">
          <div>
            <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary-500">analytics</span>
              Imtihon ehtimoli
            </h2>
            <p class="text-sm text-slate-500 mt-1">Hozirgi bilimingiz asosida</p>
          </div>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
            Juda yaxshi
          </span>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-8 mt-6 z-10">
          <!-- Circular Progress -->
          <div class="relative size-40 shrink-0">
            <div class="size-full rounded-full flex items-center justify-center relative shadow-inner" style="background: conic-gradient(#36e27b 78%, #e2e8f0 0);">
              <div class="absolute inset-[12px] bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                <span class="text-4xl font-black text-slate-900">{{ examProbability }}%</span>
                <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">Tayyorlik</span>
              </div>
            </div>
          </div>
          <div class="flex-1 w-full space-y-5">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p class="text-sm text-slate-600 leading-relaxed">
                Ajoyib natija! O'tgan haftaga nisbatan <span class="text-primary-500 font-bold">+12%</span> o'sish.
                Imtihondan o'tish uchun yana <span class="font-bold text-slate-900">biroz amaliyot</span> qiling.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <button class="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-700/30">
                <span class="material-symbols-outlined">play_circle</span>
                Imtihon topshirish
              </button>
              <button class="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-slate-200 transition-all">
                Xatolarni ishlash
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Side Stats -->
      <div class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-primary-500/30 transition-colors shadow-sm">
          <div class="relative size-14 shrink-0">
            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
              <path class="text-blue-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path>
              <path class="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="86, 100" stroke-linecap="round" stroke-width="3"></path>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-blue-500">
              <span class="material-symbols-outlined text-[20px]">verified</span>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">Umumiy Natija</p>
            <p class="text-2xl font-bold text-slate-900">{{ overallScore }}%</p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-primary-500/30 transition-colors shadow-sm">
          <div class="size-14 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 shrink-0">
            <span class="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">O'qish Vaqti</p>
            <p class="text-2xl font-bold text-slate-900">{{ studyTime }} soat</p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-primary-500/30 transition-colors shadow-sm">
          <div class="size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
            <span class="material-symbols-outlined">checklist</span>
          </div>
          <div>
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">Yechilgan Testlar</p>
            <p class="text-2xl font-bold text-slate-900">{{ totalTests }} ta</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Activity & Weak Topics -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- 7 Day Activity Chart -->
      <div class="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h3 class="font-bold text-lg text-slate-900">7 kunlik faollik</h3>
            <p class="text-sm text-slate-500">Yechilgan testlar soni</p>
          </div>
          <div class="text-right">
            <span class="text-2xl font-bold text-slate-900 block">{{ weeklyTotal }} ta</span>
            <span class="text-xs font-medium text-primary-500 flex items-center justify-end gap-1">
              <span class="material-symbols-outlined text-sm">trending_up</span> +12%
            </span>
          </div>
        </div>
        <div class="h-64 w-full flex items-end justify-between gap-2 sm:gap-4 relative pt-6">
          <!-- Grid Lines -->
          <div class="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-slate-300 font-mono z-0 pb-6">
            <div class="border-b border-dashed border-slate-200 w-full h-0"></div>
            <div class="border-b border-dashed border-slate-200 w-full h-0"></div>
            <div class="border-b border-dashed border-slate-200 w-full h-0"></div>
            <div class="border-b border-dashed border-slate-200 w-full h-0"></div>
            <div class="border-b border-slate-200 w-full h-0"></div>
          </div>
          <!-- Chart Bars -->
          <div
            v-for="(day, index) in weeklyActivity"
            :key="index"
            class="relative z-10 group flex flex-col items-center gap-3 w-full h-full justify-end"
          >
            <div class="w-full max-w-[40px] bg-slate-100 rounded-t-lg relative h-full group-hover:bg-slate-200 transition-all overflow-hidden">
              <div
                class="absolute bottom-0 w-full bg-primary-500 rounded-t-lg transition-all duration-500"
                :style="{ height: day.fillPercentage + '%' }"
              ></div>
            </div>
            <span class="text-xs font-medium text-slate-400">{{ day.label }}</span>
          </div>
        </div>
      </div>

      <!-- Weak Topics -->
      <div class="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col">
        <div class="mb-6 flex justify-between items-start">
          <div>
            <h3 class="font-bold text-lg text-slate-900">Zaif mavzular</h3>
            <p class="text-sm text-slate-500">Eng ko'p xato qilingan savollar</p>
          </div>
          <button class="text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors">Barchasi</button>
        </div>
        <div class="flex flex-col gap-4 flex-1">
          <div
            v-for="topic in weakTopics"
            :key="topic.id"
            class="group flex items-center p-4 rounded-2xl border cursor-pointer transition-colors"
            :class="topic.bgClass"
          >
            <div class="size-10 rounded-full flex items-center justify-center shrink-0" :class="topic.iconBg">
              <span class="material-symbols-outlined text-[20px]">{{ topic.icon }}</span>
            </div>
            <div class="ml-4 flex-1">
              <h4 class="text-sm font-bold text-slate-900">{{ topic.title }}</h4>
              <div class="flex items-center gap-2 mt-1">
                <div class="h-1.5 w-16 rounded-full overflow-hidden" :class="topic.progressBg">
                  <div class="h-full rounded-full" :class="topic.progressFill" :style="{ width: topic.errorPercentage + '%' }"></div>
                </div>
                <span class="text-xs font-medium" :class="topic.errorTextClass">{{ topic.errors }} xato</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-slate-400 transition-colors" :class="topic.chevronHover">chevron_right</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Test Results -->
    <section class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      <div class="p-6 border-b border-slate-200 flex justify-between items-center">
        <h3 class="font-bold text-lg text-slate-900">So'nggi test natijalari</h3>
        <button class="text-sm font-medium text-slate-500 hover:text-primary-500 transition-colors">Tarixni ko'rish</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
            <tr>
              <th class="px-6 py-4">Mavzu nomi</th>
              <th class="px-6 py-4">Sana</th>
              <th class="px-6 py-4 text-center">Savollar</th>
              <th class="px-6 py-4 text-center">Natija</th>
              <th class="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr
              v-for="test in recentTests"
              :key="test.id"
              class="hover:bg-slate-50 transition-colors"
            >
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="size-8 rounded flex items-center justify-center" :class="test.iconBg">
                    <span class="material-symbols-outlined text-[18px]">{{ test.icon }}</span>
                  </div>
                  <span class="font-semibold text-slate-900">{{ test.title }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-slate-500">{{ test.date }}</td>
              <td class="px-6 py-4 text-center text-slate-500">{{ test.totalQuestions }}</td>
              <td class="px-6 py-4 text-center font-bold" :class="test.scoreClass">{{ test.score }}</td>
              <td class="px-6 py-4 text-right">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" :class="test.statusClass">
                  <span class="size-1.5 rounded-full" :class="test.dotClass"></span>
                  {{ test.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-sm text-slate-400 pb-8">
      © 2023 Avtotest. Barcha huquqlar himoyalangan.
    </footer>
  </div>
</template>

<script setup>
// Main stats
const streak = ref(5)
const examProbability = ref(78)
const overallScore = ref(86)
const studyTime = ref(12)
const totalTests = ref(142)
const weeklyTotal = ref(85)

// Weekly activity data
const weeklyActivity = ref([
  { label: 'Du', barHeight: 40, fillPercentage: 60 },
  { label: 'Se', barHeight: 65, fillPercentage: 80 },
  { label: 'Chor', barHeight: 50, fillPercentage: 40 },
  { label: 'Pay', barHeight: 85, fillPercentage: 75 },
  { label: 'Ju', barHeight: 95, fillPercentage: 90 },
  { label: 'Shan', barHeight: 30, fillPercentage: 100 },
  { label: 'Yak', barHeight: 60, fillPercentage: 50 },
])

// Weak topics
const weakTopics = ref([
  {
    id: 1,
    icon: 'priority_high',
    iconBg: 'bg-red-100 text-red-600',
    bgClass: 'bg-red-50 border-red-100 hover:bg-red-100',
    title: 'Chorrahalardan o\'tish',
    errors: 12,
    errorPercentage: 80,
    progressBg: 'bg-red-200',
    progressFill: 'bg-red-500',
    errorTextClass: 'text-red-600',
    chevronHover: 'group-hover:text-red-500'
  },
  {
    id: 2,
    icon: 'traffic',
    iconBg: 'bg-orange-100 text-orange-600',
    bgClass: 'bg-orange-50 border-orange-100 hover:bg-orange-100',
    title: 'Belgilar va chiziqlar',
    errors: 8,
    errorPercentage: 60,
    progressBg: 'bg-orange-200',
    progressFill: 'bg-orange-500',
    errorTextClass: 'text-orange-600',
    chevronHover: 'group-hover:text-orange-500'
  },
  {
    id: 3,
    icon: 'car_crash',
    iconBg: 'bg-amber-100 text-amber-600',
    bgClass: 'bg-amber-50 border-amber-100 hover:bg-amber-100',
    title: 'Texnik sozlik',
    errors: 5,
    errorPercentage: 40,
    progressBg: 'bg-amber-200',
    progressFill: 'bg-amber-500',
    errorTextClass: 'text-amber-600',
    chevronHover: 'group-hover:text-amber-500'
  }
])

// Recent test results
const recentTests = ref([
  {
    id: 1,
    icon: 'article',
    iconBg: 'bg-primary-500/20 text-primary-500',
    title: 'Umumiy imtihon #42',
    date: 'Bugun, 14:30',
    totalQuestions: 20,
    score: '18/20',
    scoreClass: 'text-slate-900',
    status: 'O\'tdi',
    statusClass: 'bg-green-100 text-green-700 border border-green-200',
    dotClass: 'bg-green-500'
  },
  {
    id: 2,
    icon: 'traffic',
    iconBg: 'bg-primary-500/20 text-primary-500',
    title: 'Yo\'l belgilari testi',
    date: 'Kecha, 09:15',
    totalQuestions: 10,
    score: '10/10',
    scoreClass: 'text-slate-900',
    status: 'O\'tdi',
    statusClass: 'bg-green-100 text-green-700 border border-green-200',
    dotClass: 'bg-green-500'
  },
  {
    id: 3,
    icon: 'priority_high',
    iconBg: 'bg-red-500/10 text-red-500',
    title: 'Chorrahalar va ustunlik',
    date: '12 Okt, 18:45',
    totalQuestions: 15,
    score: '9/15',
    scoreClass: 'text-red-500',
    status: 'O\'tmadi',
    statusClass: 'bg-red-100 text-red-700 border border-red-200',
    dotClass: 'bg-red-500'
  }
])
</script>

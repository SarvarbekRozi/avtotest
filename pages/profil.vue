<template>
  <div class="flex flex-col gap-8 mt-2">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">Mening Profilim</h1>
        <p class="text-slate-500 font-medium">Shaxsiy ma'lumotlar, daraja va statistika</p>
      </div>
      <div class="hidden md:flex gap-3">
        <button class="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors text-sm font-bold shadow-sm">
          <span class="material-symbols-outlined text-[20px]">share</span>
          Ulashish
        </button>
        <button class="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-bold shadow-sm shadow-slate-900/20">
          <span class="material-symbols-outlined text-[20px]">edit</span>
          Profilni tahrirlash
        </button>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
      <!-- Left Sidebar -->
      <div class="xl:col-span-4 flex flex-col gap-6">
        <!-- Profile Card -->
        <div class="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div class="flex flex-col items-center text-center gap-4 relative">
            <div class="relative group cursor-pointer">
              <div
                class="h-32 w-32 rounded-full border-4 border-white shadow-xl shadow-slate-200 bg-cover bg-center transition-transform group-hover:scale-105"
                :style="{ backgroundImage: `url('${profileImage}')` }"
              ></div>
              <div class="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-white text-3xl">add_a_photo</span>
              </div>
              <div class="absolute bottom-1 right-1 h-7 w-7 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-slate-900">
                <span class="material-symbols-outlined text-[14px] font-bold">check</span>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900">{{ userName }}</h2>
              <p class="text-sm text-slate-500 mt-1 flex items-center justify-center gap-1 font-medium">
                <span class="material-symbols-outlined text-[18px] text-slate-400">location_on</span>
                {{ userLocation }}
              </p>
            </div>
            <div class="w-full flex justify-center pt-2 border-t border-slate-100 mt-2">
              <div class="flex gap-8 text-center">
                <div>
                  <div class="text-lg font-black text-slate-900">{{ testsCompleted }}</div>
                  <div class="text-xs text-slate-500 font-medium">Testlar</div>
                </div>
                <div>
                  <div class="text-lg font-black text-slate-900">{{ totalPoints }}</div>
                  <div class="text-xs text-slate-500 font-medium">Ballar</div>
                </div>
                <div>
                  <div class="text-lg font-black text-slate-900">{{ certificates }}</div>
                  <div class="text-xs text-slate-500 font-medium">Sertifikat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Level Card -->
        <div class="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm relative overflow-hidden group hover:border-primary-500/50 transition-colors">
          <div class="absolute -right-6 -top-6 h-32 w-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Joriy Daraja</h3>
            <div class="px-2.5 py-1 rounded-md bg-yellow-50 text-yellow-700 border border-yellow-200/50 text-xs font-bold uppercase tracking-wide flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] fill-1">verified</span>
              Faol
            </div>
          </div>
          <div class="flex items-center gap-5 mb-6">
            <div class="h-16 w-16 shrink-0 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200 ring-4 ring-white relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700"></div>
              <span class="material-symbols-outlined text-4xl text-yellow-400 relative z-10 fill-1">stars</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-500 mb-0.5 uppercase tracking-wide">Sizning unvoningiz</span>
              <h2 class="text-2xl font-black text-slate-900 tracking-tight">{{ currentLevel }}</h2>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-end px-1">
              <div class="flex flex-col">
                <span class="text-xs font-bold text-slate-400 mb-0.5">To'plangan ball</span>
                <span class="text-xl font-black text-slate-900">{{ currentXP }}</span>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-xs font-bold text-slate-400 mb-0.5">Maqsad</span>
                <span class="text-sm font-bold text-slate-600">{{ goalXP }}</span>
              </div>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-3 p-1">
              <div
                class="bg-primary-500 h-full rounded-full relative transition-all duration-1000 ease-out shadow-sm"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 mt-2 flex items-start gap-3">
              <span class="material-symbols-outlined text-primary-500 mt-0.5">info</span>
              <p class="text-xs text-slate-600 font-medium leading-relaxed">
                Keyingi <span class="font-bold text-slate-900">{{ nextLevel }}</span> darajasiga erishish uchun sizga yana <span class="text-primary-500 font-bold">{{ pointsNeeded }} ball</span> kerak. Ko'proq test yeching!
              </p>
            </div>
          </div>
        </div>

        <!-- Exam Status -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-bold uppercase tracking-wider text-slate-400 px-1">Imtihon Holati</h3>
          <div class="rounded-xl bg-white p-5 border border-slate-200 flex items-center justify-between group hover:border-primary-500/50 transition-colors shadow-sm">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-500 mb-1">REJALASHTIRILGAN SANA</span>
              <span class="text-lg font-black text-slate-900">{{ examDate }}</span>
            </div>
            <div class="flex flex-col items-end">
              <div class="flex items-center gap-1 text-slate-900 bg-primary-500 px-3 py-1.5 rounded-lg text-sm font-bold mb-1 shadow-md shadow-primary-500/20">
                <span class="material-symbols-outlined text-[18px]">timer</span>
                {{ daysRemaining }} kun
              </div>
              <span class="text-xs font-bold text-slate-400">qoldi</span>
            </div>
          </div>
        </div>

        <!-- Daily Tip -->
        <div class="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 border border-blue-100">
          <h3 class="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
            <div class="p-1.5 bg-blue-100 rounded text-blue-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-sm">lightbulb</span>
            </div>
            Kunlik Maslahat
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
            Har doim chorrahalarda piyodalar o'tish joylariga e'tibor bering. Piyodalarga yo'l berish qoidasi eng muhimlaridan biridir.
          </p>
          <NuxtLink to="#" class="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
            Darsni ko'rish
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content -->
      <div class="xl:col-span-8 flex flex-col gap-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col gap-1 relative overflow-hidden group hover:border-primary-500/50 transition-colors">
            <div class="absolute -right-4 -top-4 bg-primary-500/5 w-24 h-24 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div class="flex items-center gap-2 text-slate-500 z-10">
              <span class="material-symbols-outlined text-xl">fact_check</span>
              <span class="text-sm font-bold">Yechilgan testlar</span>
            </div>
            <div class="flex items-end gap-3 z-10 mt-3">
              <span class="text-4xl font-black text-slate-900">124</span>
              <span class="text-sm font-bold text-primary-500 mb-1.5 flex items-center bg-primary-500/10 px-1.5 py-0.5 rounded">
                <span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                +12%
              </span>
            </div>
          </div>
          <div class="rounded-xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col gap-1 relative overflow-hidden group hover:border-primary-500/50 transition-colors">
            <div class="absolute -right-4 -top-4 bg-blue-500/5 w-24 h-24 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div class="flex items-center gap-2 text-slate-500 z-10">
              <span class="material-symbols-outlined text-xl">avg_pace</span>
              <span class="text-sm font-bold">O'rtacha natija</span>
            </div>
            <div class="flex items-end gap-3 z-10 mt-3">
              <span class="text-4xl font-black text-slate-900">88%</span>
              <span class="text-sm font-bold text-primary-500 mb-1.5 flex items-center bg-primary-500/10 px-1.5 py-0.5 rounded">
                <span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                +5%
              </span>
            </div>
          </div>
          <div class="rounded-xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col gap-1 relative overflow-hidden group hover:border-primary-500/50 transition-colors">
            <div class="absolute -right-4 -top-4 bg-yellow-500/5 w-24 h-24 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div class="flex items-center gap-2 text-slate-500 z-10">
              <span class="material-symbols-outlined text-xl">book</span>
              <span class="text-sm font-bold">Mavzular</span>
            </div>
            <div class="flex items-end gap-3 z-10 mt-3">
              <span class="text-4xl font-black text-slate-900">15<span class="text-xl text-slate-400 font-medium">/20</span></span>
              <span class="text-sm font-bold text-primary-500 mb-1.5 flex items-center bg-primary-500/10 px-1.5 py-0.5 rounded">
                +2 ta
              </span>
            </div>
          </div>
        </div>

        <!-- Weekly Chart -->
        <div class="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 class="text-lg font-bold text-slate-900">Haftalik o'zgarish</h3>
              <p class="text-sm text-slate-500 font-medium">Oxirgi 7 kunlik natijalar dinamikasi</p>
            </div>
            <div class="relative">
              <select v-model="selectedPeriod" class="appearance-none bg-slate-50 border border-slate-200 text-sm font-bold rounded-lg py-2.5 pl-4 pr-10 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 cursor-pointer transition-shadow">
                <option>Oxirgi 7 kun</option>
                <option>Bu oy</option>
                <option>Yil</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <span class="material-symbols-outlined text-sm font-bold">expand_more</span>
              </div>
            </div>
          </div>
          <div class="h-64 w-full relative mt-4">
            <div class="absolute inset-0 flex items-end justify-between px-2 pb-8 gap-3 sm:gap-6 z-10">
              <div
                v-for="(day, index) in weeklyData"
                :key="index"
                class="group relative w-full h-full flex items-end"
              >
                <div
                  class="w-full rounded-t-lg transition-all duration-300 relative"
                  :class="day.isToday ? 'bg-primary-500 shadow-[0_4px_20px_rgba(54,226,123,0.4)]' : 'bg-slate-100 hover:bg-primary-500/60'"
                  :style="{ height: day.percentage + '%' }"
                >
                  <div
                    class="absolute left-1/2 -translate-x-1/2 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl transition-all transform"
                    :class="day.isToday ? 'bg-slate-900 -top-12 opacity-100 after:content-[\'\'] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-slate-900' : 'bg-slate-800 -top-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'"
                  >
                    {{ day.percentage }}%
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs font-bold text-slate-400">
              <div v-for="(day, index) in weeklyData" :key="index" class="w-full text-center" :class="{ 'text-primary-500': day.isToday }">
                {{ day.label }}
              </div>
            </div>
            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
              <div class="w-full h-px bg-slate-100 border-t border-dashed border-slate-200"></div>
              <div class="w-full h-px bg-slate-100 border-t border-dashed border-slate-200"></div>
              <div class="w-full h-px bg-slate-100 border-t border-dashed border-slate-200"></div>
              <div class="w-full h-px bg-slate-100 border-t border-dashed border-slate-200"></div>
              <div class="w-full h-px bg-slate-200"></div>
            </div>
          </div>
        </div>

        <!-- Recent Activities -->
        <div class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div class="p-6 pb-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
            <h3 class="text-lg font-bold text-slate-900">Oxirgi mashg'ulotlar</h3>
            <NuxtLink to="#" class="text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors flex items-center gap-1">
              Barchasi
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-0 group"
            >
              <div
                class="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform"
                :class="activity.iconBg"
              >
                <span class="material-symbols-outlined fill-1">{{ activity.icon }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-slate-900 truncate group-hover:text-primary-500 transition-colors">{{ activity.title }}</p>
                <p class="text-xs text-slate-500 font-medium mt-0.5">{{ activity.time }}</p>
              </div>
              <div class="flex flex-col items-end shrink-0">
                <div class="px-2.5 py-1 rounded text-xs font-bold mb-1" :class="activity.statusClass">{{ activity.status }}</div>
                <span class="text-xs text-slate-400 font-bold">{{ activity.score }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Profile data
const userName = ref('Azizbek Tursunov')
const userLocation = ref('Toshkent shahri')
const profileImage = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuDdWnZ9lZaazC7FjZQgrcemdmaO-8HQ3Oo4DP1TYdf6ulSiXM9Z601Il1FwpT5JZG3a7lTw7x9OvX7RxeoZuiKntlRNjVNNsASX44u-pcpVUALfLPQj95gCXl4G0ThWZljN5nIZTKzwu2l8uDVk1dB1LD-IM5v8er5oL2EY7qwVxZ89RJx2tRPCZSljY6xR_2HXMEBPG1sGKlxvJ0DOXEBHlwXEWnsy3Yrr0BOxVjF8Dhk_VdmPUVdC9hGOs4kX22jfwMlegsFa96Q')

// Stats
const testsCompleted = ref(12)
const totalPoints = ref(1450)
const certificates = ref(5)

// Level data
const currentLevel = ref('Haydovchi')
const nextLevel = ref('Professional')
const currentXP = ref('1,240')
const goalXP = ref('2,000')
const pointsNeeded = ref(760)
const progressPercentage = ref(62)

// Exam data
const examDate = ref('15 Okt, 2023')
const daysRemaining = ref(12)

// Chart data
const selectedPeriod = ref('Oxirgi 7 kun')
const weeklyData = ref([
  { label: 'Du', percentage: 40, isToday: false },
  { label: 'Se', percentage: 65, isToday: false },
  { label: 'Ch', percentage: 50, isToday: false },
  { label: 'Pa', percentage: 80, isToday: false },
  { label: 'Ju', percentage: 75, isToday: false },
  { label: 'Sh', percentage: 90, isToday: true },
  { label: 'Ya', percentage: 60, isToday: false },
])

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    icon: 'quiz',
    iconBg: 'bg-blue-500/10 text-blue-600',
    title: 'Mavzuli test: Yo\'l belgilari',
    time: 'Bugun, 14:30',
    status: '90%',
    statusClass: 'bg-green-100 text-green-700',
    score: '18/20'
  },
  {
    id: 2,
    icon: 'menu_book',
    iconBg: 'bg-purple-500/10 text-purple-600',
    title: 'O\'qilgan dars: Chorrahalar',
    time: 'Kecha, 18:45',
    status: 'Yakunlandi',
    statusClass: 'bg-slate-100 text-slate-600',
    score: '15 daq'
  },
  {
    id: 3,
    icon: 'warning',
    iconBg: 'bg-red-500/10 text-red-600',
    title: 'Xato ustida ishlash',
    time: '12 Okt, 09:15',
    status: '100%',
    statusClass: 'bg-green-100 text-green-700',
    score: '5/5'
  }
])
</script>

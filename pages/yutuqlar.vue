<template>
  <div class="flex flex-col gap-8 mt-2">
    <!-- Page Heading -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="flex flex-col gap-2">
        <h1 class="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-tight">Mening yutuqlarim</h1>
        <p class="text-text-secondary text-base font-normal leading-normal">Yo'l harakati qoidalarini o'rganishdagi muvaffaqiyatlaringiz</p>
      </div>
      <button class="hidden md:flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary-400 transition-colors shadow-sm shadow-primary-500/20">
        <span class="material-symbols-outlined text-[20px]">share</span>
        Natijani ulashish
      </button>
    </div>

    <!-- Stats Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Points Card -->
      <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute right-0 top-0 opacity-5 group-hover:scale-110 transition-transform duration-500">
          <span class="material-symbols-outlined text-[120px] text-primary-500">emoji_events</span>
        </div>
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-2 text-text-secondary">
            <span class="material-symbols-outlined text-primary-500">star</span>
            <p class="text-sm font-medium uppercase tracking-wider">Umumiy ballar</p>
          </div>
          <p class="text-slate-900 text-4xl font-black leading-tight">{{ totalPoints }}</p>
          <div class="mt-4 w-full bg-slate-100 rounded-full h-1.5">
            <div class="bg-primary-500 h-1.5 rounded-full transition-all duration-500" :style="{ width: pointsProgress + '%' }"></div>
          </div>
          <p class="text-xs text-slate-400 mt-2">Keyingi darajagacha {{ pointsNeeded }} ball</p>
        </div>
      </div>

      <!-- Level Card -->
      <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute right-0 top-0 opacity-5 group-hover:scale-110 transition-transform duration-500">
          <span class="material-symbols-outlined text-[120px] text-primary-500">workspace_premium</span>
        </div>
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-2 text-text-secondary">
            <span class="material-symbols-outlined text-primary-500">verified</span>
            <p class="text-sm font-medium uppercase tracking-wider">Joriy daraja</p>
          </div>
          <p class="text-slate-900 text-3xl font-bold leading-tight">{{ currentLevel }}</p>
          <p class="text-sm text-slate-500 mt-1">{{ levelNumber }}-daraja</p>
        </div>
      </div>

      <!-- Streak Card -->
      <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute right-0 top-0 opacity-5 group-hover:scale-110 transition-transform duration-500">
          <span class="material-symbols-outlined text-[120px] text-orange-500">local_fire_department</span>
        </div>
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-2 text-text-secondary">
            <span class="material-symbols-outlined text-orange-500">local_fire_department</span>
            <p class="text-sm font-medium uppercase tracking-wider">Kunlik seriya</p>
          </div>
          <div class="flex items-end gap-2">
            <p class="text-slate-900 text-4xl font-black leading-tight">{{ streakDays }} kun</p>
            <span class="text-orange-500 animate-pulse text-2xl">🔥</span>
          </div>
          <p class="text-sm text-slate-500 mt-2">Ertaga kirib seriyani davom ettiring!</p>
        </div>
      </div>
    </div>

    <!-- Main Achievements Section -->
    <div class="flex flex-col gap-6">
      <h2 class="text-slate-900 text-2xl font-bold px-1 border-l-4 border-primary-500 pl-4">Erishilgan yutuqlar</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Completed Achievements -->
        <div
          v-for="achievement in completedAchievements"
          :key="achievement.id"
          class="bg-white rounded-lg p-4 border-2 border-primary-500/20 hover:border-primary-500 transition-colors flex flex-col gap-3 group"
        >
          <div class="flex justify-between items-start">
            <div class="p-3 bg-primary-500/10 rounded-lg text-primary-500">
              <span class="material-symbols-outlined text-3xl">{{ achievement.icon }}</span>
            </div>
            <span class="material-symbols-outlined text-primary-500">check_circle</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-primary-500 transition-colors">{{ achievement.title }}</h3>
            <p class="text-sm text-slate-500 mt-1">{{ achievement.description }}</p>
          </div>
        </div>

        <!-- In Progress Achievement -->
        <div
          v-for="achievement in inProgressAchievements"
          :key="achievement.id"
          class="bg-white rounded-lg p-4 border border-slate-200 flex flex-col gap-3 opacity-90"
        >
          <div class="flex justify-between items-start">
            <div class="p-3 bg-slate-100 rounded-lg text-slate-500">
              <span class="material-symbols-outlined text-3xl">{{ achievement.icon }}</span>
            </div>
            <span class="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">{{ achievement.progress }}</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">{{ achievement.title }}</h3>
            <p class="text-sm text-slate-500 mt-1">{{ achievement.description }}</p>
            <div class="mt-3 w-full bg-slate-100 rounded-full h-1.5">
              <div class="bg-yellow-400 h-1.5 rounded-full transition-all duration-500" :style="{ width: achievement.percentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Locked Achievements -->
    <div class="flex flex-col gap-6">
      <h2 class="text-slate-900 text-2xl font-bold px-1 border-l-4 border-slate-300 pl-4">Hali erishilmagan yutuqlar</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="achievement in lockedAchievements"
          :key="achievement.id"
          class="bg-slate-50 rounded-lg p-4 border border-slate-200 flex flex-col gap-3 grayscale opacity-70 hover:opacity-100 transition-opacity"
        >
          <div class="flex justify-between items-start">
            <div class="p-3 bg-slate-200 rounded-lg text-slate-500">
              <span class="material-symbols-outlined text-3xl">{{ achievement.icon }}</span>
            </div>
            <span class="material-symbols-outlined text-slate-400">lock</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-700">{{ achievement.title }}</h3>
            <p class="text-sm text-slate-500 mt-1">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bonus Tests Section -->
    <div class="rounded-2xl bg-gradient-to-r from-dark-primary to-dark-tertiary p-8 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div class="relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-6 border-b border-white/10 pb-6">
          <div>
            <h2 class="text-2xl font-bold mb-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary-500">card_giftcard</span>
              Bonus testlar
            </h2>
            <p class="text-slate-300 max-w-xl">Yutuqlarga erishish orqali maxsus qiyinlikdagi va qiziqarli testlarni oching.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Unlocked Bonus -->
          <div
            v-for="bonus in unlockedBonuses"
            :key="bonus.id"
            class="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-5 transition-colors cursor-pointer group"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="bg-primary-500/20 p-2 rounded-lg text-primary-500">
                <span class="material-symbols-outlined">{{ bonus.icon }}</span>
              </div>
              <span class="px-2 py-1 rounded bg-primary-500 text-slate-900 text-xs font-bold uppercase">Ochiq</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ bonus.title }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ bonus.description }}</p>
            <button class="w-full py-2 bg-primary-600 text-white rounded-lg font-bold text-sm hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
              Boshlash <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <!-- Locked Bonuses -->
          <div
            v-for="bonus in lockedBonuses"
            :key="bonus.id"
            class="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5 relative overflow-hidden"
          >
            <div class="flex justify-between items-start mb-4 opacity-50">
              <div class="bg-white/10 p-2 rounded-lg text-white">
                <span class="material-symbols-outlined">{{ bonus.icon }}</span>
              </div>
              <span class="material-symbols-outlined text-slate-500">lock</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-slate-400">{{ bonus.title }}</h3>
            <p class="text-sm text-slate-500 mb-4">{{ bonus.description }}</p>
            <div class="mt-auto">
              <div class="flex items-center gap-2 text-xs text-primary-500 mb-2">
                <span class="material-symbols-outlined text-sm">lock</span>
                <span>{{ bonus.requirement }}</span>
              </div>
              <div class="w-full bg-white/10 rounded-full h-1.5">
                <div class="bg-white/30 h-1.5 rounded-full transition-all duration-500" :style="{ width: bonus.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Stats data
const totalPoints = ref(1250)
const pointsProgress = ref(65)
const pointsNeeded = ref(250)
const currentLevel = ref('Tajribali haydovchi')
const levelNumber = ref(5)
const streakDays = ref(5)

// Completed achievements
const completedAchievements = ref([
  {
    id: 1,
    icon: 'psychology',
    title: 'Mutlaq chempion',
    description: 'Imtihonni 100% natija bilan topshirildi'
  },
  {
    id: 2,
    icon: 'calendar_month',
    title: 'Barqarorlik',
    description: '5 kun ketma-ket kirish'
  },
  {
    id: 3,
    icon: 'rocket_launch',
    title: 'Tezkor start',
    description: 'Birinchi test muvaffaqiyatli yakunlandi'
  }
])

// In progress achievements
const inProgressAchievements = ref([
  {
    id: 4,
    icon: 'school',
    title: 'Bilimdon',
    description: 'Barcha mavzularni o\'qib chiqish',
    progress: '15/20',
    percentage: 75
  }
])

// Locked achievements
const lockedAchievements = ref([
  {
    id: 5,
    icon: 'speed',
    title: 'Tezlik ustasi',
    description: 'Imtihonni 5 daqiqadan kam vaqtda topshirish'
  },
  {
    id: 6,
    icon: 'group',
    title: 'Do\'stona yordam',
    description: '3 nafar do\'stingizni taklif qiling'
  },
  {
    id: 7,
    icon: 'verified_user',
    title: 'Xatosiz seriya',
    description: '10 ta testni ketma-ket xatosiz yechish'
  }
])

// Unlocked bonuses
const unlockedBonuses = ref([
  {
    id: 1,
    icon: 'nightlight_round',
    title: 'Tungi haydash qoidalari',
    description: 'Tungi vaqtda va ko\'rish cheklangan sharoitda harakatlanish bo\'yicha maxsus test.'
  }
])

// Locked bonuses
const lockedBonuses = ref([
  {
    id: 2,
    icon: 'medical_services',
    title: 'Birinchi tibbiy yordam',
    description: 'Yo\'l transport hodisalarida birinchi yordam ko\'rsatish simulyatsiyasi.',
    requirement: 'Ochish uchun: 1500 ball to\'plang',
    progress: 83
  },
  {
    id: 3,
    icon: 'traffic',
    title: 'Chorrahalar ustasi',
    description: 'Murakkab chorrahalardan o\'tish qoidalariga oid qiyin savollar to\'plami.',
    requirement: 'Ochish uchun: "Mutlaq chempion" bo\'ling',
    progress: 50
  }
])
</script>

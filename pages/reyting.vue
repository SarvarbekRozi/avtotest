<template>
  <div class="flex flex-col gap-8 mt-2">
    <!-- Header & Filters -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex flex-col gap-2">
        <h1 class="text-slate-900 text-3xl md:text-4xl font-black tracking-tight">Foydalanuvchilar Reytingi</h1>
        <p class="text-text-secondary text-base">Eng yaxshi natija ko'rsatgan o'quvchilar ro'yxati</p>
      </div>

      <!-- Segmented Buttons -->
      <div class="bg-slate-100 p-1 rounded-xl inline-flex self-start md:self-auto">
        <label
          v-for="period in periods"
          :key="period.value"
          class="relative cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 text-sm font-bold"
          :class="selectedPeriod === period.value ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600'"
        >
          <span class="relative z-10">{{ period.label }}</span>
          <input
            v-model="selectedPeriod"
            class="invisible absolute w-0 h-0"
            name="period"
            type="radio"
            :value="period.value"
          />
        </label>
      </div>
    </div>

    <!-- User Personal Stats (Sticky/Highlighted) -->
    <div class="bg-gradient-to-r from-light-border to-green-50 border border-green-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
      <div class="absolute right-0 top-0 opacity-10 pointer-events-none">
        <span class="material-symbols-outlined text-[150px] leading-none text-primary-500">emoji_events</span>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-6 relative z-10">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-white p-1 shadow-sm">
            <div
              class="w-full h-full rounded-full bg-cover bg-center"
              :style="{ backgroundImage: `url('${currentUser.avatar}')` }"
            ></div>
          </div>
          <div>
            <p class="text-text-secondary text-sm font-medium mb-1">Sizning natijangiz</p>
            <h3 class="text-xl font-bold text-slate-900">{{ currentUser.name }}</h3>
            <span class="inline-flex items-center gap-1 text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded mt-1">
              <span class="material-symbols-outlined text-[14px]">local_fire_department</span>
              {{ currentUser.streak }} kun streak
            </span>
          </div>
        </div>
        <div class="flex items-center gap-4 md:gap-8 ml-auto">
          <div class="text-center">
            <p class="text-2xl font-black text-slate-900">{{ currentUser.rank }}</p>
            <p class="text-xs text-text-secondary font-medium uppercase tracking-wider">O'rin</p>
          </div>
          <div class="w-px h-10 bg-green-200"></div>
          <div class="text-center">
            <p class="text-2xl font-black text-slate-900">{{ currentUser.points }}</p>
            <p class="text-xs text-text-secondary font-medium uppercase tracking-wider">Ball</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Leaderboard Table -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[700px]">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider w-16">#</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Foydalanuvchi</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider w-40">Daraja</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-text-secondary uppercase tracking-wider w-32">Streak</th>
              <th class="px-6 py-4 text-right text-xs font-bold text-text-secondary uppercase tracking-wider w-32">Ballar</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <!-- Top Rankings -->
            <tr
              v-for="user in topUsers"
              :key="user.id"
              class="group hover:bg-green-50 transition-colors"
              :class="{ 'bg-light-border border-l-4 border-l-primary-500': user.isCurrentUser }"
            >
              <td class="px-6 py-4">
                <div
                  v-if="user.rank <= 3"
                  class="size-8 rounded-full flex items-center justify-center font-black text-sm"
                  :class="getRankBadgeClass(user.rank)"
                >
                  {{ user.rank }}
                </div>
                <span
                  v-else
                  class="font-medium pl-2"
                  :class="user.isCurrentUser ? 'text-primary-500 font-black' : 'text-slate-600'"
                >
                  {{ user.rank }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div
                    class="size-10 rounded-full bg-slate-200 bg-cover bg-center"
                    :class="user.isCurrentUser ? 'border-2 border-primary-500 p-0.5' : getRankBorderClass(user.rank)"
                    :style="{ backgroundImage: `url('${user.avatar}')` }"
                  >
                    <div v-if="user.isCurrentUser" class="w-full h-full rounded-full bg-cover bg-center border border-white" :style="{ backgroundImage: `url('${user.avatar}')` }"></div>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-bold text-slate-900">{{ user.name }}</span>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold"
                  :class="getLevelBadgeClass(user.level)"
                >
                  {{ user.level }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-1 text-slate-600 font-medium">
                  <span
                    class="material-symbols-outlined text-[18px]"
                    :class="user.streak >= 20 ? 'text-orange-500 filled' : user.streak >= 10 ? 'text-orange-400' : 'text-slate-300'"
                  >
                    local_fire_department
                  </span>
                  {{ user.streak }}
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <span class="font-black text-slate-900">{{ user.points }}</span>
              </td>
            </tr>

            <!-- Gap Row -->
            <tr v-if="showGap">
              <td class="px-6 py-4 text-center text-slate-600 bg-slate-50" colspan="5">
                <span class="material-symbols-outlined align-middle">more_vert</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination / Load More -->
      <div class="p-4 border-t border-slate-200 bg-slate-50 text-center">
        <button
          @click="loadMore"
          class="text-sm font-bold text-slate-600 hover:text-primary-500 transition-colors flex items-center justify-center gap-1 mx-auto py-2"
        >
          Ko'proq yuklash <span class="material-symbols-outlined text-lg">expand_more</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Period selection
const periods = ref([
  { label: 'Haftalik', value: 'weekly' },
  { label: 'Oylik', value: 'monthly' },
  { label: 'Umumiy', value: 'alltime' }
])
const selectedPeriod = ref('weekly')

// Current user data
const currentUser = ref({
  id: 14,
  rank: 14,
  name: 'Azizbek Tursunov',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-07yuAwrTHSS8PZWCMu2jy9NR9ZNub5q2rJdeWEdenFwv9Y8PZSTXHXb-jrAPVoUV_sRX2_YQGEZMBY1yPS-OxYQAaBmFdA0Ro6Q9f6Su_tWVEJbucLl-IfywoPyZvHo8NkYQEPkMvVd9Zwxal8ipY30VHJaQK0ug63OaBXl-Q3wtQRNpbC1Ph8kALgP1W3UlcTAh0X4isSXEq4Fwp1xfkQM7wDRojKsjZlKEdviyJspJB4YEwfBq7_cPsxfL4th3B2YNB5y48CM',
  level: 'A\'lochi',
  streak: 15,
  points: 2500,
  isCurrentUser: true
})

// Show gap before current user
const showGap = ref(true)

// Top users data
const topUsers = ref([
  {
    id: 1,
    rank: 1,
    name: 'Jasurbek A.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-qoakRevZ8RLEWTyIj4E3VOGP8uU-yMN2l_zLP37JKmzvXJFD-TQn47YZSRbanluWB4KwDRbS74Ze1sW1o3RbbCUnGzqd_U_RQLg6zsVwbxiVqoewYTDLLkvgCTlalrKeblE7KcezlZrsOHP5f3VwKT_aLxHMpLheO6YWrq5KYE8bNNs8oguvLiI6Bh5ETkp6nQg24ztjmWyASrDwaRV3agZLofrOWJyZxweQamFEchhNjzqC5MIdlfoEkhNUH1lwQnJFMVbovoo',
    level: 'Ekspert',
    streak: 45,
    points: 3500,
    isCurrentUser: false
  },
  {
    id: 2,
    rank: 2,
    name: 'Malika K.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN7SSPNRUMEbaqT4Ba7GgbHdj1YqBFpzcJDUz1YX9AvoQPwp7nxhtkR1tqtE94UNu7z_OCeleoNjLq59dkzfdKeSdN4q7xIZo9hA2Z7PaFiSmPqSNxqSK3ivh0Y8_Avpg3CdzeFWZsd7QIBl3VPngYWVmjcYyGebv0W6irMsoXlewbSTeFpyKDfih0eWnhY24zGXzDoz3zNfg6dME0cRF1onP85uAYeAFUz8pe2kf4wKF9AppgUA_-6N__gtQbZ_ffRe2t7qe7fPc',
    level: 'Professional',
    streak: 30,
    points: 3200,
    isCurrentUser: false
  },
  {
    id: 3,
    rank: 3,
    name: 'Sardor R.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPox-1jAiBOoEJ0TWdLEePfxNWIW-WP3EJP7btLX8_VFwebQzH0HlSZc3LkrNTu7NOMqEJfbTdccJj0_PkljUpB97pWFzXdkYe0GX2wWFsuHiG3j6ibt9Ip34ERvYzcES4TWnLPPEInOY5bjcMNd4LhJQSf_f7d1JuSgYFiU2SyngUxc0TI77n59G55qm0DIhUHTZEu6OANjK43jtS94luV71SyAVZf1UefCizw-cM82tE6lXlHUVBtoKGjV6gj_4jF2H3aFWzLWM',
    level: 'Professional',
    streak: 28,
    points: 3150,
    isCurrentUser: false
  },
  {
    id: 4,
    rank: 4,
    name: 'Dilshod O.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCDGX1uhica-cvJyXw2RBbo_wBylouuQSHN7KbKnjWoDf3olBDetCKdwnbzFqEi4vax8yth9EykdVzov8maNGqfPLwhnnRm8Ndf9sr959YO0iehnHV5I0ocZwEgQUBa4gErIlURmigmaEFUeVSM__R9mZnCO0Xqr8roZnUC87lMTTwTrDqBTaO7NbM23oravvJi2OqSH_O-kh-QaG6Jy9JNGRqTmPMTFvPiBni8yiM9N2Dp4XfneUFtOHu_okCLk07LS57t5sZEV4',
    level: 'Havaskor',
    streak: 12,
    points: 2800,
    isCurrentUser: false
  },
  {
    id: 5,
    rank: 5,
    name: 'Nodira S.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBOly9vVaV6nMfVoHJgsc7ch4cSBjBO_587X1YVjM9ac68mpaXXLGwxJK1VZRfPKNFFnl8ESFH-CN7j4NYNaFU9igD76m2arxj9ztWzm23ag1DFxG_yNbFz8HbrHSUabVXmbkY6--DuvUU-9RWf3ORZOL7NSOWj2WDflsph7jxiebNJhUcyAQRe0xPu-A-U6uEYUO81wnX3Ij01pKYLEwb1P3uiE_PcJ_yX3k1kGi0VCLi1F9ItXgiFtI032ub9nKaLIQLK3aJGco',
    level: 'Havaskor',
    streak: 10,
    points: 2750,
    isCurrentUser: false
  },
  {
    id: 6,
    rank: 6,
    name: 'Bekzod M.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9QmzYK3KsX5on1UjovYV5vhFMrc2zH4XT0Jt5hKJS8z3D4Cg7VwQK0oFgLh36Pi5WHPE70xEVbe-0Ixw48oYfhOfZVrsu91jLwm7l6xByFnoaTAWSQ1AWQFqsBWA28Fs7ekJXBdKurbgw2YD_RONgB5IoutvHiJEJViciN0UEykkl3YeZgqo8vXoiN4la3kYzAe4VQH7-WsoBiB2vfakWO2FaUwe68hq81eg2ZJSV6XUwPjkyw-hKC8L9NWntbiEGsFgJ28hFGn4',
    level: 'O\'quvchi',
    streak: 5,
    points: 2400,
    isCurrentUser: false
  },
  {
    id: 7,
    rank: 7,
    name: 'Shahlo I.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJNUM5fQHJLFu_l9Xyt8AwBpH67RFqRi0bVMbGBerg2mWQmFgwh33E0HZ2NBwSzEZ25u6WlncrVYpRk7ue24SDhCTy1ToOAws4nqLuTigfjvPR0v4IGKj63q0WQ4XuNEefttIVLdj7YfgRIPMUMP5ZkR0bLZOMaVPpGKiC9mjhVeghjzEO1YpyRxkyZX17sdShC5p9Ahv0pdd58ZYDGnQf9uh-IfRlTKQIZcRkGJOlR4ChjLOV59VDW5A50bcCtijpPZYwizFmf9I',
    level: 'O\'quvchi',
    streak: 4,
    points: 2300,
    isCurrentUser: false
  },
  currentUser.value
])

// Helper functions for styling
const getRankBadgeClass = (rank) => {
  if (rank === 1) return 'bg-yellow-100 text-yellow-700'
  if (rank === 2) return 'bg-slate-100 text-slate-600'
  if (rank === 3) return 'bg-orange-50 text-orange-800'
  return ''
}

const getRankBorderClass = (rank) => {
  if (rank === 1) return 'border-2 border-yellow-400'
  if (rank === 2) return 'border-2 border-slate-300'
  if (rank === 3) return 'border-2 border-orange-300'
  return ''
}

const getLevelBadgeClass = (level) => {
  if (level === 'Ekspert') return 'bg-primary-500/20 text-green-800'
  if (level === 'Professional') return 'bg-purple-100 text-purple-800'
  if (level === 'A\'lochi') return 'bg-green-100 text-green-800'
  if (level === 'Havaskor') return 'bg-blue-100 text-blue-800'
  return 'bg-slate-100 text-slate-800'
}

// Load more function
const loadMore = () => {
  console.log('Loading more users...')
  // Add logic to load more users
}
</script>

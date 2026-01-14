<template>
  <div class="bg-light-secondary min-h-screen flex flex-col text-text-main">
    <main class="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8 md:py-12 flex flex-col gap-8">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-light-border">
        <div class="flex flex-col gap-2 max-w-xl">
          <h1 class="text-text-main text-3xl md:text-4xl font-black tracking-tight">Mavzu Tanlash</h1>
          <p class="text-text-secondary text-base font-normal leading-relaxed">
            Qaysi mavzudan boshlaymiz? Imtihonga tayyorgarlik ko'rish uchun quyidagi mavzulardan birini tanlang.
          </p>
        </div>
        <div class="w-full md:w-80 bg-white p-4 rounded-xl shadow-sm border border-light-border">
          <div class="flex gap-6 justify-between mb-2">
            <p class="text-text-main text-sm font-bold">Umumiy o'zlashtirish</p>
            <span class="bg-primary-500/20 text-text-main text-xs font-bold px-2 py-0.5 rounded-full">{{ overallProgress }}%</span>
          </div>
          <div class="relative h-2.5 w-full rounded-full bg-primary-100 overflow-hidden">
            <div
              class="absolute h-full rounded-full bg-primary-500 transition-all duration-1000 ease-out"
              :style="{ width: `${overallProgress}%` }"
            ></div>
          </div>
          <p class="mt-2 text-xs text-text-secondary text-right">{{ completedLessons }} / {{ totalLessons }} ta dars yakunlandi</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="topic in topics"
          :key="topic.id"
          class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-light-border"
        >
          <div
            class="h-44 w-full bg-cover bg-center relative"
            :style="{ backgroundImage: `url('${topic.image}')` }"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
              <div class="flex items-center gap-2">
                <span
                  :class="[
                    'rounded-lg p-1.5 material-symbols-outlined text-lg font-bold',
                    topic.badgeColor
                  ]"
                >
                  {{ topic.icon }}
                </span>
                <span class="text-sm font-bold tracking-wide uppercase">{{ topic.category }}</span>
              </div>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1 gap-5">
            <div class="flex-1">
              <h3 class="text-text-main text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                {{ topic.title }}
              </h3>
              <p class="text-text-secondary text-sm mb-5 leading-relaxed line-clamp-2">
                {{ topic.description }}
              </p>
              <div class="flex items-center gap-4 py-3 border-t border-light-border">
                <div class="flex items-center gap-1.5 text-text-secondary">
                  <span class="material-symbols-outlined text-[18px]">quiz</span>
                  <span class="text-xs font-semibold">{{ topic.questions }} savol</span>
                </div>
                <div class="w-px h-3 bg-gray-200"></div>
                <div class="flex items-center gap-1.5 text-text-secondary">
                  <span class="material-symbols-outlined text-[18px]">schedule</span>
                  <span class="text-xs font-semibold">{{ topic.duration }} daqiqa</span>
                </div>
              </div>
            </div>
            <button
              :class="[
                'w-full py-3.5 px-4 rounded-xl font-extrabold transition-all flex items-center justify-center gap-2',
                topic.isPrimary
                  ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 group-hover:scale-[1.02]'
                  : 'bg-gray-50 hover:bg-primary-500 hover:text-white text-text-main font-bold group-hover:shadow-lg group-hover:shadow-primary-500/20'
              ]"
              @click="startTopic(topic.id)"
            >
              Boshlash
              <span class="material-symbols-outlined text-lg" :class="topic.isPrimary ? 'font-bold' : ''">
                {{ topic.isPrimary ? 'arrow_forward' : 'play_arrow' }}
              </span>
            </button>
          </div>
        </article>
      </div>
    </main>

    <footer class="mt-auto bg-white border-t border-light-border">
      <div class="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-2 text-text-main">
            <span class="material-symbols-outlined text-primary-500">local_taxi</span>
            <span class="font-bold">Avtotest</span>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <NuxtLink to="#" class="text-text-secondary hover:text-primary-500 transition-colors text-sm font-medium">
              Yordam
            </NuxtLink>
            <NuxtLink to="#" class="text-text-secondary hover:text-primary-500 transition-colors text-sm font-medium">
              Biz haqimizda
            </NuxtLink>
            <NuxtLink to="#" class="text-text-secondary hover:text-primary-500 transition-colors text-sm font-medium">
              Maxfiylik siyosati
            </NuxtLink>
            <NuxtLink to="#" class="text-text-secondary hover:text-primary-500 transition-colors text-sm font-medium">
              Aloqa
            </NuxtLink>
          </div>
          <p class="text-text-secondary text-sm">© 2023 Avtotest. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const overallProgress = ref(35)
const completedLessons = ref(32)
const totalLessons = ref(95)

const topics = ref([
  {
    id: 1,
    title: "Yo'l belgilari",
    description: "Ogohlantiruvchi, imtiyozli va taqiqlovchi belgilar haqida to'liq ma'lumot.",
    category: "Asosiy qism",
    icon: "traffic",
    badgeColor: "bg-primary-500 text-black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4CTjG_GIsysn2ouKooNPj28XtiDsxD3-p0qTR4uVdODLOtw50Ln40zUcmJYJxalgi4uZMFz9DjSNINjdYijr_0hQtupYtwvJrqRG8_7ufXur77QgIR3S_my7Ro3Uv9HXT5GEX5NKFdpsO2jsymW1ri0Mzbmq7lbIhBtfqw7OKiht9ykOluAStDcY6TYH5jqIpVBLPkPA7BwZS0G4id5NTa4CLK8t8XnES4wRBIKc2SbvCAhtavCrq7-8MqsCzEsp3s1gkYSjRzgQ",
    questions: 20,
    duration: 15,
    isPrimary: true
  },
  {
    id: 2,
    title: "Ustuvorlik belgilari",
    description: "Chorrahalarda harakatlanish tartibi va yo'l berish qoidalari.",
    category: "Muhim",
    icon: "priority_high",
    badgeColor: "bg-yellow-400 text-black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBioBjdgjaUhAN6nITpW7C0HQIYUEsA6eDhwsKAFyegMts2ohhxgFNrJ6E2sMrSiov4Y_l6-MOlEQXmhfmO1-mYeqdA8beoLizNarRtm0u4Ro13cdVpDWRAyUNjlr1uxoojtCkF_jdqTHHeWZkc4yfGOX2qwSrE07Oodyw4uOIKhrxfwHV9PonOQcYvMtBl5Fo49YXnnEEaC_DKJgBaFUe5aqxfrsR8JN8CO7Dx8jHN-U9Cjq5Z1QQb7WSiJW-3_tmTWYS5BlQ3tiY",
    questions: 15,
    duration: 10,
    isPrimary: false
  },
  {
    id: 3,
    title: "Svetofor va nozirlar",
    description: "Svetofor ishoralari va yo'l harakati nozirining ko'rsatmalari.",
    category: "Texnik",
    icon: "traffic",
    badgeColor: "bg-green-500 text-black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd22CvM32GPBGj-Ybc5-gtMXmtTKduuCP1-jfbR5R0EpF-quN1GHkX5l44nSIlvRgso1A9t2YPRAWoR0C60xstvho7S43AHEmjTQpBAMxNlm2vf7xHgbLcscO7h1ymt2zskxtYojh0SeSkQV2uCA8KDefgrAGz-CMwpJdGIXxWfa-WWNv4R4kBVoOYSKT1wfJWP0U3vvKA2lRv5lS8QBS_ECcORsqPk0ME5Ys1J2x-UyS-gsJ2BN6eGNQiL7_DZyUHGrrGHErxLGQ",
    questions: 10,
    duration: 8,
    isPrimary: false
  },
  {
    id: 4,
    title: "Tezlik cheklovlari",
    description: "Aholi punktlarida va magistrallarda tezlikni tanlash qoidalari.",
    category: "Xavfsizlik",
    icon: "speed",
    badgeColor: "bg-red-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY84NCWFQQDphLFrXCKUuN0iQuRditOb4t6BZ4qCm237hgNUAdHMm0NeyD677GJskqu_FGqWyI9q07QCGIN1JZlBYsPnvSjBXrDVzxaEPwYYgPvghkq3Ur47pxR2zS7Pr-X1H3gPggsUWDfEYz5m2vMuqdA-sgpBKw8GGFov7fAISLEDjIW3H07jGbrVayqYwn-YiUdrA9UyW-Bd557S477V8KObh-d8cTUCG2mycX4AShJiYDOY7VxuWuMEB_6E2N2eXglD3m6DQ",
    questions: 12,
    duration: 10,
    isPrimary: false
  },
  {
    id: 5,
    title: "Yo'l chiziqlari",
    description: "Yotiq va tik chiziqlar, ularning ma'nosi va talablari.",
    category: "Markirovka",
    icon: "edit_road",
    badgeColor: "bg-gray-200 text-black",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAT1Zz7D4LaqzoyIwHJ01hcNS3-GP8zcRRkUKImfqlNjnoKt11O5xiudxfqL2MadnoygRJl16K4c8pqfy_dqeBR_xv8ao-BU-bsi3oP4T9IOTtxguMzv59qodtQJr7a1cPfViDOsqYfiOmJmD9cs2y-CzazzQls1V-Yf8yYvzY3O_F3a-A1UipNwGSixLNLV25OG-OiIeEulU79AAZCcDqeQnnplrMPrlKwpw3RAltpSbJ0sLoJ9IyeJoFeJEqI15bbb1iwrHkuJw",
    questions: 8,
    duration: 5,
    isPrimary: false
  },
  {
    id: 6,
    title: "Harakatlanish qoidalari",
    description: "Manevr qilish, quvib o'tish va to'xtash qoidalari.",
    category: "Murakkab",
    icon: "directions_car",
    badgeColor: "bg-blue-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBggnuJIPUf3DFajLkG3U_xt1KTr3D6AJlW39YkPX-KECTCgYICJJlkM3Q3eDTXFQbpi17YcikvxOfzOkZe5frt268PFHtdB2ypWtcYnwV5KqErTMe7oBPGMlfwbkg92kLpxFPlSyHTEQh5MjJjHu9i81XypRpoSt2ePLiyXYNgqvz2J28HDbe31ytcJ3eB8_gGnWZ1OSdlBnvu3QrOgyihel_6mACTltgxLSUjC8HcypvggayypkaD0YWpIorlqIqVBLkGPJs9xUY",
    questions: 25,
    duration: 20,
    isPrimary: false
  },
  {
    id: 7,
    title: "Yo'l belgilarining kombinatsiyasi",
    description: "Bir nechta belgilarni bir vaqtda qo'llash va ularni to'g'ri o'qish qoidalari.",
    category: "Kombinatsiya",
    icon: "alt_route",
    badgeColor: "bg-purple-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4CTjG_GIsysn2ouKooNPj28XtiDsxD3-p0qTR4uVdODLOtw50Ln40zUcmJYJxalgi4uZMFz9DjSNINjdYijr_0hQtupYtwvJrqRG8_7ufXur77QgIR3S_my7Ro3Uv9HXT5GEX5NKFdpsO2jsymW1ri0Mzbmq7lbIhBtfqw7OKiht9ykOluAStDcY6TYH5jqIpVBLPkPA7BwZS0G4id5NTa4CLK8t8XnES4wRBIKc2SbvCAhtavCrq7-8MqsCzEsp3s1gkYSjRzgQ",
    questions: 18,
    duration: 12,
    isPrimary: false
  }
])

const startTopic = (topicId) => {
  // Navigate to topic content page
  navigateTo(`/mavzu-kontent?id=${topicId}`)
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

<template>
  <div class="bg-background-light font-lexend text-slate-900 min-h-screen transition-colors duration-200">
    <!-- Top Bar (Fixed) -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60">
      <!-- Desktop Top Bar -->
      <div class="hidden md:flex h-16 items-center justify-between max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Logo (Left) -->
        <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer group">
          <div class="flex items-center justify-center size-9 rounded-lg bg-primary-500 text-slate-900 transition-transform group-hover:scale-105 shadow-sm">
            <span class="material-symbols-outlined font-bold">directions_car</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-slate-900">Avtotest</span>
        </NuxtLink>

        <!-- Right section: Stats + Profile -->
        <div class="flex items-center gap-4">
          <!-- Streak Badge -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/50 text-amber-700 shadow-sm" title="Kunlik streak">
            <span class="material-symbols-outlined text-[18px]">local_fire_department</span>
            <span class="text-xs font-bold">{{ userStreak }}</span>
          </div>

          <!-- XP Badge -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 text-slate-600 shadow-sm" title="To'plangan ballar">
            <span class="material-symbols-outlined text-[18px] text-primary-600">stars</span>
            <span class="text-xs font-bold">{{ userXP }} XP</span>
          </div>

          <!-- Divider -->
          <div class="h-8 w-px bg-slate-200"></div>

          <!-- User Profile -->
          <NuxtLink to="/profil" class="flex items-center gap-3 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors cursor-pointer">
            <div class="hidden lg:flex flex-col items-end">
              <span class="text-sm font-bold leading-none">{{ userName }}</span>
              <span class="text-xs text-slate-500">{{ userLevel }}</span>
            </div>
            <div class="size-10 rounded-full bg-cover bg-center border-2 border-slate-100 hover:border-primary-500 shadow-sm relative transition-all" :style="{ backgroundImage: `url('${userAvatar}')` }">
              <div class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Top Bar -->
      <div class="flex md:hidden h-16 items-center justify-between px-4">
        <!-- Hamburger Button (Left) -->
        <button
          @click="toggleMobileMenu"
          class="size-10 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors text-slate-900"
          aria-label="Open navigation menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>

        <!-- Logo (Center) -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="size-8 rounded-lg bg-primary-500 text-slate-900 flex items-center justify-center shadow-sm">
            <span class="material-symbols-outlined text-xl">directions_car</span>
          </div>
          <span class="text-lg font-bold">Avtotest</span>
        </NuxtLink>

        <!-- Profile Avatar (Right) -->
        <NuxtLink to="/profil" class="size-10 rounded-full bg-cover bg-center border-2 border-slate-100 shadow-sm relative" :style="{ backgroundImage: `url('${userAvatar}')` }">
          <div class="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        </NuxtLink>
      </div>
    </header>

    <!-- Layout Container -->
    <div class="flex pt-16">
      <!-- Desktop Sidebar (Fixed, visible md+) -->
      <aside class="hidden md:flex fixed left-0 top-16 bottom-0 w-64 border-r border-slate-200/60 bg-white flex-col overflow-y-auto">
        <nav class="flex-1 py-6 px-4 space-y-1">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group"
            active-class="bg-primary-50 text-slate-900 shadow-sm"
            inactive-class="text-slate-600 hover:bg-slate-50"
          >
            <span
              class="material-symbols-outlined text-[22px] transition-colors"
              :class="$route.path === item.path ? 'text-primary-600' : 'text-slate-400 group-hover:text-primary-500'"
            >
              {{ item.icon }}
            </span>
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-8 max-w-[1200px] mx-auto w-full">
        <slot />
      </main>
    </div>

    <!-- Mobile Bottom Sheet/Modal -->
    <Teleport to="body">
      <!-- Backdrop overlay -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          @click="closeMobileMenu"
          class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
        ></div>
      </Transition>

      <!-- Bottom sheet -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        leave-active-class="transition-transform duration-200 ease-in"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto md:hidden"
        >
          <!-- Handle bar -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-12 h-1.5 bg-slate-300 rounded-full"></div>
          </div>

          <!-- User Stats Section -->
          <div class="px-6 py-4 border-b border-slate-200/60">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="size-12 rounded-full bg-cover bg-center border-2 border-slate-100 shadow-sm" :style="{ backgroundImage: `url('${userAvatar}')` }"></div>
                <div>
                  <div class="text-sm font-bold text-slate-900">{{ userName }}</div>
                  <div class="text-xs text-slate-500">{{ userLevel }}</div>
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex-1 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200/50">
                <span class="material-symbols-outlined text-[18px] text-amber-700">local_fire_department</span>
                <span class="text-sm font-bold text-amber-700">{{ userStreak }}</span>
              </div>
              <div class="flex-1 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/50">
                <span class="material-symbols-outlined text-[18px] text-primary-600">stars</span>
                <span class="text-sm font-bold text-slate-600">{{ userXP }} XP</span>
              </div>
            </div>
          </div>

          <!-- Navigation Items -->
          <nav class="py-4 px-4 space-y-1">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-bold transition-all"
              active-class="bg-primary-50 text-slate-900"
              inactive-class="text-slate-600 active:bg-slate-50"
            >
              <span
                class="material-symbols-outlined text-[24px]"
                :class="$route.path === item.path ? 'text-primary-600' : 'text-slate-400'"
              >
                {{ item.icon }}
              </span>
              <span>{{ item.label }}</span>
            </NuxtLink>
          </nav>

          <!-- Safe area padding for iOS -->
          <div class="h-8"></div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
// Demo data - replace with actual user data from your state management/API
const userName = ref('Azizbek')
const userLevel = ref('Boshlovchi')
const userStreak = ref(5)
const userXP = ref('1,450')
const userAvatar = ref('https://lh3.googleusercontent.com/aida-public/AB6AXuCE_qTtlRumap2RM0DoV_mnLxlB0As5kl6ZWF4Sm_VgpZk4Yvcu08chl1LqjdvVcsJbOQ6nkBrvSDY9RhWcf7wUDpDDzoPfdPZ9cQ1xs7efSpyXBjRdPC926tta7eyc6YLM2JJSFGyFUFH80yqQmPxBwZHWtQhwqaLpIUQ60z2A3iTIfckibrZqjYBXHjee_k8dDkbPckfz9Ug0-1TG-iB7BnEyt1nbjTa84bhnTX6-2ILOXTKVBtq29D0VLavBOG6uDFOAy0g-EQw')

// Navigation items
const navigationItems = ref([
  { path: '/', label: 'Bosh sahifa', icon: 'home' },
  { path: '/mavzu-tanlash', label: "O'rganish", icon: 'school' },
  { path: '/imtihon-boshlash', label: 'Imtihon', icon: 'timer' },
  { path: '/bilet-tanlash', label: 'Biletlar', icon: 'airplane_ticket' },
  { path: '/xatolar-ustida-ishlash', label: 'Xatolar', icon: 'assignment_late' },
  { path: '/statistika-va-progress', label: 'Statistika', icon: 'bar_chart' },
  { path: '/reyting', label: 'Reyting', icon: 'emoji_events' },
  { path: '/yutuqlar', label: 'Yutuqlar', icon: 'workspace_premium' }
])

// Mobile menu state
const isMobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu on route change
watch(() => route.path, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="bg-light-secondary dark:bg-dark-primary font-lexend antialiased text-text-main dark:text-white min-h-screen flex flex-col">
    <!-- Top Navigation -->
    <header class="w-full border-b border-light-border dark:border-dark-tertiary bg-white dark:bg-dark-primary sticky top-0 z-50">
      <div class="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto w-full">
        <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer">
          <div class="size-8 text-primary-500 flex items-center justify-center bg-primary-500/10 rounded-lg p-1.5">
            <svg class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 class="text-xl md:text-2xl font-bold tracking-tight text-text-main dark:text-white">Avtotest</h1>
        </NuxtLink>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-text-main dark:text-gray-300">
          <NuxtLink to="/" class="hover:text-primary-500 transition-colors">Bosh sahifa</NuxtLink>
          <NuxtLink to="/imtihon-boshlash" class="hover:text-primary-500 transition-colors">Imtihonlar</NuxtLink>
          <NuxtLink to="/mavzu-tanlash" class="hover:text-primary-500 transition-colors">Qoidalar</NuxtLink>
        </nav>
        <NuxtLink
          to="/kirish"
          class="flex h-10 px-6 items-center justify-center rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-all shadow-sm hover:shadow-md"
        >
          Kirish
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow flex items-center justify-center p-4 md:p-8">
      <div class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Column: Marketing / Visual -->
        <div class="hidden lg:flex flex-col gap-8 order-2 lg:order-1">
          <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
            <!-- Abstract Overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-transparent z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCjOVVy6OYhW6x7Jtgl1CiIn_oBGt8Vp-QppXWJ-jqJPDPmnjk1l5EWgjM2S21ygOqXnxEPZCOqxafKdQQ5WW_6ehUY50qGOEpXWvkJHaBocWfUgFnbLYjnQy32cN6axmLJrwP5bsGGxXavOolMLsTdxOW90LlWygKGsoV5HhpHK2Xxot-zA2z-aMywkn9JUr_Ci46S1xE3iO0fTfDK9rtaVsOJ5jrfz_t3lknUnwzt-GROIhz9-4bt7cpBcCLVFUAzQ-hObKsky8"
              alt="Driver's view from inside a car"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <h3 class="text-white text-3xl font-bold mb-2">Yo'l harakati qoidalarini oson o'rganing</h3>
              <p class="text-gray-200 text-lg">Real imtihonga tayyorlanishning eng samarali usuli.</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-light-border dark:border-dark-tertiary text-center">
              <span class="material-symbols-outlined text-primary-500 text-3xl mb-2">school</span>
              <p class="font-bold text-sm">100+ Darslar</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-light-border dark:border-dark-tertiary text-center">
              <span class="material-symbols-outlined text-primary-500 text-3xl mb-2">quiz</span>
              <p class="font-bold text-sm">Real Testlar</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-light-border dark:border-dark-tertiary text-center">
              <span class="material-symbols-outlined text-primary-500 text-3xl mb-2">verified</span>
              <p class="font-bold text-sm">Sertifikat</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Registration Form -->
        <div class="flex flex-col w-full max-w-md mx-auto order-1 lg:order-2">
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-text-main dark:text-white mb-2">Ro'yxatdan o'tish</h2>
            <p class="text-gray-500 dark:text-gray-400">Yangi akkaunt yarating va o'qishni boshlang.</p>
          </div>

          <form class="flex flex-col gap-5" @submit.prevent="handleRegister">
            <!-- Username Input -->
            <div class="space-y-2">
              <label for="username" class="text-sm font-medium text-text-main dark:text-gray-300">
                Foydalanuvchi ismi
              </label>
              <div class="relative group">
                <input
                  id="username"
                  v-model="registerForm.username"
                  type="text"
                  placeholder="Ismingizni kiriting"
                  class="w-full h-12 pl-4 pr-12 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <div class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-primary-500 pointer-events-none">
                  <span class="material-symbols-outlined">person</span>
                </div>
              </div>
            </div>

            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium text-text-main dark:text-gray-300">
                Elektron pochta
              </label>
              <div class="relative group">
                <input
                  id="email"
                  v-model="registerForm.email"
                  type="email"
                  placeholder="example@mail.com"
                  class="w-full h-12 pl-4 pr-12 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <div class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-primary-500 pointer-events-none">
                  <span class="material-symbols-outlined">mail</span>
                </div>
              </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-2">
              <label for="password" class="text-sm font-medium text-text-main dark:text-gray-300">
                Parol
              </label>
              <div class="relative group">
                <input
                  id="password"
                  v-model="registerForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="8+ belgi"
                  class="w-full h-12 pl-4 pr-12 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <div
                  class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 cursor-pointer hover:text-primary-500 transition-colors"
                  @click="showPassword = !showPassword"
                >
                  <span class="material-symbols-outlined text-[20px]">
                    {{ showPassword ? 'visibility' : 'visibility_off' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Confirm Password Input -->
            <div class="space-y-2">
              <label for="confirm_password" class="text-sm font-medium text-text-main dark:text-gray-300">
                Parolni tasdiqlash
              </label>
              <div class="relative group">
                <input
                  id="confirm_password"
                  v-model="registerForm.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  placeholder="Parolni takrorlang"
                  class="w-full h-12 pl-4 pr-12 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <div
                  class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 cursor-pointer hover:text-primary-500 transition-colors"
                  @click="showConfirmPassword = !showConfirmPassword"
                >
                  <span class="material-symbols-outlined text-[20px]">
                    {{ showConfirmPassword ? 'visibility' : 'visibility_off' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Terms Checkbox -->
            <div class="flex items-start gap-3 mt-2">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  v-model="registerForm.acceptTerms"
                  type="checkbox"
                  class="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <label for="terms" class="text-sm text-gray-500 dark:text-gray-400">
                Men
                <NuxtLink to="/shartlar" class="text-primary-500 hover:underline font-medium">
                  Foydalanish shartlari
                </NuxtLink>
                va
                <NuxtLink to="/maxfiylik" class="text-primary-500 hover:underline font-medium">
                  Maxfiylik siyosati
                </NuxtLink>
                bilan tanishdim.
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="mt-4 w-full h-12 bg-primary-600 hover:bg-primary-700 active:scale-[0.98] text-white font-bold text-base rounded-lg transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
            >
              <span>Ro'yxatdan o'tish</span>
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </button>

            <!-- Divider -->
            <div class="relative flex py-2 items-center">
              <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span class="flex-shrink-0 mx-4 text-gray-400 text-sm">Yoki</span>
              <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>

            <!-- Social Login -->
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                class="h-12 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Google</span>
              </button>
              <button
                type="button"
                class="h-12 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-light-border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg aria-hidden="true" class="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clip-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Facebook</span>
              </button>
            </div>

            <div class="text-center mt-4">
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                Allaqachon akkauntingiz bormi?
                <NuxtLink to="/kirish" class="text-primary-500 hover:text-primary-600 font-bold hover:underline transition-all ml-1">
                  Kirish
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>

    <!-- Simple Footer -->
    <footer class="py-6 border-t border-light-border dark:border-dark-tertiary mt-auto bg-white dark:bg-dark-primary">
      <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 dark:text-gray-500">
        © 2025 Avtotest. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
})

const registerForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  // TODO: Implement registration logic
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('Parollar mos kelmayapti!')
    return
  }
  if (!registerForm.value.acceptTerms) {
    alert('Foydalanish shartlarini qabul qiling!')
    return
  }
  console.log('Registration attempt:', registerForm.value)
  // Navigate to home page after successful registration
  // navigateTo('/')
}
</script>

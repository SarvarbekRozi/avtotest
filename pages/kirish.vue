<template>
  <div class="bg-light-secondary dark:bg-dark-primary text-text-main dark:text-white h-screen overflow-hidden flex flex-col">
    <!-- Main Container -->
    <div class="flex flex-1 w-full h-full relative">
      <!-- Left Side: Visual/Branding (Hidden on mobile, visible on lg screens) -->
      <div class="hidden lg:flex w-5/12 relative flex-col justify-between p-12 bg-dark-primary overflow-hidden">
        <!-- Background Decoration -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style="background-image: url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop')"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/80 to-transparent"></div>

        <!-- Logo area -->
        <div class="relative z-10 flex items-center gap-3">
          <div class="size-10 bg-primary-500 rounded-lg flex items-center justify-center text-dark-primary">
            <span class="material-symbols-outlined text-3xl">directions_car</span>
          </div>
          <h1 class="text-white text-2xl font-bold tracking-tight">Avtotest</h1>
        </div>

        <!-- Promotional Content -->
        <div class="relative z-10 mt-auto mb-10">
          <blockquote class="text-3xl font-bold text-white leading-tight mb-6">
            "Yo'l harakati qoidalarini o'rganish hech qachon bunchalik oson bo'lmagan."
          </blockquote>
          <div class="flex items-center gap-4 text-white/80">
            <div class="flex -space-x-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBeIoMos7vWxu4sO9nnQblu17XIgTR85x_td_t-WViZ8EHFuA536CBfvVP2hOSKNu1tfoyPaKNzl90kPoRKJzigNfJ82nlND4vfLOQGMrOda0JC3IshkfDdJtjkEQdmp-r7kjst9FUdBw4HkfDSzDP-08hT7QWVgbdeqW1Sp5UOsQ0SyC_i_AL1hBfkNqjoQugEkgGYH27XksSOCmgBVP9qHmLZ8XbHTmp8nFEVa7RI3c6wGJSroGViDT3bfAGEEghehmw8JPNIk"
                alt="User avatar"
                class="w-10 h-10 rounded-full border-2 border-dark-primary object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJqJH5iALC30dHK_s9nzOgQA8fHV7D10jFDnA2eqY4_TLHvenR1TGDxLqxq4cbivtwgNVWXLuzIp-2BNeHjj2ZkSr0_91UcZcYEq2OaLC0G0NcpHkJ6MPsTKO91j1IGbmSYGFGayEDuZgRZXjPsyfNgTc1HBigiRNiQ7pQCzqVEdTu8x1y4XLezyqYsYHl10QNWYhIPN_Ty31lRjp9Gug39YTvsTtVaBl51JNGe8z8grOxvO5tGmbM_v8VAuqczcNJJzhP2tGPJs"
                alt="User avatar"
                class="w-10 h-10 rounded-full border-2 border-dark-primary object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSl6Ciq-s8jULad2trOIcHO0LWetBw3j4r6yAAtEj0tWXJcJ51VNoq4hJR_b2CgwCNExnjUo3mNfn9spIUVpeXOS6CmfUZmItJpWvTAW7zyUMSrmT5G6MVjFU1ESaG33PSGFjBU-m4sLr2RzQtzJEVll12ZR2MulxhJE7sWwShmNAQp6wLWnTafGmAN36yib4h9-lhpRy1Cxi8oyTQFWRkNPolZansE1TaEWdvmPYbo7wSjEU2XHRY8mJwweyRnqELCzJKVwIbnNc"
                alt="User avatar"
                class="w-10 h-10 rounded-full border-2 border-dark-primary object-cover"
              />
            </div>
            <p class="text-sm font-medium">15,000+ o'quvchilar bizga ishonadi</p>
          </div>
        </div>

        <!-- App Store Badges (Visual Only) -->
        <div class="relative z-10 flex gap-4 pt-8 border-t border-white/10">
          <div class="h-10 w-32 bg-white/10 rounded border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
            <span class="text-xs font-bold text-white">Google Play</span>
          </div>
          <div class="h-10 w-32 bg-white/10 rounded border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
            <span class="text-xs font-bold text-white">App Store</span>
          </div>
        </div>
      </div>

      <!-- Right Side: Login Form -->
      <div class="w-full lg:w-7/12 flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto bg-light-secondary dark:bg-dark-primary">
        <div class="w-full max-w-[480px] flex flex-col gap-8">
          <!-- Mobile Logo (Visible only on small screens) -->
          <div class="lg:hidden flex items-center gap-2 mb-4">
            <div class="size-8 bg-primary-500 rounded-lg flex items-center justify-center text-dark-primary">
              <span class="material-symbols-outlined text-xl">directions_car</span>
            </div>
            <h2 class="text-text-main dark:text-white text-xl font-bold">Avtotest</h2>
          </div>

          <!-- Header Text -->
          <div class="flex flex-col gap-2">
            <h2 class="text-text-main dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
              Xush kelibsiz!
            </h2>
            <p class="text-text-secondary dark:text-gray-400 text-base sm:text-lg">
              Tizimga kirish uchun ma'lumotlaringizni kiriting.
            </p>
          </div>

          <!-- Form -->
          <form class="flex flex-col gap-5" @submit.prevent="handleLogin">
            <!-- Username/Email Field -->
            <div class="flex flex-col gap-2">
              <label for="username" class="text-text-main dark:text-white text-sm font-semibold">
                Elektron pochta yoki username
              </label>
              <div class="relative">
                <input
                  id="username"
                  v-model="loginForm.username"
                  type="text"
                  placeholder="example@mail.com"
                  class="w-full h-14 pl-12 pr-4 bg-white dark:bg-[#1a3322] border border-[#cfe7d7] dark:border-[#2a5a3b] rounded-xl text-text-main dark:text-white placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                />
                <div class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  <span class="material-symbols-outlined text-[20px]">person</span>
                </div>
              </div>
            </div>

            <!-- Password Field -->
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <label for="password" class="text-text-main dark:text-white text-sm font-semibold">
                  Parol
                </label>
                <NuxtLink
                  to="/parolni-tiklash"
                  class="text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors"
                >
                  Parolni unutdingizmi?
                </NuxtLink>
              </div>
              <div class="relative">
                <input
                  id="password"
                  v-model="loginForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="********"
                  class="w-full h-14 pl-12 pr-12 bg-white dark:bg-[#1a3322] border border-[#cfe7d7] dark:border-[#2a5a3b] rounded-xl text-text-main dark:text-white placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                />
                <div class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  <span class="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <button
                  type="button"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-main dark:hover:text-white transition-colors cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <span class="material-symbols-outlined text-[20px]">
                    {{ showPassword ? 'visibility_off' : 'visibility' }}
                  </span>
                </button>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="mt-2 w-full h-14 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-600/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>Kirish</span>
              <span class="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="flex items-center gap-4 my-2">
            <div class="h-px bg-light-border dark:bg-white/10 flex-1"></div>
            <span class="text-text-secondary text-sm font-medium">yoki</span>
            <div class="h-px bg-light-border dark:bg-white/10 flex-1"></div>
          </div>

          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-4">
            <button
              type="button"
              class="h-12 flex items-center justify-center gap-2 bg-white dark:bg-[#1a3322] border border-[#cfe7d7] dark:border-[#2a5a3b] rounded-xl text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#23442d] transition-colors"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
              </svg>
              <span class="text-sm font-medium">Google</span>
            </button>
            <button
              type="button"
              class="h-12 flex items-center justify-center gap-2 bg-white dark:bg-[#1a3322] border border-[#cfe7d7] dark:border-[#2a5a3b] rounded-xl text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#23442d] transition-colors"
            >
              <svg class="w-5 h-5 text-[#24A1DE]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0C5.353 0 0 5.378 0 12C0 18.623 5.353 24 11.944 24C18.534 24 23.888 18.623 23.888 12C23.888 5.378 18.535 0 11.944 0ZM17.653 8.783C17.518 10.224 16.924 13.784 16.621 15.405C16.493 16.091 16.241 16.321 16.002 16.342C15.467 16.39 15.06 15.987 14.542 15.647C13.731 15.115 13.273 14.783 12.486 14.264C11.577 13.664 12.166 13.335 12.684 12.797C12.82 12.656 15.176 10.51 15.222 10.316C15.227 10.291 15.232 10.198 15.177 10.149C15.122 10.1 15.04 10.117 14.981 10.13C14.897 10.149 13.564 11.031 10.982 12.775C10.603 13.046 10.261 13.179 9.954 13.172C9.615 13.165 8.962 12.981 8.477 12.823C7.882 12.629 7.409 12.527 7.45 12.196C7.471 12.024 7.708 11.848 8.175 11.662C10.378 10.655 11.849 10.021 12.589 9.759C14.717 9.006 15.161 8.875 15.45 8.875C15.513 8.875 15.656 8.89 15.745 8.963C15.82 9.023 15.842 9.105 15.849 9.163C15.857 9.201 15.867 9.383 17.653 8.783Z" />
              </svg>
              <span class="text-sm font-medium">Telegram</span>
            </button>
          </div>

          <!-- Footer Sign Up -->
          <div class="text-center mt-4">
            <p class="text-text-secondary text-sm">
              Akkauntingiz yo'qmi?
              <NuxtLink to="/royxatdan-otish" class="text-text-main dark:text-white font-bold hover:underline">
                Ro'yxatdan o'ting
              </NuxtLink>
            </p>
          </div>
        </div>

        <!-- Mobile App Badges (Visible on mobile screens at bottom) -->
        <div class="lg:hidden mt-8 flex flex-col items-center gap-4 w-full">
          <p class="text-xs text-text-secondary">Ilovani yuklab oling</p>
          <div class="flex gap-4">
            <div class="h-8 w-24 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center">
              <span class="text-[10px] font-bold text-text-main dark:text-white">Google Play</span>
            </div>
            <div class="h-8 w-24 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center">
              <span class="text-[10px] font-bold text-text-main dark:text-white">App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
})

const loginForm = ref({
  username: '',
  password: '',
})

const showPassword = ref(false)

const handleLogin = () => {
  // TODO: Implement login logic
  console.log('Login attempt:', loginForm.value)
  // Navigate to home page after successful login
  // navigateTo('/')
}
</script>

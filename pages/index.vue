<template>
  <div>
    <!-- Hero Section -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Salom, Azizbek! 👋</h1>
        </div>
        <p class="text-slate-600 text-lg">
          Bugungi <span class="text-orange-500 font-bold">streak</span>ni davom ettirishga tayyormisiz?
        </p>
      </div>
      <button class="group flex items-center justify-center h-12 px-6 rounded-xl bg-white border border-slate-200 hover:border-primary-500 transition-all shadow-sm hover:shadow-md">
        <span class="text-slate-900 font-bold mr-2">Mening profilim</span>
        <span class="material-symbols-outlined text-slate-400 group-hover:text-primary-500 transition-colors">account_circle</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Level Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-primary-500/50 transition-colors hover:shadow-md relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span class="material-symbols-outlined text-6xl text-blue-600">military_tech</span>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <span class="material-symbols-outlined text-2xl">military_tech</span>
          </div>
          <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">7-bosqich</span>
        </div>
        <div>
          <p class="text-slate-500 text-sm font-medium mb-1">Joriy daraja</p>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Boshlovchi</h3>
          <div class="w-full bg-slate-100 rounded-full h-2 mb-1">
            <div class="bg-blue-500 h-2 rounded-full" style="width: 70%"></div>
          </div>
          <p class="text-xs text-slate-400">Keyingi: Havaskor (70%)</p>
        </div>
      </div>

      <!-- XP Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-primary-500/50 transition-colors hover:shadow-md relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span class="material-symbols-outlined text-6xl text-primary-500">stars</span>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="size-10 rounded-lg bg-green-50 flex items-center justify-center text-primary-500">
            <span class="material-symbols-outlined text-2xl">stars</span>
          </div>
          <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+120 bugun</span>
        </div>
        <div>
          <p class="text-slate-500 text-sm font-medium mb-1">To'plangan ballar</p>
          <h3 class="text-2xl font-bold text-slate-900">1,450 XP</h3>
          <p class="text-xs text-slate-400 mt-2">Top 15% ichidasiz</p>
        </div>
      </div>

      <!-- Streak Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-primary-500/50 transition-colors hover:shadow-md relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span class="material-symbols-outlined text-6xl text-orange-500">local_fire_department</span>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="size-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
            <span class="material-symbols-outlined text-2xl">local_fire_department</span>
          </div>
          <span class="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Faol</span>
        </div>
        <div>
          <p class="text-slate-500 text-sm font-medium mb-1">Kunlik streak</p>
          <h3 class="text-2xl font-bold text-slate-900">5 kun</h3>
          <p class="text-xs text-slate-400 mt-2">Ertaga +50 XP bonus</p>
        </div>
      </div>

      <!-- Bonus Tests Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-primary-500/50 transition-colors hover:shadow-md relative overflow-hidden">
        <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span class="material-symbols-outlined text-6xl text-purple-500">redeem</span>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="size-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500">
            <span class="material-symbols-outlined text-2xl">redeem</span>
          </div>
          <span class="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full animate-pulse">Yangi</span>
        </div>
        <div>
          <p class="text-slate-500 text-sm font-medium mb-1">Bonus testlar</p>
          <h3 class="text-2xl font-bold text-slate-900">2 ta ochildi</h3>
          <button class="text-xs font-bold text-purple-600 hover:text-purple-700 mt-2 flex items-center">
            Yechishni boshlash <span class="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Learning Modules & Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-8 flex flex-col gap-6">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-slate-900">O'rganish bo'limlari</h2>
          <a class="text-sm font-bold text-primary-500 hover:text-green-600 transition-colors flex items-center gap-1" href="#">
            Barchasini ko'rish
            <span class="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- AI Smart Test Card (Full Width) -->
          <div class="col-span-1 sm:col-span-2 group relative bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl p-6 border border-indigo-500/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
            <div class="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-20"></div>
            <div class="absolute -right-6 -top-6 size-40 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-colors duration-500"></div>
            <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                  <div class="size-10 rounded-lg bg-white/20 flex items-center justify-center text-white backdrop-blur-md shadow-inner border border-white/20">
                    <span class="material-symbols-outlined">psychology</span>
                  </div>
                  <span class="text-xs font-bold text-white bg-white/20 border border-white/10 px-2 py-1 rounded-lg backdrop-blur-md flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">auto_awesome</span>
                    AI Tavsiya etadi
                  </span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Aqlli Test</h3>
                <p class="text-indigo-100 text-sm leading-relaxed max-w-xl">
                  Sizning bilim darajangizga moslashuvchan maxsus algoritm. Qiyin savollar ustida ko'proq ishlang va samaradorlikni 2 barobar oshiring.
                </p>
              </div>
              <button class="shrink-0 h-12 px-6 rounded-xl bg-white text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg shadow-black/10 flex items-center justify-center gap-2 group-hover:scale-105 duration-200">
                <span>Boshlash</span>
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Topic Learning Card -->
          <div class="group relative bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
            <div class="absolute -right-6 -top-6 size-32 bg-green-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="absolute top-6 right-6 text-green-100 group-hover:text-green-200 transition-colors z-0">
              <span class="material-symbols-outlined text-6xl">menu_book</span>
            </div>
            <div class="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div class="size-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center text-green-600 mb-4">
                  <span class="material-symbols-outlined">auto_stories</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">Mavzu bo'yicha</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  70 ta mavzuni bosqichma-bosqich o'rganing va bilimingizni mustahkamlang.
                </p>
                <div class="flex items-center gap-2 mb-2">
                  <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-green-500 rounded-full" style="width: 35%"></div>
                  </div>
                  <span class="text-xs font-bold text-slate-500">35%</span>
                </div>
              </div>
              <button class="w-full h-10 rounded-lg bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                Davom ettirish
              </button>
            </div>
          </div>

          <!-- Exam Mode Card -->
          <div class="group relative bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
            <div class="absolute -right-6 -top-6 size-32 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="absolute top-6 right-6 text-orange-100 group-hover:text-orange-200 transition-colors z-0">
              <span class="material-symbols-outlined text-6xl">timer</span>
            </div>
            <div class="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div class="size-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center text-orange-600 mb-4">
                  <span class="material-symbols-outlined">alarm_on</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">Imtihon rejimi</h3>
                <p class="text-slate-500 text-sm leading-relaxed">
                  20 ta savol, 20 daqiqa. Haqiqiy imtihon muhitida o'zingizni sinab ko'ring.
                </p>
              </div>
              <button class="w-full h-10 rounded-lg bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                Imtihonni boshlash
              </button>
            </div>
          </div>

          <!-- Ticket Tests Card -->
          <div class="group relative bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden ring-1 ring-indigo-50 hover:ring-indigo-200">
            <div class="absolute -right-6 -top-6 size-32 bg-indigo-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors z-0">
              <span class="material-symbols-outlined text-6xl">confirmation_number</span>
            </div>
            <div class="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="size-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center text-indigo-600">
                    <span class="material-symbols-outlined">airplane_ticket</span>
                  </div>
                  <span class="text-xs font-bold text-white bg-indigo-500 px-2 py-1 rounded-full">Mashhur</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">Biletlar Testi</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  Rasmiy biletlar jamlanmasi. Bilet raqamini tanlang va bilimingizni sinab ko'ring.
                </p>
              </div>
              <button class="w-full h-10 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-sm border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors flex items-center justify-center gap-2">
                Bilet tanlash <span class="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Error Review Card (Full Width) -->
          <div class=" group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
            <div class="absolute -right-10 -bottom-10 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
              <span class="material-symbols-outlined text-[150px] text-white">gpp_maybe</span>
            </div>
            <div class="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <div class="size-12 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/20 mb-4">
                  <span class="material-symbols-outlined">assignment_late</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Xatolar ustida ishlash</h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  Sizda hozircha <span class="text-white font-bold bg-red-500/20 px-1.5 py-0.5 rounded text-xs">12 ta</span> xato mavjud. Xatolarni tuzatib, +10 XP oling.
                </p>
              </div>
              <button class="w-full h-10 rounded-lg bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                Xatolarni tuzatish
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        <!-- Weekly Activity -->
        <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="mb-6 flex items-start justify-between">
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Haftalik faollik</h3>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black text-slate-900">85%</span>
                <span class="text-sm text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">o'zlashtirish</span>
              </div>
            </div>
            <button class="text-slate-400 hover:text-slate-600 transition-colors">
              <span class="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div class="grid grid-cols-7 gap-2 h-40 items-end">
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/40 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 40%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Du</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/60 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 65%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Se</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-500 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm shadow-[0_0_15px_rgba(19,236,91,0.4)]" style="height: 85%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-900 uppercase">Ch</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/30 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 30%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Pa</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/50 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 55%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Ju</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/70 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 70%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Sh</span>
            </div>
            <div class="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
              <div class="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div class="w-full bg-primary-400/20 group-hover:bg-primary-500 transition-all duration-300 rounded-t-sm" style="height: 20%;"></div>
              </div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Ya</span>
            </div>
          </div>
        </div>

        <!-- Top Rating -->
        <div class="bg-white rounded-xl p-0 border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 class="text-sm font-bold text-slate-900">Top Reyting</h3>
            <span class="material-symbols-outlined text-slate-400 text-lg">emoji_events</span>
          </div>
          <div class="divide-y divide-slate-100">
            <div class="flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div class="text-sm font-bold text-yellow-500 w-4 group-hover:scale-110 transition-transform">1</div>
              <div class="size-8 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-transparent group-hover:ring-yellow-400 transition-all" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqx2HhJUraQxPhZPcdQA1H2e37goTVU38Ay8LYTFSAWEb_CEB4qZ7-53BoYiNC_XKQc5PPMAW7bvAANzruC_f0vNz6q4dZuRNxT-D7dAMG0S17f86NhMwRJRvLqkgPc42aXzNK3CI4B--cr5hodU-KMMuHxYjE6hC7k2gRzYwo26EFP_y2422GFx7xsT-cPUZuIF-gLMeVaSh0dU8Te2d7yrrcAoEz8PQ-nlnTpwV7_A8_CLdxsM0KSQTfJqcPqrOqz2ojq1IXrzY');"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-slate-900 truncate">Jahongir A.</p>
              </div>
              <div class="text-xs font-bold text-primary-500 bg-primary-50 px-2 py-1 rounded">2400 XP</div>
            </div>
            <div class="flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div class="text-sm font-bold text-slate-400 w-4 group-hover:scale-110 transition-transform">2</div>
              <div class="size-8 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-transparent group-hover:ring-slate-300 transition-all" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr6_ZxM5jxMKSpKJILECuz5_Q2WFeROLMXhDfKu5Pdumtr-AZGd5Hnow6464h3CBtEe0a0v7PS2KhMb-JrQ6YtPggoeeu7fwarlSJgvTxmpCH1WLLYlzqhscpWZoZiu4BHYo84JvIbQcede4IlhU4XhWdbRSDq_gTI-69d7b-9rsyiHRW_hMJi-Day036xwaztf7PpFMiujpDiJDvJPgLRh_z3KW6fgEdg7TJ5mnJZyJYdAmNF7VfQ-8RnUdFvKw2Hb7hqeiufrLI');"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-slate-900 truncate">Malika K.</p>
              </div>
              <div class="text-xs font-bold text-primary-500 bg-primary-50 px-2 py-1 rounded">2150 XP</div>
            </div>
            <div class="flex items-center gap-3 p-4 bg-primary-50/50 border-l-4 border-primary-500">
              <div class="text-sm font-bold text-slate-900 w-4">15</div>
              <div class="size-8 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-primary-500/50" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCT-cGitnuaRtuRBXRhHUKKJ5o6IjWzhv-ddDzByERfOHXJV39EBf3YKXB0VcOgvnqaa1zvK72DdBga6ie82p4V5dMPx7E4qkzozstKaYXSRaJzUTmN1DUiyakyYmvD8tXFyBm7sHJllAr6SxZPsnUM7tbklKCkKqD0AGoJuDHbxAFkGXF3omqB23m-OpsvXJrYdIB67L3rF5oc3bz_7yJElvMBFaD_Y0R1effirpEdvqXBImOlZ8sJwRIMRq3A2lcHBP54pGQiU2s');"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-slate-900 truncate">Siz (Azizbek)</p>
              </div>
              <div class="text-xs font-bold text-slate-900">1450 XP</div>
            </div>
          </div>
          <div class="p-3 bg-white">
            <button class="w-full py-2 text-xs font-bold text-slate-500 hover:text-primary-500 transition-colors border border-dashed border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50/50">
              To'liq reytingni ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

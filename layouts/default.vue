<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
const route = useRoute();

let intervalId: number | null = null;

const isIndexPage = computed(() => route.path === '/');

const updateDateTime = () => {
    const now = new Date();

    // Format Date: MM/DD/YYYY
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        dateElement.textContent = `${month}/${day}/${year}`;
    }

    // Format Time: HH:MM
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
};

// Splash screen logic
const showSplash = ref(false)

onMounted(() => {
    if (route.path === '/') {
        showSplash.value = true
    }
})

const onSplashComplete = () => {
    showSplash.value = false
}

onMounted(() => {
    updateDateTime();
    intervalId = window.setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<template>
    <!-- Splash Screen - Only on first visit -->
    <ClientOnly>
        <SplashScreen v-if="showSplash" @complete="onSplashComplete" />
    </ClientOnly>
    <div class="w-screen h-screen bg-gradient-to-b from-green-400 to-blue-500">
        <!-- Background Enhancement Layers -->
        <div class="absolute inset-0 diagonal-grid pointer-events-none z-0"></div>
        <div class="absolute inset-0 scanlines pointer-events-none z-0"></div>
        <div class="absolute inset-0 noise-texture pointer-events-none z-0"></div>
        <div class="absolute inset-0 gradient-overlay pointer-events-none z-0"></div>

        <!-- Radial Gradient Spots -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full 
            bg-gradient-radial from-pink-400/10 to-transparent blur-3xl
            animate-[pulse-corner_6s_ease-in-out_infinite] pointer-events-none z-0"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full 
            bg-gradient-radial from-blue-300/10 to-transparent blur-3xl
            animate-[pulse-corner_7s_ease-in-out_infinite] pointer-events-none z-0"></div>

        <!-- Floating Geometric Shapes -->
        <div class="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 transform rotate-45 
                    animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-pink-300/10 transform rotate-12 
                    animate-[spin_25s_linear_infinite_reverse] pointer-events-none z-0"></div>
        <div class="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-blue-200/10 transform -rotate-12 
                    animate-[spin_30s_linear_infinite] pointer-events-none z-0"></div>

        <!-- Large Decorative Circles -->
        <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/5 
                    animate-[pulse-corner_4s_ease-in-out_infinite] pointer-events-none z-0"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-pink-300/5 
                    animate-[pulse-corner_5s_ease-in-out_infinite] pointer-events-none z-0"></div>

        <slot />
        <div class="bubble bubble--1"></div>
        <div class="bubble bubble--2"></div>
        <div class="bubble bubble--3"></div>
        <div class="bubble bubble--4"></div>
        <div class="bubble bubble--5"></div>
        <div class="bubble bubble--6"></div>
        <div class="bubble bubble--7"></div>
        <div class="bubble bubble--8"></div>
        <div class="bubble bubble--9"></div>
        <div class="bubble bubble--10"></div>
        <div class="bubble bubble--11"></div>
        <div class="bubble bubble--12"></div>
    </div>
    <!-- Top Left Decorative -->
    <div class="absolute top-0 left-0 w-64 h-64 pointer-events-none z-10">
        <!-- Segitiga Pink -->
        <div class="absolute top-0 left-0 w-0 h-0 
              border-t-[120px] border-t-pink-400 
              border-r-[120px] border-r-transparent
              opacity-30 animate-[pulse-corner_3s_ease-in-out_infinite]"></div>

        <!-- Garis Accent -->
        <div class="absolute top-28 left-0 w-40 h-1 bg-white opacity-50 animate-[slide-line_2s_ease-in-out_infinite]">
        </div>
        <div
            class="absolute top-32 left-0 w-32 h-0.5 bg-pink-300 opacity-40 animate-[slide-line_2s_ease-in-out_infinite]">
        </div>
    </div>
    <!-- Top Right Decorative -->
    <div class="absolute top-0 right-0 w-64 h-64 pointer-events-none z-10">
        <!-- Segitiga Biru -->
        <div class="absolute top-0 right-0 w-0 h-0 
              border-t-[120px] border-t-blue-300 
              border-l-[120px] border-l-transparent
              opacity-30 animate-[pulse-corner_3s_ease-in-out_infinite]"></div>

        <!-- Garis Accent -->
        <div class="absolute top-28 right-0 w-40 h-1 bg-white opacity-50 animate-[slide-line_2s_ease-in-out_infinite]">
        </div>
        <div
            class="absolute top-32 right-0 w-32 h-0.5 bg-blue-200 opacity-40 animate-[slide-line_2s_ease-in-out_infinite]">
        </div>
    </div>
    <!-- Bottom Left Decorative -->
    <div class="absolute bottom-0 left-0 w-64 h-64 pointer-events-none z-10">
        <!-- Trapesium/Frame -->
        <div class="absolute bottom-0 left-0 w-0 h-0 
              border-b-[100px] border-b-pink-400 
              border-r-[140px] border-r-transparent
              opacity-25 animate-[pulse-corner_3s_ease-in-out_infinite]"></div>

        <!-- Garis Diagonal -->
        <div class="absolute bottom-24 left-0 w-48 h-0.5 bg-white opacity-40 
              transform rotate-45 origin-left animate-[slide-line_2s_ease-in-out_infinite]"></div>
    </div>
    <!-- Bottom Right Decorative -->
    <div class="absolute bottom-0 right-0 w-64 h-64 pointer-events-none z-10">
        <!-- Trapesium/Frame -->
        <div class="absolute bottom-0 right-0 w-0 h-0 
              border-b-[100px] border-b-blue-300 
              border-l-[140px] border-l-transparent
              opacity-25 animate-[pulse-corner_3s_ease-in-out_infinite]"></div>

        <!-- Garis Diagonal -->
        <div class="absolute bottom-24 right-0 w-48 h-0.5 bg-white opacity-40 
              transform -rotate-45 origin-right animate-[slide-line_2s_ease-in-out_infinite]"></div>
    </div>

    <!-- Left Side Accent -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-96 pointer-events-none z-10">
        <!-- Vertical Bar Utama -->
        <div class="absolute left-2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-40 
              animate-[slide-vertical_4s_ease-in-out_infinite]"></div>

        <!-- Vertical Bar Kedua (lebih tipis) -->
        <div class="absolute left-5 top-10 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 
              animate-[slide-vertical_3s_ease-in-out_infinite_0.5s]"></div>

        <!-- Diagonal Stripes -->
        <div class="absolute left-0 top-20 w-12 h-0.5 bg-pink-300 opacity-25 transform -rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite]"></div>
        <div class="absolute left-0 top-40 w-12 h-0.5 bg-blue-200 opacity-25 transform -rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite_0.5s]"></div>
        <div class="absolute left-0 top-60 w-12 h-0.5 bg-pink-300 opacity-25 transform -rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite_1s]"></div>
    </div>

    <!-- Right Side Accent -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-96 pointer-events-none z-10">
        <!-- Vertical Bar Utama -->
        <div class="absolute right-2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-40 
              animate-[slide-vertical_4s_ease-in-out_infinite]"></div>

        <!-- Vertical Bar Kedua (lebih tipis) -->
        <div class="absolute right-5 top-10 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 
              animate-[slide-vertical_3s_ease-in-out_infinite_0.5s]"></div>

        <!-- Diagonal Stripes -->
        <div class="absolute right-0 top-20 w-12 h-0.5 bg-blue-200 opacity-25 transform rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite]"></div>
        <div class="absolute right-0 top-40 w-12 h-0.5 bg-pink-300 opacity-25 transform rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite_0.5s]"></div>
        <div class="absolute right-0 top-60 w-12 h-0.5 bg-blue-200 opacity-25 transform rotate-45 
              animate-[pulse-corner_2s_ease-in-out_infinite_1s]"></div>
    </div>

    <!-- Left Side - Pulsing Dots -->
    <div class="absolute left-3 top-16 w-2 h-2 rounded-full bg-pink-400 opacity-50 
            animate-[ping_2s_ease-in-out_infinite]"></div>
    <div class="absolute left-3 top-32 w-2 h-2 rounded-full bg-white opacity-40 
            animate-[ping_2s_ease-in-out_infinite_0.5s]"></div>
    <div class="absolute left-3 top-48 w-2 h-2 rounded-full bg-pink-400 opacity-50 
            animate-[ping_2s_ease-in-out_infinite_1s]"></div>

    <!-- Right Side - Pulsing Dots -->
    <div class="absolute right-3 bottom-16 w-2 h-2 rounded-full bg-blue-300 opacity-50 
            animate-[ping_2s_ease-in-out_infinite]"></div>
    <div class="absolute right-3 bottom-32 w-2 h-2 rounded-full bg-pink-300 opacity-40 
            animate-[ping_2s_ease-in-out_infinite_0.5s]"></div>
    <div class="absolute right-3 bottom-48 w-2 h-2 rounded-full bg-blue-300 opacity-50 
            animate-[ping_2s_ease-in-out_infinite_1s]"></div>

    <!-- Top Header Section -->
    <div :class="[
        'absolute top-0 left-0 right-0 h-20 pointer-events-none z-10',
        'backdrop-blur-sm bg-gradient-to-b from-black/10 to-transparent',
        isIndexPage ? 'block' : 'hidden md:block'
    ]">
        <div class="flex justify-between items-center h-full px-8 md:px-[200px]">

            <!-- Left: Portfolio Name/Logo -->
            <div class="flex items-center gap-3 pointer-events-auto">
                <div class="flex flex-col">
                    <h2 class="text-white font-bold text-xl md:text-2xl tracking-wider drop-shadow-lg">
                        ADIPATI
                    </h2>
                    <p class="text-blue-100 text-xs md:text-sm opacity-80 typing-effect">
                        Full-Stack Developer
                    </p>
                </div>
            </div>

            <!-- Right: Date/Time Display -->
            <div class="flex flex-col items-end text-white pointer-events-auto">
                <p class="text-sm md:text-base font-bold drop-shadow-lg" id="current-date">
                    11/27/2025
                </p>
                <p class="text-xs md:text-sm opacity-80" id="current-time">
                    17:46:00
                </p>
            </div>

        </div>

        <!-- Decorative Line Below Header -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-11/12 h-0.5 
              bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </div>

    <!-- Bottom Footer Section -->
    <div :class="[
        'absolute bottom-0 left-0 right-0 h-16 md:h-20 pointer-events-none z-10',
        'backdrop-blur-sm bg-gradient-to-t from-black/10 to-transparent',
        isIndexPage ? 'block' : 'hidden md:block'
    ]">
        <!-- Decorative Shapes -->
        <div class="absolute bottom-4 left-8 w-6 h-6 bg-pink-400 opacity-20 transform rotate-45
                animate-[pulse-corner_2s_ease-in-out_infinite]"></div>
        <div class="absolute bottom-4 right-8 w-6 h-6 bg-blue-300 opacity-20 transform rotate-45
                animate-[pulse-corner_2s_ease-in-out_infinite_0.5s]"></div>
        <!-- Decorative Line Above Footer -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 h-0.5 
          bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

        <div class="flex justify-between items-center h-full px-8 md:px-[200px]">

            <!-- Left: Navigation Hints -->
            <div class="text-[10px] md:text-xs lg:text-sm opacity-80 text-white pointer-events-auto">
                © 2025 <b class="font-bold">M. Adipati Rezkya</b>. All rights reserved.
                <br class="hidden md:block" />
                <span class="text-[8px] md:text-[10px] opacity-60">
                    Design inspired by <i>Persona 3 Reload</i> Game UI
                </span>
            </div>

            <!-- Right: Social Media Icons -->
            <div class="flex items-center gap-3 md:gap-4 pointer-events-auto">
                <!-- GitHub -->
                <NuxtLink to="https://github.com/dipaadipati" target="_blank" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm
                       flex items-center justify-center text-white
                       hover:bg-pink-400 hover:scale-110 transition-all duration-300
                       border border-white/30">
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </NuxtLink>

                <!-- LinkedIn -->
                <NuxtLink to="https://www.linkedin.com/in/adipati-rezkya/" target="_blank" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm
                       flex items-center justify-center text-white
                       hover:bg-blue-400 hover:scale-110 transition-all duration-300
                       border border-white/30">
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </NuxtLink>

                <!-- Email/Contact -->
                <NuxtLink to="mailto:adipatirzky@gmail.com" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm
                       flex items-center justify-center text-white
                       hover:bg-pink-400 hover:scale-110 transition-all duration-300
                       border border-white/30">
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </NuxtLink>
            </div>

        </div>
    </div>
</template>
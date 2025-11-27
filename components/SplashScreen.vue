<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])
const isVisible = ref(true)

onMounted(() => {
    // Animation sequence
    setTimeout(() => {
        isVisible.value = false
        setTimeout(() => {
            emit('complete')
        }, 500) // Wait for fade out
    }, 3000) // Total splash duration
})
</script>

<template>
    <Transition name="splash-fade">
        <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center 
                    bg-gradient-to-br from-blue-600 via-pink-500 to-green-400 overflow-hidden">

            <!-- Animated Background Elements -->
            <div class="absolute inset-0">
                <!-- Diagonal Lines -->
                <div class="absolute top-0 left-0 w-full h-full opacity-20">
                    <div v-for="i in 10" :key="i" class="absolute h-1 bg-white transform -rotate-45" :style="{
                        width: '200%',
                        top: `${i * 10}%`,
                        left: '-50%',
                        animationDelay: `${i * 0.1}s`
                    }" style="animation: slide-diagonal 2s ease-out forwards;">
                    </div>
                </div>

                <!-- Floating Shapes -->
                <div class="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white/30 
                            transform rotate-45 animate-spin-slow"></div>
                <div class="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-pink-300/30 
                            transform -rotate-12 animate-pulse"></div>
            </div>

            <!-- Main Content -->
            <div class="relative z-10 text-center">
                <!-- Logo/Name with glitch effect -->
                <div class="mb-8 animate-glitch-in">
                    <h1 class="text-6xl md:text-8xl font-bold text-white mb-4 
                               drop-shadow-[0_0_30px_rgba(244,114,182,0.8)]
                               animate-pulse-glow">
                        M. ADIPATI REZKYA
                    </h1>
                    <div class="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent 
                                animate-expand"></div>
                </div>

                <!-- Subtitle -->
                <p class="text-xl md:text-2xl text-white/90 font-light tracking-wider animate-fade-in-up">
                    Full-Stack Developer
                </p>

                <!-- Loading indicator -->
                <div class="mt-12 flex justify-center gap-2 animate-fade-in-up" style="animation-delay: 0.5s;">
                    <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                    <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                    <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
            </div>

            <!-- Persona 3 Style Corner Accent -->
            <div class="absolute top-0 right-0 w-64 h-64 pointer-events-none">
                <div class="absolute top-0 right-0 w-0 h-0 
                            border-t-[150px] border-t-white/20 
                            border-l-[150px] border-l-transparent
                            animate-pulse-corner"></div>
            </div>

            <div class="absolute bottom-0 left-0 w-64 h-64 pointer-events-none">
                <div class="absolute bottom-0 left-0 w-0 h-0 
                            border-b-[150px] border-b-white/20 
                            border-r-[150px] border-r-transparent
                            animate-pulse-corner"></div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* Splash fade transition */
.splash-fade-enter-active,
.splash-fade-leave-active {
    transition: opacity 0.5s ease;
}

.splash-fade-enter-from,
.splash-fade-leave-to {
    opacity: 0;
}

/* Animations */
@keyframes slide-diagonal {
    from {
        transform: translateX(-100%) translateY(-100%) rotate(-45deg);
        opacity: 0;
    }

    to {
        transform: translateX(0) translateY(0) rotate(-45deg);
        opacity: 1;
    }
}

@keyframes glitch-in {

    0%,
    100% {
        transform: translate(0);
        opacity: 1;
    }

    20% {
        transform: translate(-5px, 5px);
        opacity: 0.8;
    }

    40% {
        transform: translate(5px, -5px);
        opacity: 0.9;
    }

    60% {
        transform: translate(-5px, -5px);
        opacity: 0.8;
    }

    80% {
        transform: translate(5px, 5px);
        opacity: 0.9;
    }
}

@keyframes pulse-glow {

    0%,
    100% {
        text-shadow: 0 0 30px rgba(244, 114, 182, 0.8);
    }

    50% {
        text-shadow: 0 0 50px rgba(244, 114, 182, 1), 0 0 80px rgba(147, 197, 253, 0.6);
    }
}

@keyframes expand {
    from {
        width: 0;
    }

    to {
        width: 16rem;
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-glitch-in {
    animation: glitch-in 0.8s ease-out;
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

.animate-expand {
    animation: expand 1s ease-out forwards;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}

.animate-spin-slow {
    animation: spin 20s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
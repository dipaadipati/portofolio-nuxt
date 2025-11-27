<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap'
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})

const checkMobile = () => {
    const wasMobile = window.innerWidth <= 1024
    updateAnimations()
}

const updateAnimations = () => {
    gsap.to('.skills-content', {
        left: '50%',
        duration: 0.3
    })
}

let resizeTimeout: number | null = null

const handleResize = () => {
    if (resizeTimeout) clearTimeout(resizeTimeout)
    resizeTimeout = window.setTimeout(() => {
        checkMobile()
    }, 100)
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (resizeTimeout) clearTimeout(resizeTimeout)
})
</script>

<template>
    <div class="p-10 h-full z-10">
        <div class="absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[55deg]">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1300px] bg-pink-400/50">
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 left-0 transform -translate-x-1/3 -translate-y-1/2 rotate-[90deg]">
            <div class="relative">
                <h1 class="text-[28vh] font-bold text-gray-300 cursor-default select-none">SKILLS</h1>
            </div>
        </div>
        <div class="absolute top-1/2 left-1/2 -transform translate-x-1/2 -translate-y-1/2 z-16"
            v-gsap.to="{ opacity: '60%', duration: 1 }">
            <div class="relative">
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-gradient-to-br from-blue-900/60 to-pink-900/60">
                </div>
            </div>
        </div>
        <div class="flex items-center p-3 h-30 z-20">
            <NuxtLink to="/" class="relative z-20" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-6xl text-pink-400 -left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-6xl text-white" />
            </NuxtLink>
        </div>
        <div class="opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[75deg] z-10"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">
            <div class="relative">
                <div
                    class="absolute -left-12 top-9 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[180vw] md:w-[600px] h-[180vw] md:h-[600px] bg-blue-300 ">
                </div>
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[180vw] md:w-[600px] h-[180vw] md:h-[600px] bg-white ">
                </div>
            </div>
        </div>
        <div class="opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 
            transform -translate-x-1/2 -translate-y-1/2 
            flex flex-col items-center justify-center z-20 text-gray-700"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">

            <h1 class="text-2xl md:text-5xl font-bold mb-6 md:mb-10">What Can I Do?</h1>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-[90vw] md:w-[600px] px-4 md:px-0">

                <!-- Frontend -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-pink-200 
                    hover:border-pink-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-pink-500 mb-2">Frontend</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        HTML, CSS, JavaScript, TypeScript, Vue.js, React, Nuxt.js, Next.js, Svelte
                    </p>
                </div>

                <!-- Backend -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-200 
                    hover:border-blue-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-blue-500 mb-2">Backend</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        Node.js, Express, PHP, Laravel, CodeIgniter, Golang
                    </p>
                </div>

                <!-- Database -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-pink-200 
                    hover:border-pink-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-pink-500 mb-2">Database</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        MySQL, PostgreSQL, NoSQL
                    </p>
                </div>

                <!-- API -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-200 
                    hover:border-blue-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-blue-500 mb-2">API Development</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        RESTful APIs, Third-party Integration
                    </p>
                </div>

                <!-- Cloud -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-pink-200 
                    hover:border-pink-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-pink-500 mb-2">Cloud & Deploy</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        AWS, Azure, Vercel
                    </p>
                </div>

                <!-- Tools -->
                <div class="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-200 
                    hover:border-blue-400 hover:shadow-lg transition-all">
                    <h3 class="text-xs md:text-sm font-bold text-blue-500 mb-2">Tools</h3>
                    <p class="text-[8px] md:text-xs text-gray-600">
                        Git, Docker, CI/CD
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.picture-shadow {
    filter: invert() drop-shadow(0 0 10px rgba(244, 114, 182, 1));
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: translateX(-5px) translateY(0px);
    }

    25% {
        transform: translateX(0px) translateY(5px);
    }

    50% {
        transform: translateX(5px) translateY(0px);
    }

    75% {
        transform: translateX(0px) translateY(-5px);
    }

    100% {
        transform: translateX(-5px) translateY(0px);
    }
}
</style>
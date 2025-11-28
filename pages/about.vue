<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap'
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})

const isImageHidden = ref(false)

const checkMobile = () => {
    const wasMobile = isImageHidden.value
    isImageHidden.value = window.innerWidth <= 1024

    // Jika berubah dari mobile ke desktop atau sebaliknya
    if (wasMobile !== isImageHidden.value) {
        updateAnimations()
    }
}

const updateAnimations = () => {
    const contentLeft = isImageHidden.value ? '50%' : '33.33%'

    // Update animasi tanpa reload
    gsap.to('.about-content', {
        left: contentLeft,
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
        <div class="absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg]">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-blue-400 ">
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 left-0 transform -translate-x-1/3 -translate-y-1/2 rotate-[90deg]">
            <div class="relative">
                <h1 class="text-[28vh] font-bold text-gray-300 cursor-default select-none">ABOUT</h1>
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
        <div class="flex items-center p-3 h-30 z-[30]">
            <NuxtLink to="/" class="relative z-[30]" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-6xl text-pink-400 -left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-6xl text-white" />
            </NuxtLink>
        </div>
        <div class="about-content opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[75deg] z-20"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">
            <div class="relative">
                <div
                    class="absolute -left-12 top-9 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[600px] h-[100vw] md:h-[600px] bg-pink-300">
                </div>
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[600px] h-[100vw] md:h-[600px] bg-white ">
                </div>
            </div>
        </div>
        <div class="about-content opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2 
     flex flex-col items-center justify-center z-20 text-gray-700"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">

            <h1 class="text-2xl md:text-5xl font-bold mb-6 md:mb-10">About Me</h1>

            <div class="text-[10px] md:text-lg text-start *:text-justify w-screen px-10 md:p-0 md:w-[500px] space-y-4">
                <p>
                    Hello! My name is <b>M. Adipati Rezkya</b>, but you can call me <b>Adipati</b>.
                    I am a passionate web developer with a love for creating dynamic and responsive web applications.
                </p>
                <p>
                    I have developed over 50 PHP projects tailored to various customer needs. Additionally,
                    I have experience in a wide range of web technologies and enjoy learning new tools and
                    frameworks to enhance my skills.
                </p>
                <p>
                    In my free time, I like to explore new tech stacks and stay updated with the latest
                    industry trends. I believe in continuous learning and strive to improve my skills with
                    each project I undertake.
                </p>
            </div>
        </div>
        <div class="opacity-0 hidden xl:block absolute top-1/2 -right-1/4 transform translate-x-1/2 -translate-y-1/2 z-10 w-[300px]"
            v-gsap.to="{ opacity: 100, right: '25%', duration: 0.5 }">
            <div class="relative z-20">
                <NuxtImg src="../../me.png" class="absolute top-0 z-20" draggable="false" />
                <NuxtImg src="../../me.png" class="z-18 picture-shadow" draggable="false" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})
</script>

<template>
    <div class="p-10 h-full z-10">
        <div class="absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg]">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-blue-800 ">
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
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-gray-800">
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
            v-gsap.to="{ opacity: 100, left: $device.isMobile ? '50%' : '33.33%', duration: 0.5 }">
            <div class="relative">
                <div
                    class="absolute -left-12 top-9 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[600px] h-[100vw] md:h-[600px] bg-orange-200 ">
                </div>
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[600px] h-[100vw] md:h-[600px] bg-white ">
                </div>
            </div>
        </div>
        <div class="opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 text-gray-700"
            v-gsap.to="{ opacity: 100, left: $device.isMobile ? '50%' : '33.33%', duration: 0.5 }">
            <h1 class="text-2xl md:text-5xl font-bold mb-10">About Me</h1>
            <p class="text-sm md:text-lg text-center w-screen p-4 md:p-0 md:w-[500px]">
                Hello! My name is <b>M. Adipati Rezkya</b>, but you can call me <b>Adipati</b>. I am a passionate web
                developer
                with a
                love for
                creating dynamic and responsive web
                applications.
                I have developed over 50 PHP projects tailored to various customer needs. Additionally, I have
                experience in a wide range of web technologies and enjoy learning new tools and frameworks to enhance my
                skills.
                In my free time, I like to explore new tech stacks and stay updated with the latest industry trends. I
                believe in continuous learning and strive to improve my skills with each project I undertake.
            </p>
        </div>
        <div class="opacity-0 hidden xl:block absolute top-1/2 -right-1/4 transform translate-x-1/2 -translate-y-1/2 z-10 w-[300px]"
            v-gsap.to="{ opacity: 100, right: '15%', duration: 0.5 }">
            <div class="relative z-20">
                <NuxtImg src="../../me.png" class="absolute top-0 z-20" draggable="false" />
                <NuxtImg src="../../me.png" class="z-18 picture-shadow" draggable="false" />
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
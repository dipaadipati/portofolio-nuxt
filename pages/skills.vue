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
        <div class="absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[55deg]">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1300px] bg-pink-800 ">
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
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">
            <div class="relative">
                <div
                    class="absolute -left-12 top-9 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[180vw] md:w-[600px] h-[180vw] md:h-[600px] bg-orange-200 ">
                </div>
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[180vw] md:w-[600px] h-[180vw] md:h-[600px] bg-white ">
                </div>
            </div>
        </div>
        <div class="opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 text-gray-700"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">
            <h1 class="text-2xl md:text-5xl font-bold mb-10">What Can I Do?</h1>
            <p class="text-[10px] md:text-[12px] w-screen p-4 md:p-0 md:w-[500px]">
                I specialize in creating dynamic and responsive web applications using modern technologies. My skills
                include: <br>

                - <b>HTML & CSS</b>: Crafting semantic and accessible web pages with a focus on responsive design. <br>
                - <b>JavaScript & TypeScript</b>: Building interactive and scalable applications with a strong
                understanding of ES6+ features. <br>
                - <b>Vue.js & Nuxt.js</b>: Developing single-page applications and server-side rendered applications
                with
                Vue.js and Nuxt.js. <br>
                - <b>React & Next.js</b>: Creating performant and SEO-friendly web applications using React and Next.js.
                <br>
                - <b>Node.js & Svelte</b>: Building fast and reactive web applications using Node.js and Svelte. <br>
                - <b>Node.js & Express</b>: Building backend services and RESTful APIs with Node.js and Express. <br>
                - <b>PHP & Laravel/CodeIgniter</b>: Developing robust and scalable backend systems using PHP frameworks
                like Laravel and CodeIgniter. <br>
                - <b>Golang</b>: Creating high-performance backend services and APIs using Go. <br>
                - <b>API Development</b>: Creating RESTful APIs and integrating third-party services. <br>
                - <b>Database Management</b>: Working with SQL and NoSQL databases like MySQL, and PostgreSQL. <br>
                - <b>Cloud Management</b>: Managing cloud infrastructure and services on platforms like AWS and Azure.
                <br>
                - <b>Deployment</b>: Deploying applications on cloud platforms like Vercel. <br>
            </p>
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
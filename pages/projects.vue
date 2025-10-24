<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})

const projects = [
    {
        icon: 'ganesha.png',
        name: "Ganesha Fitness",
        description: `A website for a fitness center with AI-powered personal trainer feature,<br>
    • Developed with PHP & MySQL (Laravel framework as backend)<br>
    • Used Next.js and Tailwind CSS for frontend.<br>
    • Used OpenAI API for AI personal trainer feature.`,
        projectLink: 'https://ganeshafitness.id/'
    },
    {
        name: "Twisted Music",
        description: `A music player design referenced by Youtube Music website,<br>
    • Developed with Node JS, Vite, and React.js.<br>
    • Used Tailwind CSS for styling the whole app.<br>
    • Used FontAwesome for some icons.<br>
    • Some features are still under development.`,
        projectLink: 'https://twisted-music.vercel.app/'
    },
    {
        name: "Instabram",
        description: `A web design only for learning Tailwind CSS referenced by Instagram app,<br>
    • Developed with Node JS, Next.js, and React.js.<br>
    • Used Tailwind CSS for styling the whole app.<br>
    • Used FontAwesome for some icons.<br>
    • Some features are still under development.`,
        projectLink: 'https://instabram.vercel.app/'
    },
    {
        name: "Svelte CRUD",
        description: `A  simple CRUD for learning Svelte framework,<br>
    • Developed with Node JS, Svelte, and Drizzle ORM.<br>
    • Used Tailwind CSS for styling the whole app.`,
        projectLink: 'https://crud-svelte-ochre.vercel.app/'
    },
    {
        name: "Apotek Store",
        description: `A website for pharmacy sales and transactions,<br>
    • Developed with PHP & MySQL (Laravel framework)<br>
    • Used Bootstrap and FontAwesome Libraries.<br>
    • Used API as CRUD engine.`
    },
    {
        name: "Peduli Diri",
        description: `A website to consult victims of bullying with a psychologist via live chat,<br>
    • Developed with PHP & MySQL (Laravel framework)<br>
    • Used Bootstrap and FontAwesome Libraries.<br>
    • Used API for live chat engine.`
    },
];

const itemActive = ref(-1);
const permItemActive = ref(0);

// const activeIndex = computed({
//     get() {
//         return itemActive.value !== -1 ? itemActive.value : permItemActive.value;
//     },
//     set(newValue) {
//         itemActive.value = newValue;
//         permItemActive.value = newValue;
//         return newValue;
//     }
// });
const activeIndex = computed(() => {
    return itemActive.value !== -1 ? itemActive.value : permItemActive.value;
});

const activeDetail = ref(null);
const showSvg = computed(() => {
    return itemActive.value !== -1;
});

const items = ref();
const details = ref();

</script>

<template>
    <div class="md:p-10 h-full z-10">
        <div class="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg]">
            <div class="relative">
                <div
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-gray-800 rounded-xl">
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 rotate-[270deg] z-15">
            <div class="relative">
                <h1 class="text-[20vh] font-bold text-gray-300 cursor-default select-none z-15">PROJECTS</h1>
            </div>
        </div>
        <div class="absolute top-1/2 left-1/2 -transform translate-x-1/2 -translate-y-1/2 z-16 opacity-0"
            v-gsap.to="{ opacity: '40%', duration: 1 }">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-gray-800">
                </div>
            </div>
        </div>
        <div class="relative flex justify-end p-3 h-full w-full">
            <div class="relative w-full h-full" ref="details" v-gsap.from="{ opacity: '0', duration: 0.5 }">
                <div v-for="(detail, index) in projects" :key="`detail-${index}`"
                    :class="`absolute flex flex-col ${activeIndex === index ? 'z-[22]' : 'z-0'} pr-20 w-full h-full`"
                    :ref="`detail-${index}`">
                    <div class="hidden md:block h-full w-full">
                        <div class="p-3 h-full relative text-black flex flex-col xl:flex-row justify-center items-center bg-white transition-opacity duration-[2ms] rounded-xl z-20"
                            v-show="activeIndex === index"
                            :class="activeIndex === index ? 'bg-opacity-50' : 'bg-opacity-0'">
                            <div class="relative" v-show="detail.icon">
                                <NuxtImg :src="`/icons/${detail.icon}`"
                                    class="absolute rounded-xl top-0 z-20 lg:w-[150px] lg:h-[150px] object-cover"
                                    draggable="false" />
                                <NuxtImg :src="`/icons/${detail.icon}`"
                                    class="z-18 rounded-xl picture-shadow-dark lg:w-[150px] lg:h-[150px] object-cover"
                                    draggable="false" />
                            </div>
                            <p class="text-[10px] md:text-[13px] lg:text-2xl p-10" v-html="detail.description"></p>
                            <div class="absolute right-0 bottom-0 m-5 mb-10" v-show="detail.projectLink">
                                <a :href="detail.projectLink" target="_blank"
                                    class="text-md lg:text-4xl border-2 border-black rounded-xl p-4 hover:bg-gray-600">Go
                                    to
                                    Website</a>
                            </div>
                        </div>
                    </div>
                    <div class="block md:hidden w-[90dvw] h-full absolute" v-show="permItemActive !== -1">
                        <div class="h-full w-full relative text-black flex flex-col xl:flex-row justify-center items-center bg-white
                        transition-opacity duration-[2ms] rounded-xl z-20" v-show="activeIndex === index"
                            :class="activeIndex === index ? 'bg-opacity-90' : 'bg-opacity-0'">
                            <div class="absolute top-0 left-[50px]">
                                <button @click="itemActive = -1; permItemActive = -1;" class="relative z-20"
                                    draggable="false">
                                    <font-awesome :icon="faTimes"
                                        class="absolute text-6xl text-pink-400 -right-1 -top-0.5" />
                                    <font-awesome :icon="faTimes" class="absolute text-6xl text-black right-0" />
                                </button>
                            </div>
                            <div class="relative" v-show="detail.icon">
                                <NuxtImg :src="`/icons/${detail.icon}`"
                                    class="absolute rounded-xl top-0 z-20 lg:w-[300px] lg:h-[300px] object-cover"
                                    draggable="false" />
                                <NuxtImg :src="`/icons/${detail.icon}`"
                                    class="z-18 rounded-xl picture-shadow-dark lg:w-[300px] lg:h-[300px] object-cover"
                                    draggable="false" />
                            </div>
                            <p class="text-md p-10" v-html="detail.description"></p>
                            <div class="absolute right-0 bottom-0 m-5 mb-10" v-show="detail.projectLink">
                                <a :href="detail.projectLink" target="_blank"
                                    class="text-md border-2 border-black rounded-xl p-4 hover:bg-gray-600">Go to
                                    Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 mr-20 w-[500px] h-full" :class="activeIndex !== -1 ? 'z-[21]' : 'z-[60]'"
                ref="items">
                <div v-for="(project, idx) in projects" :key="`item-${idx}`" :ref="`item-${idx}`" class="h-1/6 relative text-black flex justify-center items-center bg-opacity-50
                    rounded-xl" :class="{
                        'bg-slate-500': itemActive === idx && permItemActive !== idx,
                        'bg-white': itemActive !== idx && permItemActive !== idx,
                        'bg-red-300': permItemActive === idx,
                    }" @click="permItemActive === itemActive ? permItemActive = -1 : permItemActive = idx"
                    @mouseover="itemActive = idx" @mouseleave="itemActive = -1">
                    <span class="z-22 text-3xl p-10 cursor-default">{{ project.name }}</span>
                </div>
            </div>
            <NuxtLink to="/" class="relative z-20" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-6xl text-pink-400 -right-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-6xl text-white right-0" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.svg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    /* Ensure SVG doesn't interfere with mouse events */
}
</style>
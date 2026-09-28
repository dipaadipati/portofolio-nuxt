<script setup lang="ts">
import { faTimes, faDownload } from '@fortawesome/free-solid-svg-icons'
import outSound from '~/assets/sounds/out.wav'
import { cv } from '~/data/cv'

definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})

const backSound = () => {
    const audio = new Audio(outSound);
    audio.play();
}

const kicker = 'text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500 mb-2'
</script>

<template>
    <div class="p-10 h-full z-10 flex flex-col">
        <!-- Rotated page heading -->
        <div
            class="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 rotate-[270deg] z-0 pointer-events-none">
            <h1 class="text-[20vh] font-bold text-gray-300 cursor-default select-none">MY CV</h1>
        </div>

        <!-- Dark gradient wash -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div
                class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-gradient-to-br from-blue-900/60 to-pink-900/60">
            </div>
        </div>

        <!-- Close -->
        <div class="flex items-center p-3 z-30 relative shrink-0">
            <NuxtLink :onClick="backSound" to="/" class="relative z-30 block w-9 h-9 xl:w-16 xl:h-16"
                draggable="false" aria-label="Back to home">
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-pink-400 left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-white" />
            </NuxtLink>
        </div>

        <!-- CV card -->
        <!-- The wrapper's lower edge reaches into the footer band, and at z-20 it wins the hit
             test there, so the social icons' top half was dead to clicks. Only the card itself
             needs to be clickable; let everything else in the wrapper fall through. -->
        <div class="flex-1 min-h-0 flex justify-center relative z-20 pb-10 pointer-events-none">
            <div class="relative h-full w-[92vw] max-w-[980px] opacity-0 pointer-events-auto"
                v-gsap.to="{ opacity: 100, duration: 0.5 }">
                <!-- Offset accent card -->
                <div class="absolute -left-3 top-3 w-full h-full rotate-[-1deg] bg-pink-300"></div>

                <!-- Scrollable CV body -->
                <div class="relative h-full overflow-y-auto bg-white text-gray-700 p-5 md:p-8">

                    <!-- Header -->
                    <header
                        class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b-2 border-pink-100 pb-4">
                        <div class="min-w-0">
                            <h1 class="text-2xl md:text-4xl font-bold text-gray-800">{{ cv.name }}</h1>
                            <p class="text-pink-500 text-[11px] md:text-sm mt-1">{{ cv.role }}</p>
                            <p class="text-[10px] md:text-xs leading-relaxed mt-3 max-w-[58ch] text-gray-600">
                                {{ cv.summary }}
                            </p>
                        </div>

                        <div class="md:text-right shrink-0">
                            <p
                                class="inline-block bg-pink-400 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                                {{ cv.availability }}
                            </p>
                            <ul class="mt-2 space-y-0.5 text-[10px] md:text-xs">
                                <li v-for="c in cv.contacts" :key="c.href">
                                    <a :href="c.href" target="_blank" rel="noopener"
                                        class="hover:text-pink-500 transition-colors">
                                        {{ c.label }}
                                    </a>
                                </li>
                            </ul>
                            <p class="text-[9px] md:text-[11px] text-gray-500 mt-1">{{ cv.location }}</p>
                            <a href="/cv.pdf" download
                                class="mt-3 inline-flex items-center gap-2 bg-blue-500 hover:bg-pink-500 text-white text-[10px] md:text-xs font-bold px-3 py-2 transition-colors">
                                <font-awesome :icon="faDownload" />
                                Download PDF
                            </a>
                        </div>
                    </header>

                    <div class="grid md:grid-cols-[210px_1fr] gap-6 mt-5">
                        <!-- Sidebar -->
                        <aside class="space-y-5">
                            <div>
                                <p :class="kicker">Tech Stack</p>
                                <div v-for="g in cv.stack" :key="g.label" class="mb-3 last:mb-0">
                                    <p
                                        class="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                                        {{ g.label }}
                                    </p>
                                    <div class="flex flex-wrap gap-1">
                                        <span v-for="t in g.items" :key="t"
                                            class="text-[9px] md:text-[10px] px-1.5 py-0.5 bg-white border border-pink-200 text-gray-600">
                                            {{ t }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p :class="kicker">Education</p>
                                <b class="block text-[11px] md:text-xs">{{ cv.education.school }}</b>
                                <p class="text-[10px] md:text-[11px] text-gray-600">{{ cv.education.degree }}</p>
                                <p class="text-[9px] md:text-[10px] text-gray-500 mt-1">{{ cv.education.meta }}</p>
                            </div>

                            <div>
                                <p :class="kicker">Award</p>
                                <div class="border-l-2 border-pink-400 pl-2.5">
                                    <b class="block text-[10px] md:text-[11px] leading-snug">{{ cv.award.title }}</b>
                                    <p class="text-[9px] md:text-[10px] text-gray-500 mt-1">{{ cv.award.meta }}</p>
                                    <p class="text-[9px] md:text-[10px] text-gray-600 mt-1 leading-relaxed">
                                        {{ cv.award.desc }}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p :class="kicker">Beyond Code</p>
                                <p class="text-[10px] md:text-[11px] text-gray-600 leading-relaxed">{{ cv.beyondCode }}
                                </p>
                            </div>
                        </aside>

                        <!-- Main column -->
                        <div>
                            <p :class="kicker">Experience</p>
                            <div v-for="e in cv.experience" :key="e.company" class="mb-5 border-l-2 border-pink-200 pl-3">
                                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                                    <div>
                                        <p class="text-xs md:text-sm font-bold text-gray-800">
                                            {{ e.role }}
                                            <span class="font-normal text-gray-500">/ {{ e.company }}</span>
                                        </p>
                                        <p class="text-[9px] md:text-[10px] text-gray-500 mt-0.5">{{ e.lead }}</p>
                                    </div>
                                    <span
                                        class="text-[8px] md:text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 shrink-0 whitespace-nowrap self-start">
                                        {{ e.period }}
                                    </span>
                                </div>
                                <ul class="mt-2 space-y-1">
                                    <li v-for="b in e.bullets" :key="b"
                                        class="text-[10px] md:text-[11px] leading-relaxed text-gray-600 pl-3 relative">
                                        <span class="absolute left-0 top-[0.45em] w-1 h-1 bg-pink-400 rounded-full"></span>
                                        {{ b }}
                                    </li>
                                </ul>
                            </div>

                            <p :class="kicker">Selected Projects</p>
                            <div class="grid md:grid-cols-2 gap-2">
                                <div v-for="p in cv.projects" :key="p.title"
                                    class="border border-pink-100 hover:border-pink-300 transition-colors p-2.5 flex flex-col">
                                    <h3 class="text-[11px] md:text-xs font-bold text-gray-800">{{ p.title }}</h3>
                                    <p class="text-[9px] md:text-[10px] text-gray-600 leading-relaxed mt-1 flex-1">
                                        {{ p.desc }}
                                    </p>
                                    <div class="flex flex-wrap gap-1 mt-2">
                                        <span v-for="t in p.stack" :key="t"
                                            class="text-[8px] md:text-[9px] px-1 py-0.5 bg-gray-50 border border-gray-200 text-gray-500">
                                            {{ t }}
                                        </span>
                                    </div>
                                    <div class="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-pink-100">
                                        <span
                                            class="text-[8px] md:text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                                            {{ p.tag }}
                                        </span>
                                        <a v-if="p.link" :href="p.link.href" target="_blank" rel="noopener"
                                            class="text-[9px] md:text-[10px] font-bold text-pink-500 hover:text-blue-500 transition-colors truncate">
                                            {{ p.link.label }}
                                        </a>
                                        <span v-else class="text-[9px] md:text-[10px] text-gray-400">{{ p.note }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 border-l-4 border-blue-400 bg-blue-50/60 p-3">
                                <b class="block text-[10px] md:text-xs text-gray-800">{{ cv.callout.title }}</b>
                                <span class="text-[9px] md:text-[11px] text-gray-600">
                                    {{ cv.callout.text }}
                                    <a :href="cv.callout.link.href" target="_blank" rel="noopener"
                                        class="font-bold text-pink-500 hover:text-blue-500 transition-colors">
                                        {{ cv.callout.link.label }}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import menuSound from '~/assets/sounds/navigation.wav'
import outSound from '~/assets/sounds/out.wav'
import { projects, type Project } from '~/data/projects'

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

// Hover tick on the cards, same as components/MenuButton.vue. Delete this block if it gets noisy.
const hovered = ref(-1)
watch(hovered, (value) => {
    if (value !== -1) {
        const audio = new Audio(menuSound);
        audio.play();
    }
})

const status = (project: Project) => project.link
    ? (project.link.href.includes('github.com') ? 'Repo' : 'Live')
    : 'Private'

const statusClass = (project: Project) => !project.link
    ? 'bg-gray-200 text-gray-500'
    : (project.link.href.includes('github.com') ? 'bg-blue-500 text-white' : 'bg-pink-400 text-white')

// Same dead zone as the CV card: the grid stops 40px short of the bottom (the pb-10 that
// keeps it clear of the footer) and the footer band sits under that, so a wheel down there
// lands on chrome with nothing to scroll. Listen on the window so the whole viewport scrolls
// the grid; anything already inside a scroll container is left to the browser.
const grid = ref<HTMLElement | null>(null)
const onWheel = (e: WheelEvent) => {
    const el = grid.value
    if (!el || (e.target as Element | null)?.closest?.('.overflow-y-auto')) return
    el.scrollTop += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY
}

onMounted(() => window.addEventListener('wheel', onWheel))
onUnmounted(() => window.removeEventListener('wheel', onWheel))
</script>

<template>
    <div class="p-10 h-full z-10 flex flex-col">
        <!-- Tilted slab, rotated page heading and the dark wash. All three are decoration:
             pointer-events-none keeps them out of the way of the cards and the footer icons. -->
        <div
            class="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg] z-0 pointer-events-none">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-gray-800 rounded-xl">
                </div>
            </div>
        </div>
        <div
            class="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 rotate-[270deg] z-0 pointer-events-none">
            <h1 class="text-[20vh] font-bold text-gray-300 cursor-default select-none">PROJECTS</h1>
        </div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 pointer-events-none"
            v-gsap.to="{ opacity: '40%', duration: 1 }">
            <div class="relative">
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-gray-800"></div>
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

        <!-- One scroll area for the whole grid, so there are no nested scrollbars. The wrapper
             stops 80px short of the bottom (p-10 + pb-10) — exactly the footer's height — and
             is pointer-events-none so its own edge cannot swallow clicks on the footer icons. -->
        <div class="flex-1 min-h-0 relative z-20 pb-10 pointer-events-none">
            <!-- overflow-x-hidden matters: the pink duplicates stick out 8px past the last
                 column, and a lone overflow-y makes the browser compute overflow-x as auto. -->
            <div ref="grid" class="h-full overflow-y-auto overflow-x-hidden pointer-events-auto opacity-0 pb-3"
                v-gsap.to="{ opacity: 100, duration: 0.5 }">
                <!-- pr-2 gives the last column's 8px pink duplicate room to show instead of
                     being clipped by the scroll area's edge. -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 pr-2">
                    <!-- A project without a link renders an <a> with no href: it stays inert
                         (no pointer cursor, no activation) without a second template. -->
                    <a v-for="(project, index) in projects" :key="project.title" :href="project.link?.href"
                        :target="project.link ? '_blank' : undefined" rel="noopener" draggable="false"
                        class="group relative block h-full" @mouseover="hovered = index" @mouseleave="hovered = -1">
                        <div
                            class="absolute inset-0 translate-x-2 translate-y-2 rotate-[-1deg] bg-pink-300 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3">
                        </div>
                        <div class="relative h-full bg-white p-5 md:p-6 flex flex-col">
                            <div class="flex items-start justify-between gap-3">
                                <span
                                    class="text-3xl md:text-4xl font-bold text-gray-200 leading-none transition-colors group-hover:text-pink-200">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <span class="text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 py-1 shrink-0"
                                    :class="statusClass(project)">
                                    {{ status(project) }}
                                </span>
                            </div>

                            <h2 class="text-base md:text-lg font-bold text-gray-800 leading-snug mt-3">
                                {{ project.title }}
                            </h2>
                            <p class="text-[11px] md:text-xs text-gray-600 leading-relaxed mt-2 line-clamp-2">
                                {{ project.desc }}
                            </p>

                            <div class="flex flex-wrap gap-1 mt-3">
                                <span v-for="tech in project.stack" :key="tech"
                                    class="text-[9px] md:text-[10px] px-1.5 py-0.5 bg-white border border-pink-200 text-gray-600">
                                    {{ tech }}
                                </span>
                            </div>

                            <div class="mt-auto pt-3 flex items-center justify-between gap-2 border-t border-pink-100">
                                <span class="text-[9px] uppercase tracking-wider text-gray-400 font-bold truncate">
                                    {{ project.tag }}
                                </span>
                                <span class="text-[10px] font-bold shrink-0"
                                    :class="project.link ? 'text-pink-500 group-hover:text-blue-500' : 'text-gray-400'">
                                    {{ project.link ? project.link.label : project.note }}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

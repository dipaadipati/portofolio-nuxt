<script setup lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import outSound from '~/assets/sounds/out.wav'
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
            <NuxtLink :onClick="backSound" to="/" class="relative z-[30]" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-6xl text-pink-400 -left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-6xl text-white" />
            </NuxtLink>
        </div>
        <div class="about-content opacity-0 absolute top-1/2 -left-1/2 md:-left-1/3 transform -translate-x-1/2 -translate-y-1/2
     flex flex-col items-center justify-center z-20 text-gray-700"
            v-gsap.to="{ opacity: 100, left: '50%', duration: 0.5 }">

            <!-- Same pair as the desktop's portrait: an in-flow copy carrying the white
                 inverted picture-shadow (it orbits 5px, so it peeks out around the photo) with
                 the real photo absolutely on top of it. The wrapper owns the size so both copies
                 stay identical; max-w-none stops Preflight's max-width:100% from making the
                 width circular. -->
            <div class="md:hidden relative z-10 mb-[22vw] h-[20vh] max-h-[190px]">
                <NuxtImg src="../../me.png" draggable="false"
                    class="absolute top-0 z-20 h-full w-auto max-w-none object-contain" />
                <NuxtImg src="../../me.png" draggable="false"
                    class="h-full w-auto max-w-none object-contain picture-shadow" />
            </div>

            <!-- Tablet (md..lg): everything smaller than the desktop's, and the portrait moved
                 out to the right of the card (its own block, below). The card is 380px rather
                 than 460 or the desktop's 600 because 600 draws 735px tall and 460 still crowds a
                 landscape tablet. Shrinking the card alone does not work: the text has to shrink
                 with it (12px, 320px wide) or its corners poke out past the card's tilted edges —
                 and so does the heading, which otherwise pushes the text down inside the card.
                 The desktop's own 600px card, 48px heading and 18px text come back at xl. -->
            <div class="relative flex flex-col items-center">
                <!-- Below md the card keeps its 75deg tilt but swaps its axes: 320px wide by
                     100vw tall locally draws as a wide, shallow panel. A viewport-wide square
                     would rotate into a tall shape that reaches ~484px above the centre and
                     swallows the photo; this one stays ~180px above it at every width. -->
                <div class="md:hidden absolute top-1/2 left-1/2 w-0 h-0 rotate-[75deg]">
                    <div
                        class="absolute -left-9 top-7 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[100vw] bg-pink-300">
                    </div>
                    <div
                        class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[100vw] bg-white ">
                    </div>
                </div>
                <div class="hidden md:block absolute top-1/2 left-1/2 w-0 h-0 rotate-[75deg]">
                    <div
                        class="absolute -left-12 top-9 rotate-[-1deg] transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] xl:w-[600px] xl:h-[600px] bg-pink-300">
                    </div>
                    <div
                        class="absolute transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] xl:w-[600px] xl:h-[600px] bg-white ">
                    </div>
                </div>

                <h1 class="relative z-10 text-2xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-4 xl:mb-10">About Me</h1>

                <div
                    class="relative z-10 text-[10px] md:text-xs xl:text-lg text-start *:text-justify w-screen px-10 md:p-0 md:w-[320px] xl:w-[500px] space-y-4 font-sans">
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
        </div>
        <!-- Tablet (md..lg): the portrait to the right of the card, as on the desktop — same two
             copies, same vertical centring — only sized to the space this band has. The card is
             380px there, so its widest corner reaches 233px right of centre; the column starts
             218px out, which leaves the figure (me.png is ~24% transparent on each side) 20px
             clear of that corner at the narrowest, and the width is the largest that still fits
             before the viewport's right edge, capped at 214px — what the portrait was when it sat
             above the card. -->
        <div class="opacity-0 hidden md:block xl:hidden absolute top-1/2 left-[calc(50%_+_218px)] -translate-y-1/2 z-10 w-[min(214px,calc((50vw-265px)/0.763))]"
            v-gsap.to="{ opacity: 100, duration: 0.5 }">
            <div class="relative z-20">
                <NuxtImg src="../../me.png" class="absolute top-0 z-20" draggable="false" />
                <NuxtImg src="../../me.png" class="z-[18] picture-shadow" draggable="false" />
            </div>
        </div>
        <div class="opacity-0 hidden xl:block absolute top-1/2 left-[calc(50%_+_320px)] -translate-y-1/2 z-10 w-[300px]"
            v-gsap.to="{ opacity: 100, duration: 0.5 }">
            <div class="relative z-20">
                <NuxtImg src="../../me.png" class="absolute top-0 z-20" draggable="false" />
                <NuxtImg src="../../me.png" class="z-18 picture-shadow" draggable="false" />
            </div>
        </div>
    </div>
</template>
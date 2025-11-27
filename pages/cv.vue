<script setup lang="ts">
import { ref } from 'vue'
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
import VPdfAnnotationPlugin from "@vue-pdf-viewer/annotation";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})

const pdfSrc = ref('/cv.pdf')

const annotationPlugin = VPdfAnnotationPlugin({
    highlight: false, // Disable and hide highlight tool
});
</script>

<template>
    <div class="relative flex justify-center items-center h-full z-20">
        <div class="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 rotate-[270deg] z-15">
            <div class="relative">
                <h1 class="text-[20vh] font-bold text-gray-300 cursor-default select-none z-15">MY CV</h1>
            </div>
        </div>
        <ClientOnly>
            <div class="w-full md:p-10">
                <VPdfViewer :src="pdfSrc" :plugins="[annotationPlugin]" />
            </div>
        </ClientOnly>
        <div class="absolute top-0 right-10 xl:right-20 flex items-center p-3 z-20">
            <NuxtLink to="/" class="relative z-20" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-pink-400 left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-white" />
            </NuxtLink>
        </div>
    </div>
</template>


<style>
.vpv-pages-container-wrapper>div:nth-child(3) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
}
</style>
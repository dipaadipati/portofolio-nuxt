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
    <div class="relative flex justify-center items-center h-full">
        <ClientOnly>
            <div class="w-full md:p-10">
                <VPdfViewer :src="pdfSrc" :plugins="[annotationPlugin]" />
            </div>
        </ClientOnly>
        <div class="absolute top-0 right-10 xl:right-20 flex items-center p-3 z-20">
            <NuxtLink to="/" class="relative z-20" draggable="false">
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-pink-400 -left-1 -top-0.5" />
                <font-awesome :icon="faTimes" class="absolute text-4xl xl:text-6xl text-white" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    rotation: {
        type: String,
        default: 'rotate-[-20deg]',
    },
    clickHandler: {
        type: Function,
        default: () => { },
    },
});
const { text, to, rotation, clickHandler } = props;
const isHover = ref(false);
</script>

<template>
    <NuxtLink class="relative cursor-default" v-gsap.add.from="{ opacity: 0, y: 50, duration: 0.3 }" draggable="false"
        :class="rotation" @click="clickHandler()" :to="to">
        <div :class="isHover ? 'opacity-100' : 'opacity-0'"
            class="absolute -top-1 -right-1 rotate-[2deg] w-0 h-0 transition-all duration-300 animate-[getar_1s_linear_infinite_alternate]
                                        border-t-[50px] border-t-transparent border-r-[17em] border-r-pink-400 border-b-[5px] border-b-transparent">
        </div>
        <div :class="isHover ? 'opacity-100' : 'opacity-0'"
            class="absolute -top-1 -right-1 w-0 h-0 transition-all duration-300 animate-[bounce_2s_linear_infinite_alternate] 
                                        border-t-[50px] border-t-transparent border-r-[17em] border-r-white border-b-[5px] border-b-transparent">
        </div>
        <div class="isolate mix-blend-difference" @touchstart="isHover = true" @mouseover="isHover = true"
            @mouseleave="isHover = false">
            <h1 class="text-6xl font-bold text-center text-blue-200 select-none">
                {{ text }}
            </h1>
        </div>
    </NuxtLink>
</template>
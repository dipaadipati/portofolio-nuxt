<script setup lang="ts">
const menus = [
    {
        text: 'About',
        to: '/about',
        rotation: 'rotate-[-20deg]',
    },
    {
        text: 'Projects',
        to: '/projects',
        rotation: 'rotate-[-10deg]',
    },
    {
        text: 'Skills',
        to: '/skills',
        rotation: 'rotate-[-5deg]',
    },
    {
        text: 'My Github',
        to: 'https://github.com/dipaadipati',
        rotation: 'rotate-[-2deg]',
    },
    // {
    //     text: 'Credits',
    //     to: '/credits',
    //     rotation: 'rotate-[-25deg]',
    // },
];


definePageMeta({
    pageTransition: {
        name: 'slide-right',
        mode: 'out-in'
    }
})
</script>


<template>
    <div class="flex flex-col gap-3 justify-center items-center h-full transition-all" v-gsap.timeline>
        <MenuButton v-for="menu in menus" :key="menu.text" :to="menu.to" :text="menu.text" :rotation="menu.rotation" />
    </div>
</template>
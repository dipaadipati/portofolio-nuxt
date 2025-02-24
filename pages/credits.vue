<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'no-slide',
        mode: 'out-in'
    }
})
</script>

<template>
    <div class="flex justify-center items-center h-full">
        <NuxtLink to="/">
            Back
        </NuxtLink>
    </div>
</template>
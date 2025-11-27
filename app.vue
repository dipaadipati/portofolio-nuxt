<script setup lang="ts">
useSeoMeta({
  title: 'Adipati Rezkya Portfolio',
  description: 'Portfolio website of Adipati Rezkya',
  ogTitle: 'Adipati Rezkya Portfolio',
  ogDescription: 'Portfolio website of Adipati Rezkya',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s;
}

.slide-left-enter-from {
  transform: translate(100%, 0);
}

.slide-left-leave-to {
  transform: translate(100%, 0);
}

.slide-right-enter-from {
  transform: translate(-100%, 0);
}

.slide-right-leave-to {
  transform: translate(-100%, 0);
}


.picture-shadow {
  filter: invert() drop-shadow(0 0 10px rgba(244, 114, 182, 1));
  animation: rotate 2s linear infinite;
}

.picture-shadow-dark {
  filter: invert() drop-shadow(0 0 10px rgba(100, 100, 100, 1));
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
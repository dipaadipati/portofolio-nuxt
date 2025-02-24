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
</style>
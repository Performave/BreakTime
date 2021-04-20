<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #2e3048,
    #2f314a,
    #30324c,
    #32344e,
    #333550,
    #333550,
    #333550,
    #333550,
    #32344e,
    #30324c,
    #2f314a,
    #2e3048
  );
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Sofia Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

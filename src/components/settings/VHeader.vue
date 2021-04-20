<template>
  <div class="flex items-center h-24 px-10">
    <div class="flex justify-left w-1/3">
      <router-link :to="{ name: 'Home' }" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 muted-title"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </router-link>
    </div>
    <div class="flex justify-center w-1/3">
      <h1 class="text-xl muted-title">Settings</h1>
    </div>
    <div class="flex justify-end w-1/3"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VHeader",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.muted-title {
  color: #e2e4f7;
}
</style>
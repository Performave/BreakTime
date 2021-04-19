<template>
  <div class="flex items-center justify-center w-full h-24 px-10 mt-5">
    <template v-if="!active">
      <button
        class="py-4 px-10 font-bold rounded-full transition-all bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-red-500 text-xl uppercase active:outline-none focus:outline-none outline-none"
        @click="toggleTimer"
      >
        Start
      </button>
    </template>
    <template v-if="active">
      <button
        class="py-4 px-10 font-bold rounded-full transition-all bg-gray-100 text-pink-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-red-500 text-xl uppercase active:outline-none focus:outline-none outline-none"
        @click="toggleTimer"
      >
        Pause
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VControls",
  setup() {
    const active = ref(false);

    const toggleTimer = () => {
      active.value = !active.value
    }

    return {
      active,
      toggleTimer,
    };
  },
});
</script>

<style scoped>
</style>
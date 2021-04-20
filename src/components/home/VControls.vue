<template>
  <div class="flex items-center justify-center w-full h-24 px-10 mt-8">
    <template v-if="!active">
      <button
        class="py-4 px-10 font-bold rounded-full transition-all bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-red-500 text-xl uppercase active:outline-none focus:outline-none outline-none"
        @click="toggleTimer"
      >
        Start
      </button>
    </template>
    <template v-if="active">
      <div class="flex items-center justify-center w-full">
        <div class="flex justify-end w-1/3 px-8">
          <button class="z-0 fade-in-right p-3 h-12 w-12 button-muted rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-red-500 focus:outline-none outline-none">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          </button>
        </div>
        <div class="flex justify-center w-1/3">
          <button
            class="z-10 py-4 px-10 font-bold rounded-full transition-all bg-gray-100 text-pink-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-red-500 text-xl uppercase active:outline-none focus:outline-none outline-none"
            @click="toggleTimer"
          >
            Pause
          </button>
        </div>
        <div class="w-1/3"></div>
      </div>
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
      active.value = !active.value;
    };

    return {
      active,
      toggleTimer,
    };
  },
});
</script>

<style scoped>
.button-muted {
  background-color: #3B3D5A;
}

.button-muted:hover {
  background-color: #444662;
}

.icon-muted {
  color: #8487A8;
}

.fade-in-right {
    animation: fade-in-right 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    animation-fill-mode: both;
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(7rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
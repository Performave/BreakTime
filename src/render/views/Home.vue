<template>
  <h1 class="text-5xl font-bold text-center">Increment me</h1>
  <h3 class="text-center">{{ counter }}</h3>
  <div class="flex justify-center">
    <button class="bg-red-500 py-2 px-5 rounded-md" @click="counter++">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  /* computed: {

    count: {
      get (): number {
        return this.$store.state.count
      },
      set (value: number): void {
        return this.$store.commit('increment')
      }
    }

  } */
  setup() {
    const store = useStore();

    const counter = computed({
      get: () => store.state.counter,
      set: (value: number) => store.commit('increment', value),
    });

    return {
      counter
    };
  },
});
</script>



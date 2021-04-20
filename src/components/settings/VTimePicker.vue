<template>
  <div class="flex justify-center mx-auto w-2/3">
    <div class="flex justify-center h-28 w-full rounded-lg overflow-hidden">
      <div class="w-1/3 bg-selector p-2">
        <input type="text" class="bg-transparent text-center text-6xl border-0 w-full h-full rounded-lg" />
      </div>
      <div class="w-1/3 bg-selector p-2">
        <input type="text" class="bg-transparent text-center text-6xl border-0 w-full h-full rounded-lg" />
      </div>
      <div class="w-1/3 bg-selector p-2">
        <input type="text" class="bg-transparent text-center text-6xl border-0 w-full h-full rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTimePicker",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.bg-selector {
  background-color: #404364;
}

</style>
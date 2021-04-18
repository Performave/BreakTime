<template>
  <div class="flex items-center justify-center w-full h-full absolute">
    <div class="bg-container">
      <div
        class="absolute box"
        v-for="index in 36"
        :style="{
          transform:
            'translateY(-5px) rotate(calc(' + index + ' * 10deg))',
        }"
        :key="index"
      >
        <span
          class="rounded-full"
          :style="{ filter: 'hue-rotate(calc(' + index + ' *.5deg))' }"
        ></span>
      </div>
    </div>
  </div>

  <div class="grid place-items-center w-full h-full">
    <h1 class="text-6xl font-bold">4:20</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
.bg-container {
  width: 400px;
  height: 400px;
}

.box {
  width: 400px;
  height: 6px;
  position: absolute;
  top: 50%;
}

.box span {
  background: #e55a70;
  display: block;
  width: 80px;
  height: 6px;
}
</style>
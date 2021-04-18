<template>
  <div class="w-full h-96">
    <div class="grid place-items-center w-full h-96 absolute">
      <div class="bg-container">
        <div
          class="absolute box"
          v-for="index in 36"
          :style="{
            transform: 'rotate(calc(' + index + ' * 10deg))',
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

    <div class="grid place-items-center w-full h-96">
      <h1 class="text-5xl font-bold">4:20</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTimer",
});
</script>

<style scoped>
.bg-container {
  width: 360px;
  height: 360px;
}

.box {
  width: 360px;
  height: 6px;
  position: absolute;
  top: 50%;
}

.box span {
  background: #e55a70;
  display: block;
  width: 70px;
  height: 6px;
}
</style>
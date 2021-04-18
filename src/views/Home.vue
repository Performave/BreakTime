<template>
  <div class="flex justify-center mt-52">
    <div class="w-36 h-36 outline-black">
      <div
        class="absolute box"
        v-for="index in 36"
        :style="{
          transform: 'translateY(-5px) rotate(calc(' + index + ' * 10deg))',
        }"
        :key="index"
      >
        <span class="rounded-full" :style="{filter: 'hue-rotate('+index+'*5deg)'}"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
.box {
  width: 400px;
  height: 6px;
  position: absolute;
}

.box span {
  background: #E55A70;
  display: block;
  width: 80px;
  height: 6px;
}
</style>
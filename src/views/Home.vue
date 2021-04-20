<template>
  <div>
    <v-header />
    <v-timer />
    <v-controls />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VHeader from "@/components/home/VHeader.vue";
import VTimer from "@/components/home/VTimer.vue";
import VControls from "@/components/home/VControls.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHeader,
    VTimer,
    VControls,
  },
});
</script>
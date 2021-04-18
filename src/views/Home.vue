<template>
  <v-header />
  <v-timer />
  <v-controls />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VHeader from "@/components/VHeader.vue";
import VTimer from "@/components/VTimer.vue";
import VControls from "@/components/VControls.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHeader,
    VTimer,
    VControls
  }
});
</script>
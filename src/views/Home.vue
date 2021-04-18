<template>
  <v-header />
  <v-timer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VHeader from "@/components/VHeader.vue";
import VTimer from "@/components/VTimer.vue";

export default defineComponent({
  name: "Home",
  components: {
    VHeader,
    VTimer,
  }
});
</script>
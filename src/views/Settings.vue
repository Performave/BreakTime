<template>
  <div>
    <v-header />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import VHeader from "@/components/settings/VHeader.vue";

export default defineComponent({
  name: "Settings",
  components: {
    VHeader,
  },
});
</script>

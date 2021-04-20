<template>
  <div>
    <v-header />
    <v-time-picker />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import VHeader from "@/components/settings/VHeader.vue";
import VTimePicker from "@/components/settings/VTimePicker.vue";

export default defineComponent({
  name: "Settings",
  components: {
    VHeader,
    VTimePicker,
  },
});
</script>

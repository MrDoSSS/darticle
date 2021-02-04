<template>
  Darticle App
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const db = inject("db");
    const auth = inject("auth");
    const store = inject("store");
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div class="pb-3 pt-10 mx-6 h-screen">
    <div
      class="grid h-full"
      :class="{'grid-cols-1': !preview, 'grid-cols-2': preview}"
    >
      <editor />
      <preview v-if="preview" />
    </div>
  </div>

</template>

<script lang="ts">
import { inject, ref } from "vue";
import Editor from "@/components/editor/Editor.vue";
import Preview from "@/components/editor/Preview.vue";

export default {
  components: {
    Editor,
    Preview,
  },
  setup() {
    const store = inject<Darticle.AppStore>("store");
    const preview = ref(false);

    return {
      store,
      preview,
    };
  },
};
</script>
<template>
  <div
    id="editor"
    class="h-full"
  />
</template>

<script lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";

export default {
  setup() {
    const editor = new EditorJS({
      holder: "editor",
      minHeight: 30,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["marker", "link"],
          config: {
            placeholder: "Header",
          },
          shortcut: "CMD+SHIFT+H",
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
          shortcut: "CMD+SHIFT+O",
        },
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
      },
    });
  },
};
</script>

<style>
.codex-editor {
  height: 100%;
}
</style>
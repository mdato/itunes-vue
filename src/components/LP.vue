<template>
  <div
    class="columns-1 content-center break-inside-avoid-column w-auto text-slate-400 bg-slate-900"
  >
    <a :href="album.artistViewUrl" target="_blank">
      <h4
        class="text-lg font-bold text-center flex-auto flex-wrap px-12 pb-3 hover:scale-125 hover:text-slate-500"
      >
        {{ album.artistName }}
      </h4></a
    >
    <div class="imagen flex columns-1 justify-center">
      <a :href="album.collectionViewUrl" target="_blank">
      <img
        :src="album.artworkUrl100"
        alt="{{ album.collectionName }}"
        class="mb-3 w-48 h-auto rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 text-xs text-center flex-wrap pb-1"
      />
    </a>
    </div>
    

    <h6 class="text-xs text-center font-bold flex-auto flex-wrap px-12 pb-1">
      {{ album.collectionName }}
    </h6>

    <div class="precio-fecha flex columns-2 justify-evenly mt-3">
      <h6 class="text-xs pb-1">
        $ {{ album.collectionPrice && album.collectionPrice.toFixed(2) }}
      </h6>

      <h6 class="text-xs pb-5">{{ album.releaseDate.slice(0, 10) }}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../types/Itunes";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style>
</style>

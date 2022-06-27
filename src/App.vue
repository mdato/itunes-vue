<template>
  <!--Navbar-->
  <nav class="relative container m-auto p-1 mt-5 mb-5">
    <!--Flex Container-->
    <div class="flex items-center justify-center">
      <!--Logo-->
      <div class="">
        <img src="./img/logo.png" alt="itunes logo" class="w-300 h-20" />
      </div>      
    </div>
  </nav>

  <div class="flex text-center justify-center">
    <form @submit.prevent="searchItunes(searchText)">
      <input
        type="text"
        v-model="searchText"
        class="p-2 px-2 text-darkBlue baseline shadow-2xl"
        placeholder="search album"
      />
      <br /><br />
      <!--Button-->
      <button
        @click="searchItunes(searchText)"
        class="py-2 px-5 text-white rounded-full baseline bg-black hover:bg-darkBlue shadow-lg shadow-cyan-500/50"
      >
        Search
      </button>
    </form>
  </div>

  <!--AlbumSection--> 
  <section class="flex flex-wrap items-center justify-evenly my-6 gap-4">
    <div v-if="data.results" class="base"></div>
    <div v-for="album in data.results" :key="album.artistId" class="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
      <LP :album="album" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { itunesSearch } from "./services/iTunesAPI";
import { ItunesTypes } from "./types/Itunes";
import LP from "./components/LP.vue";

export default defineComponent({
  name: "App",
  components: {
    LP,
  },
  setup() {
    let albums = reactive<{ data: ItunesTypes }>({ data: {} });
    let searchText = ref("");
    const searchItunes = async (search: string): Promise<void> => {
      const value = await itunesSearch(search);
      albums.data = value;
      console.log("data", albums);
    };

    return { searchItunes, ...toRefs(albums), searchText };
  },
});
</script>

<style>
body {
   background-color: rgb(15 23 42);
}


::-webkit-scrollbar {
    width: 10px;
    border: 1px dashed blue;
}
 
::-webkit-scrollbar-track {
    border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 6px;
}

::-webkit-scrollbar-corner{
    border-radius:5px;
}

/* The vertical thumb*/
::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background-color: rgb(21, 52, 85);
}

</style>

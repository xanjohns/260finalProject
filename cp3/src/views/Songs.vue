<template>
  <div>
    <h1>Songs</h1>
    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "../components/SongList.vue";
export default {
  name: "Songs",
  components: {
    SongList,
  },
  computed: {
    songs() {
      return this.$root.$data.songs;
    },
  },
};
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>

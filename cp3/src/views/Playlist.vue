<template>
  <div>
    <h1>Songs</h1>
    <PlayListList :playList="PlayListProp" />
  </div>
</template>

<script>
import PlayListList from "../components/PlayListList.vue";
export default {
  name: "Playlist",
  components: {
    PlayListList,
  },
  computed: {
      PlayListProp() {
          return this.$root.$data.playlist;
      }
  }
  

};
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>

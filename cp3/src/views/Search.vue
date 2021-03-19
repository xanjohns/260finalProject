<template>
  <div>
    <h1>Search</h1>
    <ResultList :songs="songs" />
  </div>
</template>

<script>
import ResultList from "../components/ResultList.vue";
export default {
  name: "Playlist",
  components: {
    ResultList,
  },
  computed: {
      songs() {
          return this.$root.$data.songs;
      }
  }
  

};
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>
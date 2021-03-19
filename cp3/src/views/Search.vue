<template>
  <div>
    <h1>Search</h1>
    <input type="text" v-model="userInput" placeholder="Album, song, etc." />

    <ResultList :songs="songs" :userInp="userInput" />
  </div>
</template>

<script>
import ResultList from "../components/ResultList.vue";
export default {
  name: "Search",
  components: {
    ResultList,
  },
  data() {
    return {
      userInput: "",
    };
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

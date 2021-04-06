<template>
  <div>
    <h1>Songs</h1>
    <SongList :songs="songs" />
  </div>
</template>

<script>
import SongList from "../components/SongList.vue";
import axios from 'axios';
export default {
  name: "Songs",
  components: {
    SongList,
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this.getSongs();
  },
  methods: {
    async getSongs() {
      try {
        const response = await axios.get("/api/songs");
        this.songs = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>

<template>
  <div>
    <h1>PlayLists</h1>
    <PlayListList :playList="this.playlists" />
  </div>
</template>

<script>
import PlayListList from "../components/PlayListList.vue";
import axios from 'axios';
export default {
  name: "Playlist",
  data() {
    return {
      playlists: [],
    }
  },
  components: {
    PlayListList,
  },
  computed: {
      PlayListProp() {
          return this.$root.$data.playlists;
      }
  },
  created() {
    this.getPlayLists();
  },
  methods: {
    async getPlayLists() {
      try {
        let playlists1 = await axios.get("/api/playlists");
        this.playlists = playlists1;
        console.log(this.playList);
      }
      catch (error) {
        console.lob(error);
      }
    },
  }
  

};
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>

<template>
  <div class="wrapper">
    <button @click="addPlaylist()">Click here to add a playlist</button>
    <div class="playlist-cont">
      <div
        class="playlist"
        v-for="(playlist, index) in playListC"
        :key="playlist[0].song"
      >
      <h2>PlayList {{index +1}}</h2>
        <div class="song" v-for="song in playlist" :key="song.song">
          <img :src="'/images/' + song.cover" />
          <div class="info-cont">
            <h2>{{ song.song }}</h2>
            <h3>{{ song.album }}</h3>
          </div>
          <h3>{{ song.duration }}</h3>
          <h3>{{ song.popularity }}</h3>
          <button @click="removeSong(song, playlist)">Remove Song</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayListList",
  props: {
    playList: Array,
  },
  computed: {
    playListC() {
      return this.$root.$data.playlists;
    },
  },
  methods: {
    removeSong(song, playlist) {
      const index = this.$root.$data.playlists.indexOf(playlist);
      const index2 = this.$root.$data.playlists[index].indexOf(song);
      if (index2 > -1) {
        this.$root.$data.playlists[index].splice(index2, 1);
      }
    },
    addPlaylist() {
      if (this.$root.$data.playlists.length < 6) {
        let tempObj = [];
        this.$root.$data.playlists.push(tempObj);
      }
    },
  },
};
</script>

<style scoped>
.playlist {
  margin: 10px auto;
  background-color: rgb(11, 12, 15);
  width: 40%;
  height: auto;
}
.wrapper {
  
}
.playlist-cont {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
img {
  height: 100%;
  width: auto;
}
.song {
  display: flex;
  flex-direction: row;
  height: 120px;
  width: 90%;
  background-color: rgb(34, 34, 34);
  margin: 10px auto;
}
.info-cont {
  display: flex;
  flex-direction: column;
  margin: auto 30px;
  text-align: center;
  padding: 0px 0px;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.info-cont h3 {
  padding: 0px 0px;
  margin: 0px 0px;
  color: rgb(155, 155, 155);
}
.info-cont h2 {
  padding: 0px 0px;
  margin: 0px 0px;
  color: white;
}
.song h3 {
}
</style>

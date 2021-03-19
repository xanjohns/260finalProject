<template>
  <div class="wrapper">
    <div class="filter-cont">
      <h3>Sort by:</h3>
      <button @click="sortName()">Name</button>
      <button @click="sortAlbum()">Album</button>
      <button @click="sortPop()">Popularity</button>
      <button @click="sortLength()">Length</button>
    </div>
    <div class="song" v-for="song in songs" :key="song.song">
      <img :src="'/images/' + song.cover" />
      <div class="info-cont">
        <h2>{{ song.song }}</h2>
        <h3>{{ song.album }}</h3>
      </div>
      <h3>{{ song.duration }}</h3>
      <h3>{{ song.popularity }}</h3>
      <div class="button-cont">
        <button
          v-for="(playlist, index) in playlistC"
          :key="playlist.length"
          @click="addSong(song, index)"
        >
          Add Song
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongList",
  props: {
    songs: Array,
  },
  computed: {
    playlistC() {
      return this.$root.$data.playlists;
    },
  },
  methods: {
    addSong(song, index) {
      this.$root.$data.playlists[index].push(song);
    },
    sortName() {
      this.$root.$data.songs.sort((a, b) => {
        return ("" + a.song).localeCompare(b.song);
      });
    },
    sortAlbum() {
      this.$root.$data.songs.sort((a, b) => {
        return ("" + a.album).localeCompare(b.album);
      });
    },
    sortPop() {
      this.$root.$data.songs.sort((a, b) => {
        return a.popularity-b.popularity;
      });
    },
    sortLength() {
      this.$root.$data.songs.sort((a, b) => {
        return ("" + a.duration).localeCompare(b.duration);
      });
    },
  },
};
</script>

<style scoped>
.button-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.button-cont button {
  margin: 5px 5px;
  height: 40%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 60px;
}
img {
  height: 100%;
  width: auto;
}
.song {
  display: flex;
  flex-direction: row;
  height: 120px;
  width: 42%;
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

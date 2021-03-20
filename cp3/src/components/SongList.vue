<template>
  <div class="wrapper">
    <div class="filter-cont">
      <h3>Sort by:</h3>
      <button @click="sortName()">Name</button>
      <button @click="sortAlbum()">Album</button>
      <button @click="sortPop()">Popularity</button>
      <button @click="sortLength()">Length</button>
    </div>
    <div class="song-cont">
      <div class="song" v-for="song in songs" :key="song.song">
        <img :src="'/images/' + song.cover" />
        <div class="info-cont">
          <h2>{{ song.song }}</h2>
          <h3>{{ song.album }}</h3>
        </div>
        <div class="stats-cont">
          <h3>{{ song.duration }}</h3>
          <h3>Popularity: {{ song.popularity }}</h3>
        </div>
        <div class="button-cont">
          <button
            v-for="(playlist, index) in playlistC"
            :key="playlist.length"
            @click="addSong(song, index)"
          >
            PlyLst {{index+1}}
          </button>
        </div>
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
        return a.popularity - b.popularity;
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

<style >
button {
    font-family: 'Lato', sans-serif;
}
.stats-cont {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 70%;
}
.stats-cont h3 {
    margin: 3px 0px;

}
.song-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px auto;
  margin-top: 20px;

  justify-content: space-between;
  
}
.button-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.wrapper {
}
img {
  height: 100%;
  width: auto;
}
.song {
  display: flex;
  flex-direction: row;
  height: 120px;
  width: 600px;
  background-color: rgb(34, 34, 34);
  margin: 10px auto;
  box-shadow: 5px 5px 10px black;
}
.info-cont {
  display: flex;
  flex-direction: column;
  margin: auto 30px;
  text-align: center;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.info-cont h3 {
  padding: 0px 0px;
  font-size: 15px;
  margin: 0px 0px;
  color: rgb(155, 155, 155);
}
.info-cont h2 {
  padding: 0px 0px;
  margin: 0px 0px;
  color: white;
}
.button-cont button {
  margin: 5px 5px;
  height: 20%;
  width: auto;
  color: white;
  background-color: rgb(75, 75, 78);
  border: none;
  text-decoration: none;
}
.song h3 {
}
.filter-cont button {
    background-color: #4169e1;
    margin: 0px 30px;
    height: 60px;
    width: 130px;
    font-size: 25px;
    color: white;
}
@media only screen and (max-width: 700px) {
    .filter-cont button {
        margin: 0px 5px;
        width: auto;
        height: 30px; 
        font-size: 15px;
    }
    .song {
        width: 90%;
        height: 80px;
    }
    .info-cont h3 {
        font-size: 10px;
    }
    .info-cont h2 {
        font-size: 13px;
    }
    .stats-cont h3 {
        font-size: 10px;
    }
    .info-cont {
        margin: auto 10px;
    }
    .button-cont button {
        margin: 2px 2px;
        font-size: 8px;
    }
}
</style>

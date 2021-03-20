<template>
  <div class="wrapper">
    <button id="playlist-butt" @click="addPlaylist()">Add a Playlist</button>
    <div class="playlist-cont">
      <div 
       
        class="playlist"
        v-for="(playlist, index) in this.$root.$data.playlists"
        :key="playlist.length"
      >
        <h2>PlayList {{ index + 1 }}</h2>
        <div >
          <div class="song-cont" v-for="song in playlist" :key="song.song">
            <div class="song">
              <img :src="'/images/' + song.cover" />
              <div class="info-cont">
                <h2>{{ song.song }}</h2>
                <h3>{{ song.album }}</h3>
              </div>
              <div class="stats-cont">
                <h3>{{ song.duration }}</h3>
                <h3>Popularity: {{ song.popularity }}</h3>
              </div>
              <button class="rem-song-butt" @click="removeSong(song, playlist)">
                Remove Song
              </button>
            </div>
          </div>
        </div>
        <button class="rem-playlist-butt" @click="removePlaylist(playlist)">
          Remove Playlist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
        Vue.set(
          this.$root.$data.playlists,
          this.$root.$data.playlists.length-1,
          tempObj
        );
       
        //this.$root.$data.playlists.push(tempObj);
      }
    },
    removePlaylist(playlist) {
      const index = this.$root.$data.playlists.indexOf(playlist);
      if (index > -1) {
        this.$root.$data.playlists.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
button {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
}
.rem-playlist-butt {
  background-color: rgb(165, 165, 165);
  margin: 15px auto;
  height: 25px;
}
#playlist-butt {
  height: 40px;
  background-color: rgb(184, 184, 184);
  font-size: 20px;
  padding: 20px 25px;
  justify-content: center;
  margin: auto auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.playlist {
  margin: 10px auto;
  background-color: rgb(11, 12, 15);
  width: 43%;
  height: auto;
  padding-bottom: 20px;
}
.wrapper {
  width: 100%;

  margin: 0px;
}
.playlist-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
}
.filter-cont button {
  background-color: #4169e1;
  margin: 0px 30px;
  height: 60px;
  width: 130px;
  font-size: 25px;
  color: white;
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
.button-cont button {
  margin: 5px 5px;
  height: 20%;
  width: auto;
  color: white;
  background-color: rgb(75, 75, 78);
  border: none;
  text-decoration: none;
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
  box-shadow: 5px 5px 10px black;
  margin: 10px auto;
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
.song h3 {
}
.rem-song-butt {
  height: 40%;
  width: 80px;
  margin: auto auto;
  margin-right: 15px;
  margin-left: 10px;
  background-color: rgb(85, 85, 85);
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;

  justify-content: center;
}
@media only screen and (max-width: 700px) {
    .playlist {
        width: 95%;
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
    .rem-song-butt {
        width: auto;
        font-size: 9px;
    }
}
</style>

<template>
  <div class="wrapper">
    <div class="song-cont">
      <div class="song" v-for="song in userResults" :key="song.song">
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
            v-for="(playlist, index) in playlists.data"
            :key="playlist.length"
            @click="addSong(song, playlist)"
          >
            PlyLst {{ index + 1 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ResultList",
  data() {
    return {
      songs: [],
      playlists: [],
    }
  },
  props: {

    userInp: String
  },
  computed: {
    userResults() {
        return this.songs.filter(currVal =>
            currVal.song.toLowerCase().includes(this.userInp.toLowerCase()) || currVal.album.toLowerCase().includes(this.userInp.toLowerCase())

            );
    },


  },
  created() {
    this.getSongs();
    this.getPlayLists();
  },
  methods: {
      async addSong(song, playlist) {
      try {
        await axios.put(`/api/playlists/${playlist._id}/${song._id}`);
        this.getSongs();
      }
      catch (error) {
        //console.log(error);
      }
    },
    async getSongs() {
      try {
        const response = await axios.get("/api/songs");
        this.songs = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async getPlayLists() {
      try {
        let playlists1 = await axios.get("/api/playlists");
        this.playlists = playlists1;
        //console.log(this.playList);
      }
      catch (error) {
        //console.log(error);
      }
    },
  }

};
</script>

<style scoped>
button {
  font-family: "Lato", sans-serif;
}
.wrapper {
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
.song h3 {
}
@media only screen and (max-width: 700px) {
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

<template>
  <div class="wrapper">
    <div class="song" v-for="song in playListC" :key="song.song">
      <img :src="'/images/' + song.cover" />
      <div class="info-cont">
        <h2>{{ song.song }}</h2>
        <h3>{{ song.album }}</h3>
      </div>
      <h3>{{ song.duration }}</h3>
      <h3>{{ song.popularity }}</h3>
      <button @click="removeSong(song)">Remove Song</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultList",
  props: {
    songs: Array,
  },
  
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
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

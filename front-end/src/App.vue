<template>
  <div id="app">
    <div id="nav">
      <router-link id="home" to="/">Home</router-link>
      <router-link class="other-link" to="/songs">All Songs</router-link>
      <router-link class="other-link" to="/playlist">View Playlist</router-link>
      <router-link class="other-link" to="/search">Search</router-link>
    </div>
    <router-view />
  <div class="footer-cont">
    <a href="https://github.com/xantastic/cp4">Github</a>
  </div>
  </div>
</template>

<style>
.footer-cont {
  background-color: grey;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 30px;
  display: flex;;
  justify-content: flex-end;
  margin-top: 80px;
  box-sizing: border-box;
}
.footer-cont a {
  justify-content: center;
  margin: auto 0px;
  margin-right: 30px;
  text-decoration: none;
  color: black;

}
body {
  margin: 0px;
  padding-bottom: 60px;
  background-color: rgb(19, 19, 19);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(19, 19, 19);
  padding: 0px;
  width: 100%;
  margin: 0px;
}

.other-link {
  float: right;
  font-family: "Staatliches", cursive;
  font-size: 20px;
}

#home {
  float: left;
  font-family: "Staatliches", cursive;
  font-size: 20px;
}

#nav {
  padding: 30px;
  padding-bottom: 50px;
  background-color: #4169e1;
  margin-bottom: 40px;
  box-shadow: 10px 10px 20px black;
}

#nav a {
  margin: auto 20px;
  font-weight: bold;
  color: rgb(54, 54, 54);
}

#nav a.router-link-exact-active {
  color: white;
}

@media only screen and (max-width: 700px) {
  #nav a {
    margin: auto 5px;
  }
}
</style>

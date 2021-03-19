<template>
  <div id="app">
    <div id="nav">
      <router-link id="home" to="/">Home</router-link> 
      <router-link class="other-link" to="/songs">All Songs</router-link>
      <router-link class="other-link" to="/playlist">View Playlist</router-link>
      <router-link class="other-link" to="/search">Search</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
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
}

#home {
  float: left;
}

#nav {
  padding: 30px;
  padding-bottom: 40px;
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
</style>

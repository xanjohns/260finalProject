<template>
  <div id="app">
    <div id="nav">
      <router-link id="home" to="/">Home</router-link>
      <h1 class="login" v-if="this.$root.$data.user">
        {{ this.$root.$data.user.firstName }}
      </h1>
      <a class="login" id="logout" @click="logout" v-if="this.$root.$data.user">
        Logout
      </a>
      <h1 class="login" v-if="this.$root.$data.user == null">(Login)</h1>
      <router-link class="other-link" to="/songs">All Songs</router-link>
      <router-link class="other-link" to="/playlist">View Playlist</router-link>
      <router-link class="other-link" to="/search">Search</router-link>
    </div>
    <router-view />
    <div class="footer-cont">
      <p>3 hours</p>
      <a href="https://github.com/xantastic/260finalProject">Github</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {},
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
        location.reload();
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  },
  async created() {
    try {
      let response = await axios.get("/api/users");
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
};
</script>

<style>
#logout:hover {
  cursor: pointer;
}
.login {
  float: left;
  font-family: "Staatliches", cursive;
  font-size: 20px;

  margin: auto 20px;
  font-weight: bold;
  color: rgb(54, 54, 54);
}

.footer-cont {
  background-color: grey;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 30px;
  display: flex;
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
.footer-cont p {
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

  margin: auto 20px;
  font-weight: bold;
  color: rgb(54, 54, 54);
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

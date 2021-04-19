<template>
  <div class="home">
    <HelloWorld />
    <div v-if="this.$root.$data.user == null">
      <div class="heroBox">
        <form class="pure-form">
          <fieldset class="top">
            <legend>Register for an account to create playlists</legend>
            <input placeholder="first name" v-model="firstName" />
            <input placeholder="last name" v-model="lastName" />
          </fieldset>
          <fieldset class="top bottom">
            <input placeholder="username" v-model="username" />
            <input type="password" placeholder="password" v-model="password" />
          </fieldset>
          <fieldset class="bottom">
            <button
              type="submit"
              class="pure-button pure-button-primary"
              @click.prevent="register"
            >
              Sign up
            </button>
          </fieldset>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
        <form class="pure-form space-above">
          <fieldset class="top">
            <legend>Login</legend>
            <input placeholder="username" v-model="usernameLogin" />
            <input
              type="password"
              placeholder="password"
              v-model="passwordLogin"
            />
          </fieldset>
          <fieldset class="bottom">
            <button
              type="submit"
              class="pure-button pure-button-primary"
              @click.prevent="login"
            >
              Login
            </button>
          </fieldset>
        </form>
        <p v-if="errorLogin" class="error">{{ errorLogin }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    HelloWorld,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      usernameLogin: "",
      passwordLogin: "",
      error: "",
      errorLogin: "",
    };
  },
  async created() {
    try {
      let response = await axios.get("/api/users");
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async register() {
      this.error = "";
      this.errorLogin = "";
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post("/api/users", {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = "";
      this.errorLogin = "";
      if (!this.usernameLogin || !this.passwordLogin) return;
      try {
        let response = await axios.post("/api/users/login", {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  },
};
</script>

<style scoped>
.top {
  border-bottom: none;
  margin-bottom: 0px;
}
.bottom {
  border-top: none;
  margin-top: 0px;
}
fieldset {
  width: 60%;
 
  margin: 5px auto;
}
legend {
  font-size: 1.5vw;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}
input {
  font-size: 2vw;
  background-color: rgb(43, 43, 43);
  background-blend-mode: multiply;
  color: white;
}
input:hover {
  background-color: rgb(68, 68, 68);
}
button {
  font-size: 1.5vw;
  background-color: grey;
}
</style>

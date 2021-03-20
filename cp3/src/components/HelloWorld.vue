<template>
  <div class="wrapper">
      <h1 id="title">Stripeify</h1>
      <img src="/images/sound.png" alt="">
      <h3>A music streaming service</h3>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
img {
  margin: 0px auto;
  width: 80%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#title {
  font-size: 80px;
  color: white;
  margin: 0px 0px;
}
@media only screen and (max-width: 700px) {
  #title {
    font-size: 50px;
  }
  h3 {
    font-size: 25px;
  }
}
</style>

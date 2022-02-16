<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/styles/layout.css'
import './assets/styles/framework.css'
import './assets/styles/fontawesome-free/css/all.css'
// import './assets/scripts/jquery.mobilemenu.js'
// import './assets/scripts/jquery.backtotop.js'
// import './assets/scripts/jquery.min.js'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

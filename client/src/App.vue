<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <HeroApp></HeroApp>
    <SearchApp></SearchApp>
    <ContentApp></ContentApp>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import HeroApp from './components/HeroApp'
import SearchApp from './components/SearchApp'
import ContentApp from './components/Content'
export default {
  name: 'app',
  components: {
    HeaderApp,
    HeroApp,
    SearchApp,
    ContentApp
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

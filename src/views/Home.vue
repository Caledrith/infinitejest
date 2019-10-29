<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <headerBar/>
    <MainDisplay msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainDisplay from '@/components/MainDisplay.vue'
import headerBar from '@/components/headerBar.vue'

export default {
  name: 'home',
  components: {
    MainDisplay,
    headerBar
  }
}
</script>

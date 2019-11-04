<template>
  <div class="home">
    <SideNav/>
    <MainDisplay/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainDisplay from '@/components/MainDisplay.vue'
import headerBar from '@/components/headerBar.vue'
import SideNav from '@/components/SideNav.vue'

export default {
  name: 'home',
  components: {
    MainDisplay,
    headerBar,
    SideNav
  }
}
</script>

<style scoped>
.navbar{
  width: 250px;
    float: left;
    height: 100%;
}
.second{
    width: 200px;
    float: left;
    height: 300px;
    margin-left:100px;
}
</style>

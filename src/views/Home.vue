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

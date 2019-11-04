<template>
  <div class="home">
    <v-container fluid class="fill-height">
      <v-row>
        <v-col>
          <SideNav/>
        </v-col>
        <v-col cols="9">
          <MainDisplay/>
        </v-col>
      </v-row>
    </v-container>
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
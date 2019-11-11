<template>
  <div class="home">
    <v-container fluid class="fill-height pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col cols="2" class="pa-0 ma-0">
          <SideNav @choosecategory="sendCategory($event)"/>
        </v-col>
        <v-col cols="10" class="mt-0 pt-0">
          <MainDisplay v-bind:category="category"/>
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
  },
  data: () => ({
    category: 0
  }),
  methods: {
    sendCategory(event) {
      this.category = event
    }
  }
}
</script>
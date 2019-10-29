<template>
  <v-app>
    <headerBar/>

    <v-content>
      <MainDisplay/>
    </v-content>
  </v-app>
</template>

<script>
import headerBar from './components/headerBar';
import MainDisplay from './components/MainDisplay';
import SideNav from './components/SideNav';

export default {
  name: 'App',
  components: {
    MainDisplay,
    headerBar,
    SideNav
  },
  data: () => ({
    //
  }),
};
</script>

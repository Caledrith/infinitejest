<template>
  <v-app>
    <headerBar/>

    <v-content>
      <MainDisplay/>
    </v-content>
  </v-app>
</template>

<script>
import headerBar from './components/headerBar'
import MainDisplay from './components/MainDisplay';

export default {
  name: 'App',
  components: {
    MainDisplay,
    headerBar
  },
  data: () => ({
    //
  }),
};
</script>

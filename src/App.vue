<template>
  <v-app>
    <headerBar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import headerBar from './components/headerBar';

export default {
  name: 'App',
  components: {
    headerBar
  },
  data: () => ({
    //
  }),
};
</script>

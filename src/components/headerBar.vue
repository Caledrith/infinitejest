<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Infinite</span>
        <span class="font-weight-light">JEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Login/>
    </v-app-bar>
</template>
<script>
import Login from '@/components/Login';
export default {
  components: {
    Login
  },
  data: () => ({
  }),
};
</script>
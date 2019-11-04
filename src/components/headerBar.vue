<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Infinite</span>
        <span class="font-weight-light">JEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="store.loggedIn = true; store.user = store.testUser">Test Login</v-btn>
      <v-btn @click="store.loggedIn = false; store.user = {}">Test Logut</v-btn>
      <div v-if="!store.loggedIn">
        <Login/>
      </div>
      <div v-else>
        <v-btn to="/submitJoke">Submit a Joke</v-btn>
      </div>
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
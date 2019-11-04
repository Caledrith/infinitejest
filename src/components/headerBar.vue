<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/')">
        <span>Infinite</span>
        <span class="font-weight-light">JEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
<<<<<<< HEAD
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
=======
      <v-btn @click="store.loggedIn = true; store.user = store.testUser">Test Login</v-btn>
      <v-btn @click="store.loggedIn = false; store.user = {}">Test Logut</v-btn>
      <div v-if="!store.loggedIn">
        <Login/>
      </div>
      <div v-else>
        <v-btn to="/submitJoke">Submit a Joke</v-btn>
      </div>
>>>>>>> 539e0e642e96aa567fcdc2fff440b2ee79e58e2f
    </v-app-bar>
</template>
<script>
import Login from '@/components/Login';
import {dataStore} from '../dataStore.js'

export default {
  components: {
    Login
  },
  data: () => ({
    store: dataStore 
  }),
};
</script>
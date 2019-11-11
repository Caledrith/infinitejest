<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/')" style="cursor: pointer">
        <span>Infinite</span>
        <span class="font-weight-light">JEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="store.loggedIn = true; store.user = store.testUser">Test Login</v-btn>
      <v-btn @click="store.loggedIn = false; store.user = {}">Test Logout</v-btn> -->
      <div v-if="!store.loggedIn">
        <Signup/>
      </div>
      <div v-if="!store.loggedIn">
        <Login/>
      </div>
      <div v-else>
        <v-btn to="/submitJoke">Submit a Joke</v-btn>
      </div>
    </v-app-bar>
</template>
<script>
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import {dataStore} from '../dataStore.js'
export default {
  components: {
    Login,
    Signup
  },
  data: () => ({
    store: dataStore 
  }),
};
</script>
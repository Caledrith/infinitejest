<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/')" style="cursor: pointer">
        <span>Infinite</span>
        <span class="font-weight-light">JEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!store.loggedIn">
        <Signup class="pa-2 mx-1 mt-1"/>
        <Login class="pa-2 mx-1 mt-1"/>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn to="/submitJoke">Submit a Joke</v-btn>
      </v-toolbar-items>
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
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Login</v-card-title>
          <v-form v-model="valid">
          <v-container wrap>
            <v-col>
              <v-text-field
                v-model="userName"
                label="Username"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from 'axios'
import { dataStore } from '../dataStore'

export default {
  // @click signup function -> send data to the database
  data: () => ({
    userName: "",
    password: "",
  }),
  methods: {
    login()
    {
      axios.get('/users/authenticateUser', {
        params:{
          username: this.userName,
          password: this.password
        }
      })
        .then((response) => {
          if(typeof response.data.message !== 'undefined' || response.data.message !== 'fail'){
            dataStore.user = response.data.message
            dataStore.loggedIn = true
          }
        })
      
    }
  },
}
</script>
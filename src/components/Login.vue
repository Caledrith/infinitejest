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
                :type="'password'"
                v-model="userpassword"
                label="Password"
                required
                
              ></v-text-field>
            </v-col>
            <v-col>
              <p v-if="formErrors.length"> Please correct the following errors:
                <ul>
                  <li v-for="formError in formErrors" :key=formError style="color:red">{{ formError }}</li>
                </ul>
              </p>
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
    userpassword: "",
    formErrors: []
  }),
  methods: {
    validateForm() {
      this.formErrors = []
      if (this.userName == "")
        this.formErrors.push("Username Required")
      if (this.userpassword == "")
        this.formErrors.push("Password Required")
      if (this.formErrors.length == 0) {
        return true
      }
      return false
    },
    login()
    {
      if(this.validateForm()) {
      axios.get('/users/authenticateUser/', {
        params:{
          username: this.userName,
          password: this.userpassword
        }
      })
        .then((response) => {
          if(typeof response.data.message !== 'undefined' || response.data.message !== 'fail'){
            dataStore.user = response.data.message
            dataStore.loggedIn = true
          }
        }).catch((response) => {
          this.formErrors.push("User and Password not valid")
        })
      }
    }
  },
}
</script>
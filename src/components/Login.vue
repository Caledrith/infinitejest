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
                v-model="user.userName"
                label="Username"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="user.password"
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

export default {
  // @click signup function -> send data to the database
  data: () => ({
    user: {
      userName: "",
      password: ""
    },
  }),
  methods: {
    login(user)
    {
      axios.post('/users/authenticateUser/', user)
    }
  },
}
</script>
<template>
  <v-row justify="center">
    <v-dialog max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Signup</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Signup</v-card-title>
          <v-form>
          <v-container wrap>
            <v-col>
                <v-text-field
                    v-model="user.name"
                    label="Name"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="user.email"
                    label="Email"
                ></v-text-field>
            </v-col>
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
          <v-btn color="green darken-1" text @click="signup">Signup</v-btn>
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
        name: "",
        email: "",
      userName: "",
      password: ""
    },
  }),
  methods: {
    signup: function() {
      axios.post('/users/createUser/', this.user)
    }
  },
  mounted() {
  }
}
</script>
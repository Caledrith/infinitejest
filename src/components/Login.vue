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
                  v-model="username"
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
          <v-btn color="green darken-1" text @click="dialog = false">Signup</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

export default {
}
</script>
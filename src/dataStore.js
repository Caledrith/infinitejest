import Vue from "vue";

export var dataStore = Vue.observable({
  user: {},
  loggedIn: false,
  testUser: {name: "testUser", password: "password", id: 1}
});
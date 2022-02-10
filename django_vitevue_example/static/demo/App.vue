<template>
  <div class="main">
    <div v-if="!isLoggedIn">
      <h1>Login</h1>
      <div class="mt">
        <input type="text" placeholder="username" v-model="username" />
      </div>
      <div class="mt">
        <input type="password" placeholder="password" v-model="pwd" />
      </div>
      <button class="mt" @click="submitForm()">Submit</button>
    </div>
    <div v-else>
      <h1>Logout</h1>
      <button class="mt" @click="logout()">Logout</button>
      <div class="mt">
        <button class="mt" @click="fetchGet()">Sample GET request</button>
        <div class="mt">{{ responseData }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "./api"

let isLoggedIn = ref(false);
const username = ref("");
const pwd = ref("");
const responseData = ref<Record<string, any>>();

function init() {
  isLoggedIn.value = api.setCsrfStatus(true)
}

async function submitForm() {
  console.log("Loging in", username.value);
  const ok = await api.login(username.value, pwd.value);
  if (!ok) {
    alert("Login failed")
    return
  }
  isLoggedIn.value = true
  pwd.value = ""
}

async function logout() {
  await api.logout();
  isLoggedIn.value = false;
}

async function fetchGet() {
  responseData.value = await api.get<Record<string, any>>("/api/sample");
}

onMounted(() => init())
</script>

<style>
.main {
  padding: 1em;
}
.mt {
  margin-top: 1em;
}
</style>


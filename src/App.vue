<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import Home from './components/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

const route = useRoute()
const home = computed(() => {
  return route.path === '/'
})
const login = computed(() => {
  return route.path === '/login'
})

</script>

<template>
  <Home v-if="home" />
  <Login v-if="login" />
  <Register v-else />
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

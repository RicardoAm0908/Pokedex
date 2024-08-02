<template>
  <Home/>
</template>

<script lang="ts">
// import {ref, onMounted, watch, onUnmounted } from 'vue';
// import { Vue } from 'vue-class-component';
// import { useRoute, useRouter, LocationQueryValue } from 'vue-router';
import Home from './components/Home.vue';

// const route = useRoute();
// const router = useRouter();

export default {
  components: {
    Home,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #DCDCDC;
  padding: 60px 0;
  height: 100%;
}
</style>

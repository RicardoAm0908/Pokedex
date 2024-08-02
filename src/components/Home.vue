<template>
<h1>OLÁ POKEMIGOS</h1>
<span>Esse será meu site pokemon</span>
<HomeCards/>
</template>

<script lang="ts">
import HomeCards from './HomeCards/HomeCards.vue';

export default  {
    name: "HomeView",
    components: {
        HomeCards,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
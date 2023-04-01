<template>
<nav>
    <router-link to="/">Trang chủ </router-link> |
    <router-link to="/about">About</router-link>
</nav>
<router-view />
<NavBar />
<Item />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Item from "@/components/Item.vue";
export default {
    components: {
        NavBar,
        Item
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 1200px;
    margin: 0 auto;
    border: 1px solid #ddd;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>

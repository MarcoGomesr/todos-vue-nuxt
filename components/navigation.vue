<template>
     <nav class="pa3 pa4-ns">
      <nuxt-link exact class="link dim gray    f6 f5-ns dib mr3" to="/">Home</nuxt-link>
      <nuxt-link class="link dim gray    f6 f5-ns dib mr3" to="/active">Active</nuxt-link>
      <nuxt-link class="link dim gray    f6 f5-ns dib mr3" to="/completed">Completed</nuxt-link>
    </nav>
</template>

<style scoped>
a.nuxt-link-active{
  color: black;
  font-weight: bold;
}
</style>


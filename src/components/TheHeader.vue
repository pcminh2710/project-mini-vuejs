<template>
  <div class="app-header">
    <p>{{ title }}</p>
    <router-link to="/">
      <img class="logo" src="../assets/logo.png" alt="" />
      <a class="navbar-brand" href="#"> Vue project mini </a>
    </router-link>
    <div>
      <router-link class="nav-item" tag="li" to="/form-student">
        Student List
      </router-link>
      <router-link class="nav-item" tag="li" to="/form"> Form </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: " taaf" },
  },
};
</script>

<style>
</style>
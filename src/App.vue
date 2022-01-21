<template>
  <div id="app" v-bind:class="currentTheme">
   <the-header :title =" 'minh' "/>
   <!-- <change-background/> -->
    <div class="theme-options">
      <div
        id="theme-red"
        v-bind:class="{ active: currentTheme === 'theme-red' }"
        v-on:click="switchTheme('theme-red')"
      ></div>
      <div
        id="theme-blue"
        v-bind:class="{ active: currentTheme === 'theme-blue' }"
        v-on:click="switchTheme('theme-blue')"
      ></div>
      <div
        id="theme-yellow"
        v-bind:class="{ active: currentTheme === 'theme-yellow' }"
        v-on:click="switchTheme('theme-yellow')"
      ></div>
      <div
        id="theme-dark"
        v-bind:class="{ active: currentTheme === 'theme-dark' }"
        v-on:click="switchTheme('theme-dark')"
      ></div>
      <div
        id="theme-default"
        v-bind:class="{ active: currentTheme === 'theme-default' }"
        v-on:click="switchTheme('theme-default')"
      ></div>
    </div>
    <router-view />
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
// import ChangeBackground from './components/ChangeBackground.vue';
export default {
  components: {
    TheHeader,
    // ChangeBackground
  },
  data() {
    return {
      currentTheme: localStorage.getItem("theme-color"),
    };

  },
  methods: {
    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.currentTheme = localStorage.getItem("theme-color");
    },
  },
};
</script>
<style scope>
.logo {
  height: 50px;
  width: 50px;
}
.app-header {
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
  color: black;
}
a.nav-item {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}
a.nav-item:hover {
  color: rgb(241, 1, 1);
}
</style>

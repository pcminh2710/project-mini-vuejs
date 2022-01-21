<template>
  <div class="container">
    <div class="header text-center mt-3 mb-3">
      <h1>List Student</h1>
      <router-link to="/form">
        <button class="btn btn-success">Add New</button>
      </router-link>
    </div>
    <list-items/>
  </div>
</template>
<script>
import ListItems from './ListItems.vue'
export default {
  components: {
    ListItems,
  }
};
</script>

<style>
</style>
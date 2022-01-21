<template>
  <div class="container">
      <h1 class="text-center"> Danh Sách Sinh Viên Chi Tiết</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FullName</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Information</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <th scope="row" > {{student.id}}</th>
          <td>{{student.name}}</td>
          <td>{{student.email}}</td>
          <td>{{student.phone}}</td>
          <td>{{student.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'students'
        ])
    },
     mounted() {
    this.$store.dispatch('getStudents')
    },
};
</script>

<style>
</style>
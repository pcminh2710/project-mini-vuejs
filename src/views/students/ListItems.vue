<template>
  <div class="list">
      <table class="table">
        <thead>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" v-bind:key="student.id">
            <th scope="row">{{ student.id }}</th>
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <button
                v-on:click="deleteStudent(student.id)"
                class="btn btn-danger mr-3"
              >
                Delete
              </button>
              <button
                v-on:click="edit(student.id)"
                class="btn btn-primary px-4"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link 
        to="/list-detail" 
        >
            <button class="btn btn-success text-center">Xem Danh Sách Chi Tiết Của Sinh Viên </button>
        </router-link>
    </div>
</template>

<script>
import {mapState , mapActions} from 'vuex';

export default {
computed: {
    ...mapState([
      'students'
    ])
  },

  created() {
    this.getStudents()
  },
  methods: {
  ...mapActions([ 'getStudents'/*, 'deleteStudent'*/]),
    deleteStudent(id) {
      this.$swal({
        title: "Bạn có chắc chắn xóa dữ liệu không",
        text: "Nhấn OK để xác nhận hoặc Cancel để hủy thao tác",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        if(result.isConfirmed) {
          this.$request
            .delete("https://61ddbc21f60e8f0017668a09.mockapi.io/vue/mini/students/" + id)
            .then((res) => {
                if(res.data) {
                  this.$swal.fire('Deleted!','','success')
                  this.getStudents()
                }
            });
        }
      });
    },
    edit(id) {
      this.$router.push("/edit/" + id);
    },
  },
}
</script>

<style>

</style>
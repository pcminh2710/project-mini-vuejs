<template>
  <div class="container">
    <div class="text-center">
      <h1>Form created New</h1>
    </div>
    <form @submit.prevent="save()">
      <div class="form-group">
        <label for="fullName"> Full Name </label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          placeholder="Full Name"
          v-model="student.name"
          v-bind:class="{ 'is-invalid': errors.name }"
          @blur="validate"
        />
        <small class="invalid-feedback" v-if="errors.name">
          {{ errors.name }}
        </small>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          v-model="student.email"
          v-bind:class="{ 'is-invalid': errors.email }"
          @blur="validate"
        />
        <small class="invalid-feedback" v-if="errors.email">
          {{ errors.email }}
        </small>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="Phone"
          v-model="student.phone"
          v-bind:class="{ 'is-invalid': errors.phone }"
          @blur="validate"
        />
        <small class="invalid-feedback" v-if="errors.phone">
          {{ errors.phone }}
        </small>
      </div>
      <div class="form-group">
        <label for="description">Introduce yourself</label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          placeholder="Introduce yourself"
          v-model="student.description"
          v-bind:class="{ 'is-invalid': errors.description }"
          @blur="validate"
        />
        <small class="invalid-feedback" v-if="errors.description">
          {{ errors.description }}
        </small>
      </div>
      <button type="submit" class="btn btn-success mr-3" @click="status = true">
        Add
      </button>
      <router-link to="/form-student">
        <button class="btn btn-danger">Back</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import { miXinForm } from "../../mixin/mixinForm.js";
export default {
  mixins: [miXinForm],
  name: "StudentForm",
  data() {
    return {
      status: false,
    }
  },
  methods: {
    // add
    save() {
      if (this.validate())
        this.$request.post("https://61ddbc21f60e8f0017668a09.mockapi.io/vue/mini/students",this.student)
          .then(() => {
            this.$router.push({ name: "StudentList" });
          });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.status == true) {
      next();
    } else {
      this.$swal({
        title: "Dữ liệu của bạn sẽ không được lưu",
        text: "Nhấn OK để xác nhận hoặc Cancel để tiếp tục nhập",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          next();
        }
        next(false);
      });
    }
  },
};
</script>

<style scope>
textarea#productDescription {
  width: 100%;
  height: 100px;
}
</style>
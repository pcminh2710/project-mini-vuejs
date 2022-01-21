import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
    state: {
       students: []
    },
    actions: {
       getStudents({ commit }) {
          axios.get('https://61ddbc21f60e8f0017668a09.mockapi.io/vue/mini/students')
               .then(res => {
                  let students = res.data
                  commit('SET_POSTS', students)
                })
                .catch(error => {
                   console.log(error);
                })
        },
        // deleteStudent({commit}, studentId) {
        //     axios.delete("https://61ddbc21f60e8f0017668a09.mockapi.io/vue/mini/students/"+ studentId)
        //     .then(res => {
        //         if(res.data)
        //         commit('DELETE_STUDENT', studentId)
                
        //     })
        // }
    },
    mutations: {
        SET_POSTS(state, students) {
            state.students = students
        },
        // DELETE_STUDENT(state, studentId) {
        //     state.students = studentId
        // }
    }
})
export default store;
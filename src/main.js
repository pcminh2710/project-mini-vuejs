import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/style.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import store from './store/store.js'
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'

axios.interceptors.request.use(config => {
    nProgress.start()
    return config
})
axios.interceptors.response.use(response => {
    nProgress.done()
    console.log(response)
    return response
},
err => {
    if (err.response.data.message) {
       console.log(err.response.data.message);
        return Promise.reject(err.response.data.message) // Returns the error information returned by the interface
      } else {
        // Error handling when the return status code is not 200
        return Promise.resolve(err)
      }
})

const app = createApp(App).use(router)
app.use(VueAxios, { $request: axios })
app.use(VueSweetalert2)
app.mount('#app')
app.use(store)

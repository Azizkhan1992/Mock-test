import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";
import TokenService from '../services/TokenService'

// Vue.use(VueAxios);

const BASE_URL = 'http://localhost:8000/api/admin';

// axios.get(BASE_URL)
// .catch(function(error){
//     if(error.response){
//         console.log(error.response.status);
//     }else{
//         console.log('Error', error.message);
//     }
// })
// .then(response=>{
//     console.log(response.data)
// })


const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        common:{
            'X-Requested-With': 'XMLHttpRequest'
        },
    }
});

instance.interceptors.request.use(config=>{
    if(TokenService.getToken()){
        config.headers.Authorization = 'Bearer ' + TokenService.getToken();
    }
    return config;
}, error=> Promise.reject(error));

// instance.get('posts')
// .then(response=>{
//     console.log(response.data.data.data)
// })

Vue.prototype.$api= instance;
// Vue.prototype.$appName = 'Mening Dasturim'
import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        products: [],
        cart: []
    },
    mutations:{
        SET_PRODUCTS:(state,products)=>{
            state.products = products;
        },
        SET_CART:(state,product)=>{
            if(state.cart.findIndex(item=>item.article===product.article)>-1){
               const foundProduct= state.cart.find(item=>item===product);
               foundProduct.quantity++;
                    }
            else{
                product.quantity = 1;
                state.cart.push(product);
            }
        },
        DELETE_FROM_CART:(state,index)=>{
            state.cart.splice(index, 1);
        }
    },
    actions:{
        GET_PRODUCTS({commit}){
            return axios('http://localhost:3000/products',{
                method: 'GET'
            })
            .then((products)=>{
                commit('SET_PRODUCTS',products.data);
                return products;
            })
            .catch((error)=>{
                console.log(error);
                return error;
            });
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product);
        },
        DELETE_CART_ITEM({commit}, index){
            commit('DELETE_FROM_CART', index);
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },
        GET_CART_PRODUCT(state){
            return state.cart;
        }
    }
});

export default store;
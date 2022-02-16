<template>
    <div id="catalog-layout">
         <router-link :to="{name: 'cart-layout', params: {cart_data: GET_CART_PRODUCT}}">
            <div class="cart-btn"><b>Savat: {{GET_CART_PRODUCT.length}}</b></div>
        </router-link>
        <div class="catalog-item">
        <catalog-item
        v-for="product in PRODUCTS" :key="product.article"
        :product_data="product" @addToCart= "addToCart"
        />
        </div>
    </div>
</template>
<script>
import CatalogItem from './CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'catalog-layout',
    components:{
        "catalog-item": CatalogItem
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'GET_CART_PRODUCT'
        ])
    },
    methods:{
         ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data);
            console.log(data);
        }
    },
     mounted(){
        this.GET_PRODUCTS()
        .then((response)=>{
            if(response.data){
                console.log("Ma'lumotlar yuklandi!")
                // this.sortCategory();
                // this.sortProductsBySearch(this.SEARCH);
            }
        })
    }
}
</script>
<style>
.cart-btn{
    position: absolute;
    top: 970px;
    right: 15px;
    padding: 15px;
    border: 2px solid blue;
    border-radius: 5px;
    background: chartreuse;
    color: black;
}
.catalog-item{
    margin-top: 75px;
    min-width: 900px;
    min-height: 1000px;
    margin-left: 25px;
    display: flex;
    flex-wrap: wrap;
    /* border: 2px solid green; */
    justify-content: space-around; 
    align-items: center;
    top: 25px;
}
/* #catalog-layout{
    position: relative;
} */
</style>
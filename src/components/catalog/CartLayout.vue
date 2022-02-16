<template>
    <div class="cart-layout">
        <p v-if="cart_data.length">Savat bo'sh</p>
        <cart-item
        v-for="(item,index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteCartItem="deleteCartItem(index)"
        />
    </div>
</template>
<script>
import CartItem from './CartItem.vue'
import {mapActions} from 'vuex'
export default {
    name: 'cart-layout',
    components:{
        "cart-item": CartItem
    },
    props:{
        cart_data:{
            type: Array,
            default(){
                return []
            }
        }
    },
    // computed:{
    //     cartTotalCost(){
    //         let result=[]

    //         if(this.cart_data.length){
    //             for(let item of this.cart_data){
    //             result.push(item.price*item.quantity)
    //         }
    //         result=result.reduce(function(sum,el){
    //             return sum+el;
    //         })
    //          return result;
    //         }
    //        else{
    //            return 0;
    //        }
    //     }
    // },
    methods:{
        ...mapActions([
            'DELETE_CART_ITEM'
        ]),

        deleteCartItem(index){
            this.DELETE_CART_ITEM(index);
        }
        // clicked(item){
        //     console.log(item)
        // }
    }
}
</script>
<style>
.cart-layout{
    margin: 0 auto;
}
</style>
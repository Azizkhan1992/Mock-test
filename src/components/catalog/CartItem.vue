<template>
    <div class="cart-item-data">
        <img :src="require('../../assets/images/catalog/'+ cart_item_data.image)" class="cart-image">
        <div class="cart-data">
        <p>{{cart_item_data.name}}</p>
        <p>Narxi: {{cart_item_data.price}} So'm</p>
        <p>{{cart_item_data.article}}</p>
        </div>
        <div>
            <p>Quantity: {{cart_item_data.quantity}}</p>
        </div>
        <button id="delete-btn" @click="deleteCartItem">Qaytarish</button>
    </div>
</template>
<script>
export default {
    name: 'cart-item',
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        deleteCartItem(){
            this.$emit('deleteCartItem');
        }
    },
    mounted(){
        this.$set(this.cart_item_data, 'quantity', 1);
    }
}
</script>
<style>
.cart-item-data{
     display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px 0;
    padding: 15px;
    margin: 10px;
}
/* .cart-data{
    
} */
.cart-image{
    max-width: 100px;
    max-height: 150px;
}
#delete-btn{
    background: yellowgreen;
    box-shadow: 5px 0 5px 0;
    border-radius: 5px;
    padding: 15px;
    color: black;
    font-size: 15px;
}
</style>
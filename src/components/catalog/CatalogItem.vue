<template>
    <div id="catalog-item">
        <img :src="require('../../assets/images/catalog/'+product_data.image)" id="catalog-image">
        <p>{{product_data.name}}</p>
        <p>Narxi: {{product_data.price}} So'm</p>
        <button class="btn btn-primary"
        id="add-to-cart" 
        @click="add_to_cart">Korzina</button>
    </div>
</template>
<script>
export default {
    name: 'catalog-item',
    props:{
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        add_to_cart(){
            this.$emit('addToCart', this.product_data);
            // console.log("Siz tanladingiz")
        }
    }
}
</script>
<style>
#catalog-item{
    min-height: 300px;
    /* border: 2px solid blue; */
    margin: 5px 5px;
    flex-basis: 20%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 15px;
    box-shadow: 0 0 8px 0;
    
}
#catalog-image{
    margin-top: 10px;
    max-width: 350px;
    max-height: 250px;
}
#add-to-cart{
    border: 0;
    border-radius: 5px;
    cursor: pointer;
}
</style>
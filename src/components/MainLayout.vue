<template>
    <div class="main-layout">
        <HeaderLayout/>
        <router-view/>
        <FooterLayout/>
    </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
export default {
    name: 'main-layout',
    components:{
        HeaderLayout,
        FooterLayout,
    },
   mounted(){
       
   },
    methods:{
      
    }
}
</script>
<style>
.main-layout{
    margin: 0 auto;
}
</style>
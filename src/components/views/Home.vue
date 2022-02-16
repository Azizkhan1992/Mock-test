<template>
<div>
 <div class="v-main-page">
   <div id="wrapper row3">
        <h1>Online Shop</h1>  
        <router-link :to="{name:'catalog-layout'}">
            <h2>to Catalog</h2>
        </router-link> 
        </div>
 </div>

        <div class="wrapper row3">
  <section class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <p class="nospace font-xs">Id erat duis nibh diam at</p>
      <h6 class="heading">Vulputate quis lacus nullam</h6>
    </div>
    <ul id="stats" class="nospace group">
      <li><i class="fas fa-id-badge"></i>
        <p><a href="#">123</a></p>
        <p>Augue dui convallis</p>
      </li>
      <li><i class="fas fa-skull"></i>
        <p><a href="#">1234</a></p>
        <p>Id ullamcorper</p>
      </li>
      <li><i class="fas fa-umbrella"></i>
        <p><a href="#">12345</a></p>
        <p>Malesuada interdum</p>
      </li>
      <li><i class="fas fa-store-alt"></i>
        <p><a href="#">6789</a></p>
        <p>Tristique viverra</p>
      </li>
    </ul>
    <!-- ################################################################################################ -->
  </section>
</div>
</div>
</template>

<script>

export default {
    name: 'home',
    data(){
      return{
      
      }
    },
    components:{
      
    },
    created() {
        // this.getData();
    },
    methods: {
        // getData() {
          
        //     this.$api.get('explore')
        //     .then(response => {console.log(response.data.data.data)
        //         this.postList = response.data.data.data.map(item => {

        //             return item;
        //         });
                
        //     }, error => console.error(error))
        // },
        // showPostList(){
        //   console.log(this.postList[3].id);
        // }
    }
}
</script>
<style>
.v-main-page{
  position: static;
  height: 500px;
  margin-left: 5%;
  width: 90%;
  background-size: cover;
  background-image: url(../../assets/images/image_1.jpg);
}
h1{
  font-size: 100px;
}
h2{
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 50px;
}
</style>
<template>
    <div class="wrapper row3">
          <button @click="showPostList">Button</button>
    <main class="hoc container clear"> 
    <section id="introblocks">
      <ul class="nospace group">
        <li class="one_third" v-for="(post, idx) in postData" :key="idx">
          <!-- <button @click="showPostList">Button</button> -->
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">{{post.body}}</h6>
              <p>Ipsum eu ipsum donec ac orci sed lectus elementum fringilla nullam dictum nisi nec mauris phasellus ut lacus.</p>
            </figcaption>
          </figure>
        </li>
        <!-- <li class="one_third">
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">Volutpat sed quis</h6>
              <p>Vel nisi semper adipiscing maecenas sodales elit cras porttitor diam aliquam turpis quisque rhoncus tincidunt.</p>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">Leo phasellus sit</h6>
              <p>Arcu ut auctor nunc ac mi vivamus aliquam maecenas in lorem vel tellus porttitor placerat quisque tellus nulla.</p>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">Amet lorem odio</h6>
              <p>Facilisis et mattis id consectetuer vel nunc donec sagittis purus sit amet est pellentesque elit dolor mattis.</p>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">Semper aliquam duis</h6>
              <p>Ac lobortis sed cursus at magna vivamus laoreet orci vel tortor in nisi in porttitor vulputate arcu integer.</p>
            </figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><a class="imgover" href="#"><img src="images/demo/348x220.png" alt=""></a>
            <figcaption>
              <h6 class="heading">Tempus mauris morbi</h6>
              <p>Pretium curabitur lacinia aenean eu lectus maecenas at urna morbi porta est a mi duis felis nunc lobortis ut.</p>
            </figcaption>
          </figure>
        </li> -->
      </ul>
    </section>
    <!-- ################################################################################################ -->
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
</template>
<script>
export default {
    name: 'descript',
    props:{
        postData:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
         showPostList(){
          console.log(this.postData[3].id);
        }
    }
}
</script>
<template>
    <div>
       <v-row class="pa-5">
           <v-col
           cols="12"
           md="2"
           offset-md="10"
           >
           <router-link to="/admin/blog/add">
            <v-btn class="mx-2"
            color="indigo"
            fab
            dark>
            <v-icon dark>
                mdi-plus
            </v-icon>
            </v-btn>
           </router-link>
           </v-col>
           <v-col cols="12"
           sm="12"
           md="12"
           >
           <table>
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>Image</th>
                       <th>Status</th>
                       <th>Created</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   <template v-if="posts.length>0">
                       <tr v-for="(item, idx) in posts" :key="idx">
                           <td>{{item.title}}</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                   </template>
                   <tr v-else>
                       <td colspan="5">No Data</td>
                   </tr>
               </tbody>
           </table>

           </v-col>
       </v-row>
    </div>
</template>
<script>
export default {
    name: 'BlogIndex',
    data(){
        return{
            posts: []
        }
    },
    created(){
        this.load()
    },
    mounted(){
        this.showPost();
    },
    methods:{
        load(){
            this.$api.get('posts')
            .then(response=>{
                this.posts = response.data.data.data;
            }, error=> console.log(error))
        },
        showPost(){
            console.log(this.posts);
        }
    }
}
</script>
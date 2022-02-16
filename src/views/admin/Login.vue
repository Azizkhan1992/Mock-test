<template>
    <div id="app">
  <v-app :dark="darkTheme" id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                              outline
                              label="UserEmail"
                              type="text"
                              :rules="useremail_rule"
                              :counter="100"
                              v-model="form.email"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="form.password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click="login">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>
<script>
import TokenService from '@/services/TokenService'
export default {
    name: 'login',
    data(){
        return{
            darkTheme: true,
            valid: false,
            form: {
                email: 'person@gmail.com',
                password: 'per123'
            },
            useremail_rule:[
        v => !!v || 'Username is required',
        v => (v && v.length >= 2) || 'Username must be more than 2 characters',
        v => (v && v.length <= 100) || 'Username must be less than 10 characters',
      ],
    }
},
    methods:{
        login(){
           this.$api.post('login', this.form)
            .then(response => {
              console.log("Login kiritildi!")
            const res = response.data.data;
            if (res.token) {
              // console.log('Token bor!')
                TokenService.saveToken(res.token);
                TokenService.saveExpireTime((new Date()).addHours(res.expires_in / 3600));
                this.$router.push({name: 'home'});
        }
      },    error => console.log(error))
        }
    }
}
</script>
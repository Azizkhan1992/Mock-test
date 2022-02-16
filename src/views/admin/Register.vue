<template>
<div id="app">
    <div>
    </div>
<v-app :dark = "darkTheme" id="inspare">
    <v-container>
        <v-layout wrap>
        <v-flex sm6 md9 offset-md2>
            <v-card elevation="4" light tag="section">
                <v-card-text>
                <v-form
                v-model="valid"
                >
    <v-text-field
      v-model="form.name"
      :counter="25"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-text-field
        outline
        hide-details
        :rules="passwordRules"
        required
        label="Password"
        type="password"
        v-model="form.password"
    ></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select> -->

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <!-- <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn> -->

    <!-- <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn> -->

            </v-form>
                </v-card-text>
                <v-divider></v-divider>
        
        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-spacer></v-spacer>
    <v-btn
      color="info"
      :large="$vuetify.breakpoint.smAndUp" @click="register"
    >
      Register
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
export default {
    name: 'register',
    data(){
        return{
    valid: false,
    darkTheme: true,
    form: {
        name: null,
        email: null,
        password: null
    },
    nameRules: [
      v => !!v || 'Ism kiritilishi shart',
      v => (v && v.length <= 25) || "Ism 25 harfdan katta bo'lishi mumkin emas",
    ],
    emailRules: [
      v => !!v || 'E-mail kiritilishi shart',
      v => /.+@.+\..+/.test(v) || "E-mail to'g'ri kiritilishi shart",
    ],
    passwordRules:[
        v => !!v || 'Paroll kiritilishi shart'
    ]
    }
},
        methods:{
            register(){
                console.log("Jo'natildi");
                this.$api.post('register', this.form)
                .then(response=>{
                    console.log(response);
                }, error=>console.log(error))
            }
        }
        
}
</script>
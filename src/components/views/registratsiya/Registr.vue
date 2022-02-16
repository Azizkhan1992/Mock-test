<template>
    <div class="reg">
        <h2>Registratsiya</h2>
        <!-- <pre>
            {{ $v.formData.name }}
        </pre> -->
        <!-- <div>
            {{formData.name}}
            <hr>
            {{formData.lastname}}
            <hr>
            {{formData.email}}
            <hr>
            {{formData.password}}
        </div> -->
        <div class="container mt-6">
            <div class="row">
                <div class="col-sm-4 mx-auto">
        <form>
            <div class="mb-4">
    <label for="name">Ism</label>
    <input type="text" @blur="$v.formData.name.$touch()" v-model.trim="formData.name" 
    class="form-control" :class="{'is-invalid': $v.formData.name.$error}" id="name">

    <div v-if="!$v.formData.name.required" class="invalid-feedback">
        Ism kiritilishi shart
      </div>
  </div>

  <div class="mb-4">
    <label for="lastname">Familiya</label>
    <input type="text" @blur="$v.formData.lastname.$touch()"
    :class="{'is-invalid': $v.formData.lastname.$error}"
    v-model.trim="formData.lastname" class="form-control" id="lastname">

    <div v-if="!$v.formData.lastname.required" class="invalid-feedback">
        Familiya kiritilishi shart
      </div>
  </div>

  <div class="mb-4">
    <label for="emai" class="form-label">Email address</label>
    <input type="email" :class="{'is-invalid': $v.formData.email.$error}"
    v-model.trim="formData.email" @blur="$v.formData.email.$touch()"
    class="form-control" id="email">

    <div v-if="!$v.formData.email.required" class="invalid-feedback">
        E-mail kiritilishi shart
      </div>

       <div v-if="!$v.formData.email.email" class="invalid-feedback">
        E-mail formatda kiriting
      </div>
  </div>

  <div class="mb-4">
    <label for="password" class="form-label">Password</label>
    <input type="password" @blur="$v.formData.password.$touch()"
    :class="{'is-invalid': $v.formData.password.$error}"
    v-model.trim="formData.password" class="form-control" id="password">

    <div v-if="!$v.formData.password.required" class="invalid-feedback">
        Parol kiritilishi shart
      </div>
      <div v-if="!$v.formData.password.minLength" class="invalid-feedback">
        Kamida 6 raqam
      </div>
  </div>
  <button type="submit" class="btn btn-primary" :disabled="disabledRegister">Submit</button>
</form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { required,email,minLength } from 'vuelidate/lib/validators'

export default {
    name: 'registr',
    data(){
        return{
            formData:{
                name: '',
                lastname: '',
                email: '',
                password: ''
            }
        }
    },
    validations:{
        formData:{
            name:{
                required
            },
            lastname:{
                required
            },
            email:{
                required,
                email
            },
            password:{
                required,
                minLength: minLength(6)
            }
        }
    },
    computed:{
        disabledRegister(){
            return this.$v.formData.name.$invalid ||
                    this.$v.formData.lastname.$invalid ||
                    this.$v.formData.email.$invalid ||
                    this.$v.formData.password.$invalid
        }
    },
    methods:{
    }
}
</script>
<style>
.reg{
    margin: 0 auto;
}
</style>
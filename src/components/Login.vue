<template>

<div class="login">
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
             <img src="../../images/sanAngel.png">
              </div>
              <h1>San Angel</h1>
              <h6 class="font-weight-light"> Centro oftalmológico. Bendición para tus ojos</h6>
              <form class="pt-3">
                <div class="form-group">
                  <input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="password" v-model="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" v-on:click="signIn">SIGN IN</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="mb-2">
                  <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                    <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account? <router-link to="/sign-up"> Let´s create one</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>

</div>


  <!--<div class="login">
    <h3> Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"> <br>
    <input type="password" v-model="password" placeholder="Password"> <br>
    <button v-on:click="signIn"> Connection</button>
    <p> You don´t have an account? You can create one<router-link to="/sign-up"> Let´s create one</router-link></p> <!-- This is a router link
  </div> -->
</template>

<script>
  import firebase from 'firebase'
  export default {
    name:'login',
    data: function () {
      return{
        email: '',
        password: ''
      }

    },
    methods:{
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
           (user)=> {
           this.$router.replace('hello')

          },
          (err)=> {
            alert('Opps something went wrong'+ err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>/* "Scoped" attribute limit the css to this component only */

  p a{
    text-decoration: underline;
    cursor: pointer;
  }
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

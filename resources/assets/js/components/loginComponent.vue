<template>
	<section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="img/generic-avatar-500x500.png" width=128>
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" v-model='email' placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" v-model='password' @keyup.enter="login()" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <a class="button is-block is-info is-large" :class="{'is-loading':loading}" @click="login()">Login</a>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  name: 'login',

  data () {
    return {
    	email:'',
    	password:'',
      loading: false,
    }
  },
  methods:{
  	login(){

      this.loading = true;

  		/**
  		 * login request
  		 */
  		axios.post('api/login',{'email':this.email, 'password':this.password})
  		.then(response=>{
  			console.log(response.data.success.token);
  			axios.defaults.headers.common['Authorization'] = 'Bearer '+response.data.success.token;

  			/**
  			 * get detail of logged in user
  			 */
  			axios.get('api/user')
  			.then(response=>{
  				console.log(response.data);
  				this.$bus.$emit('loggedin',response.data); //emit loggedin event on successfull login
          this.loading = false;
  			})
  			.catch(error=>{
          /**
           * Error when retrieving user data
           */
  				console.log(error.response.data.message);
  				alert(error.response.data.message);
          this.loading = false;
  			});
  		})
  		.catch(error=>{
        /**
         * Error when logging in
         */
  			console.log(error.response.data.message);
  			alert(error.response.data.message);
        this.loading = false;
  		})
  	}
  }
}
</script>

<style lang="css" scoped>
	
	.hero.is-success {
	  background: #F2F6FA;
	}
	.hero .nav, .hero.is-success .nav {
	  -webkit-box-shadow: none;
	  box-shadow: none;
	}
	.box {
	  margin-top: 5rem;
	}
	.avatar {
	  margin-top: -70px;
	  padding-bottom: 20px;
	}
	.avatar img {
	  padding: 5px;
	  background: #fff;
	  border-radius: 50%;
	  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
	  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
	}
	input {
	  font-weight: 300;
	}
	p {
	  font-weight: 700;
	}
	p.subtitle {
	  padding-top: 1rem;
	}
</style>
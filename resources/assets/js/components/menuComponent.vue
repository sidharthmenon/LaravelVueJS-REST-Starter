<template>
<nav class="navbar is-success">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive=isActive?false:true;" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{'is-active': isActive}">
    <div class="navbar-start">

      <router-link v-for="item in menu" v-if="!item.hasChild" class="navbar-item" :to="item.path" :key="item.id" >{{item.name}}</router-link>

      <div v-for="item in menu" v-if="item.hasChild" class="navbar-item has-dropdown is-hoverable">
        
        <router-link class="navbar-link" :to="item.path" >
          {{item.name}}
        </router-link>

        <div class="navbar-dropdown">
          <router-link v-for="child in item.children" class="navbar-item" :to="child.path" :key="child.id" >
            {{child.name}}
          </router-link>
        </div>

      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="#" @click="logout()">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Logout</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

  name: 'main-menu',

  data () {
    return {
    	isActive: false,
    	menu: [
    		{
    			name: "Home",
    			path: "/home",
    			hasChild: false
    		},
    		{
    			name: "Menu1",
    			path: "/home/login",
    			hasChild: true,
    			children: [
    				{
    					name: "Test",
    					path: "/1"
    				},
    				{
    					name: "Test 2",
    					path: "/2"
    				}
    			]
    		},
    		{
    			name: "People",
    			path: "/home/login",
    			hasChild: false
    		}
    	]
    }
  },
  methods:{
    logout: function(){
      this.$bus.$emit('loggedout');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
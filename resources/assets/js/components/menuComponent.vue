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
	  <a v-for="item in menu" v-if="!item.hasChild" class="navbar-item" :href="item.path">
        {{item.name}}
      </a>
      <div v-for="item in menu" v-if="item.hasChild" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" :href="item.path">
          {{item.name}}
        </a>
        <div class="navbar-dropdown">
          <a v-for="child in item.children" class="navbar-item" :href="child.path">
            {{child.name}}
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="#">
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
    			path: "#/home",
    			hasChild: false
    		},
    		{
    			name: "Menu1",
    			path: "/home",
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
    			path: "#/home/login",
    			hasChild: false
    		}
    	]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
<template>
<div id="navBar">
      <router-link id="nav" to="/home" @click="logout" >Log Out</router-link>

      <router-link
            id="nav"
            class="dropMenu" to="/FlowerPage">Catalogue</router-link>

      <div id="subMenu">
          <router-link
            class="subNav"
            to="/Bouquets">Bouquets</router-link>

          <router-link
            class="subNav"
            to="/VaseArrangements">Arrangements</router-link>

          <router-link
            class="subNav"
            to="/Planters">Planters</router-link>
      </div>

      <router-link id="nav" to="/About">About Us</router-link>
      <router-link id="nav" to="/Contact">Contact Us</router-link>
    </div>
</template>
<script>
export default{
  name:"AlternateNavbar",
  data(){
    return{
      userLoggedIn:false,
    }
  },
  beforeMount(){
    if(localStorage.loggedIn == "true"){
      this.userLoggedIn=true;
      console.log("yeet");
    }else{
      this.userLoggedIn=false;
      console.log("yaw");
    }
  },
  methods:{
    logout:function(){
      console.log(localStorage.userName, localStorage.loggedIn);
      localStorage.userName = "";
      localStorage.loggedIn = false;
      this.userLoggedIn = false
      console.log(localStorage.userName, localStorage.loggedIn);
      this.$router.push("home");
      // return false;
    }
  },
}
</script>

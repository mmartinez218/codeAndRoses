<link href="https://fonts.googleapis.com/css?family=Cormorant|Hind+Vadodara" rel="stylesheet"/>

<template>
<div id="homePage">
  <div id="header">
    <h1>Code & Roses</h1>
    <div id="navBar">
      <router-link id="nav" to="/home">Code & Roses</router-link>
      <router-link id="nav" to="/SignUp" v-if="userLoggedIn == false">Sign Up</router-link>
      <router-link id="nav" to="/Login" v-if="userLoggedIn == false">Login</router-link>
      <button id="nav" v-if="userLoggedIn == true" @click="logout">Logout</button>

      <router-link
            id="nav"
            class="dropMenu"
            to="/FlowerPage">Catalogue</router-link>

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
   </div>
   <div id="rView">
        <router-view/>
   </div>

   <div id="footer">
      <router-link id="nav" to="/">Code & Roses</router-link>
      <router-link id="nav" to="/SignUp">Sign Up</router-link>
      r<router-link id="nav" to="/FlowerPage">Catalogue</router-link>
      <router-link id="nav" to="/About">Cart</router-link>
   </div>
  </div>

</template>
<script>
export default{
  name:"App",
  data(){
    return{
      userLoggedIn:false,
    }
  },
  beforeMount(){
    if(localStorage.loggedIn){
      this.userLoggedIn=true
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
    }
  },
}
</script>
<style>
#banner{
    background-color: red;
    width: auto;
    height: 37em;
    margin-top: 2em;
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("./imgs/colorful-dream-wallpaper-flower-wallpaper-5a9d848eeb97de0036179d40.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

#bannerCon{
    background-color: white;
}

#bannerDesc{
    text-align: center;
}

#button{
    border: 2px solid #2E0A38;
    color: white;
    font-size: 15px;
    width: auto;
    height: auto;
    border-radius: 2px;
    background-color: #2E0A38;
    margin: 0.8em 0.8em 0.8em 0;
    padding: 0.2em 0.5em 0.2em 0.5em ;
}

#button:hover {
    color: #2E0A38;
    background-color: white;
}

#footer{
    z-index: 2;
    left: 0;
    font-size: 0.8em;
    position: fixed;
    top: 95vh;
    background-color:#2E0A38;
    height: 3em;
    width: 100%;
    margin-right: 4em;
}

h1{
    color:white;
    font-size: 5em;
    font-family: 'Cormorant', serif;
    font-weight: 50;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2{
    color:#2E0A38;
    font-size: 3em;
    text-align: center;
}

h3{
    text-align: center;
    font-size: 4em;
    margin: auto;
}

h4{
    text-align: center;
    font-size: 1.5em;
    margin: auto;
}

#header{
    background-color: blue;
    z-index: 2;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 13em;
    background-image:url(./imgs/misy-blossoms-desktopnexus-flower-wallpaper-5a9d7a928e1b6e003666eadc.jpg);
    background-size: 100% auto;
    background-position:bottom;
}
.homeGallery{
    width: 100%;
    height: auto;
    display: flex;
    float: left;
    justify-content: center;
}

#galleryBox{
    opacity: 0;
    background-color: brown;
    margin-top: 7em;
    padding: 1.5em;
    width: 62%;
    height: 45%;
    position:absolute;
    z-index: 3;
    background-color:rgba(248,237,255,0.9);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 65%;

}

#galleryBox:hover{
    opacity: 1;
}

.galleryCon{
    position: relative;
    display: flex;
    flex-direction: column;
   /* background-color:green;*/
    width: 17em;
    height: auto;
    margin: 0em 3em 0em 3em;
    padding: 0em 1em 5% 1em;
    z-index: 1;
    border-style: solid;
    border-color: #F8EDFF;
    border-radius: 5px;
    align-items: center;
}

.galleryImgs{
    position: relative;
    width: 100%;
    height: 80%;
    z-index: 1;
    border-style: solid;
    border-color: #2E0A38;

}

.galleryImgs:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

#map{
    width:50%;
    float: left;
    margin-right: 1em;
}
#money{
        width: 3em;
}

#navBar {
    position:fixed;
    padding: 30px;
    background-color:#2E0A38;
    height: 0.1em;
    width: 100%;
    top: 13em;
    font-family: 'Hind Vadodara', sans-serif;
    border: 2px solid #2E0A38;

   /**
    background-color: yellow;
    **/
}

#navBar a {
  color: #F8EDFF;
  position: relative;
  bottom: 0.5em;
  padding: 1.4em;
  text-decoration: none;

}
/**
#navBar a.router-link-exact-active {
  color: #42b983;
}
   **/
#nav:hover {
  color: #2E0A38;
  background-color: white;
}

.price{
    font-weight: 600;
    text-align: center;
    }

#rView{
    position:relative;
    top:15.6em;
    overflow: scroll;


}

#subMenu{
    display: flex;
    flex-direction: column;
    position: absolute;
    top:4.5em;
    left:22.5em;
    width: 150px;
    height: 100%;
    text-decoration: none;

    }

.subNav{
    border-bottom: 5px solid #2E0A38;
    background-color: #500F62;
    display: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.subNav:hover{
    background-color: #2E0A38;

}

.dropMenu:hover .subNav{
    display: block;
}


#title{
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 0;
}
/** indProduct.vue styles **/
#indProduct{
        margin-bottom: 3em;
}
#indDescription{
    font-size: 1em;
    color: #2E0A38;
    font-family: 'Hind Vadodara', sans-serif;
    margin-bottom: 1em;
}
#indImg{
    width: 40%;
    float: left;
    margin-right: 2em;
    }



</style>

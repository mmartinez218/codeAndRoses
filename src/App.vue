  <link href="https://fonts.googleapis.com/css?family=Cormorant|Hind+Vadodara" rel="stylesheet"/>
<template>
  <div id="header">
    <h1>Create Item</h1>
    <div id="navBar">
      <router-link id="nav" to="/">Code & Roses</router-link>|
      <router-link id="nav" to="/SignUp">Sign Up</router-link> |<router-link id="nav" to="/FlowerPage">Catalogue</router-link> |
      <router-link id="nav" to="/About">Cart</router-link>
    </div>
      <div id="rView">
    <router-view/>
          </div>
  </div>
</template>

<style>

#navBar {
  position:fixed;
  padding: 30px;
  background-color:#2E0A38;
  height: 0.1em;
  width: 100%;
  top: 10em;
  font-family: 'Hind Vadodara', sans-serif;

   /** 
    background-color: yellow;
    **/
}
    
#navBar a {
  color: #F8EDFF;
  position: relative;
  bottom: 0.5em;
  padding: 1.4em;

}

#navBar a.router-link-exact-active {
  color: #42b983;    

} 
#nav:hover {
  color: #2E0A38;    
  background-color: #F8EDFF;

    

}  
#header{
    background-color: blue;
    z-index: 2;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10em;
    background-image:url(./imgs/misy-blossoms-desktopnexus-flower-wallpaper-5a9d7a928e1b6e003666eadc.jpg);
    background-size: 65em 40em;
    background-position: center;
    background-attachment: fixed;
    }
    
#rView{
    position:relative;
    top:15em;
    z-index: 1;
    
        
    }
</style>

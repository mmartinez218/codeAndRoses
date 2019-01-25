<link href="https://fonts.googleapis.com/css?family=Cormorant|Hind+Vadodara" rel="stylesheet"/>
<template>
  <div id="header">
    <h1>Code & Roses</h1>
    <div id="navBar">
      <router-link id="nav" to="/">Code & Roses</router-link>|
      <router-link id="nav" to="/SignUp">Sign Up</router-link> |
      <router-link id="nav" to="/FlowerPage">Catalogue</router-link> |
      <router-link id="nav" to="/About">Cart</router-link>
    </div>
    
    <div id="rView">
        <router-view/>
    </div>
      
    <div id="footer">
      <router-link id="nav" to="/">Code & Roses</router-link>|
      <router-link id="nav" to="/SignUp">Sign Up</router-link> |
      r<router-link id="nav" to="/FlowerPage">Catalogue</router-link> |
      <router-link id="nav" to="/About">Cart</router-link>
    </div>
  </div>

</template>

<style>
#button{
    border: 2px solid #2E0A38;
    color: white;
    font-size: 15px;
    width: auto;
    height: 2em;
    border-radius: 2px;
    background-color: #2E0A38;
    margin-right: 0.8em;
    padding: 0em 0.5em 0em 0.5em ;
}

#button:hover {
    color: #2E0A38;
    background-color: white;
    
}
    
#footer{
    font-size: 0.8em;
    position: absolute;
    top: 90em;
    background-color:#2E0A38;
    height: 3em;
    width: 100%;
    margin-right: 4em;
}
h1{
    color:white;
    font-size: 4em;
    font-family: 'Cormorant', serif;
    text-align: center;
    font-weight: 50;
}
h2{
    color:#2E0A38; 
        
        
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
    #money{
        width: 3em;
    }
 
#navBar {
    position:fixed;
    padding: 30px;
    background-color:#2E0A38;
    height: 0.1em;
    width: 100%;
    top: 10em;
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

}

#navBar a.router-link-exact-active {
  color: #42b983;    

} 
    
#nav:hover {
  color: #2E0A38;    
  background-color: white;
}  

#rView{
    position:relative;
    top:15em;
    z-index: 1;
    
        
    }
</style>

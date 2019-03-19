<template>
<div id="navBar">
      <router-link id="nav" to="/home">Home</router-link>
        
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
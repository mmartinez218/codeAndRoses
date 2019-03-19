<template>
<div id="ok">
      <button class="AddItem"> 
       <router-link id="nav" to="/SignUp">Sign Up</router-link> 
    </button>
      <button class="AddItem"> 
      <router-link id="nav" to="/Login">Login</router-link>
    </button>
    </div>
</template>
<style>
#ok {
        align-content: center;
        height: 100px;
        width: auto;
        text-align: center;
    }
    
    .AddItem {
        font-family: 'Montserrat', sans-serif;
        font-size: 3em;
        color: white;
        background-color: #2E0A38;
        border-color: 50px solid #2E0A38;
        padding: 15px;
        border-radius: 20px;
    }
    
    .AddItem:hover {
        border-color: #2E0A38;
        color: #2E0A38;
        background-color: white;
        box-shadow: 1px 2px #2E0A38;
    }
    
    
</style>
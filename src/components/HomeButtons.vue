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
        font-size: 1em;
        color: white;
        background-color: #2E0A38;
        border-color: 50px solid #2E0A38;
        padding: 15px;
        border-radius: 5px;
        float: right;
        margin-top: 10px;
        margin-right: 15px;
    }
    
    .AddItem:hover {
        border-color: #2E0A38;
        color: #2E0A38;
        background-color: white;
    }
    
    
</style>
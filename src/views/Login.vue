<template>
  <div id="form" >
      <Navbar/>
      <h2> Login</h2>
        <form>
            <p id="formHeading">Email: </p>
            <input type="email" v-model="message" placeholder="Email" name="email">

            <p id="formHeading">Password: </p>
            <input type="password" v-model="message" placeholder="Choose a password" name="password">

            <button id="button" @click="submit">Login</button>
            
            <button id="button"> 
        <router-link 
            to="/Home">Cancel</router-link> 
          </button>
       
        </form>
      <button id="button"> 
        <router-link 
            to="/adminLogin">Admin Login</router-link> 
          </button>
      
      <br><br><br>
            <div id="cc">
            Don't have an account?
            <button id="button"> 
        <router-link 
            to="/SignUp">Create an Account</router-link> 
          </button>
            </div>
    </div>
</template>
<script>
    import Navbar from '@/components/Navbar'

    export default{
        
    components: {
        Navbar
      }
    }
</script>
<style>
    
#form{
    margin: auto;

    height: auto;
    border-style: solid;
    border-color: #F8EDFF;
    border-radius: 5px;
    padding: 1.5em 2em 1.5em 4.5em;
}

form{
    width: 11em;
    height: auto;
}
#formHeading{
    font-size: 1.1em;
    color:#2E0A38;
    margin-bottom: 0.5em;
    font-family: 'Montserrat', sans-serif;
}

input{
    height: 2em;
    width: 30em;
    font-size: 15px;
}

input:hover{
    border-color: #2E0A38;
}

input:focus{
    border-color: #2E0A38;
}
</style>

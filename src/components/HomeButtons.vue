<template>
<div>
<template v-if="userLoggedIn == false">
<div id="ok">
      <button class="AddItem">
       <router-link id="nav" to="/SignUp">Sign Up</router-link>
    </button>
      <button class="AddItem">
      <router-link id="nav" to="/Login">Login</router-link>
    </button>
    </div>
</template>
<button id="button" v-else @click="logout">Logout</button>
</div>
</template>
<script>
export default{
  name:"HomeButtons",
  data(){
    return{
      userLoggedIn:false,
    }
  },
  beforeMount(){
    console.log(localStorage.loggedIn, "yeetApp.vue");
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
      localStorage.adminLoggedIn = false;
      this.userLoggedIn = false
      console.log(localStorage.userName, localStorage.loggedIn);
      this.$router.push("home");
      // return false;
    }
  },
}
</script>
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

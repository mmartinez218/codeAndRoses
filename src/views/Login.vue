<template>
  <div>
    <div v-if="loading" id="app">
       <h3>Loading</h3>
       <div style="text-align: center">
         <cube-spin></cube-spin>
       </div>
     </div>
    <div v-if="!loading">
    <div id="form" >
        <h2> Login</h2>
              <p id="formHeading">Email: </p>
              <input type="email" v-model="email" placeholder="Email" name="email">

              <p id="formHeading">Password: </p>
              <input type="password" v-model="pass" placeholder="Choose a password" name="password">

              <button id="button" @click="login">Login</button>

          <router-link
              to="/adminLogin">Admin Login</router-link>

      </div>
    </div>
    </div>
</template>
<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle'
export default{
  components: {
    CubeSpin
  },

    name:"Login",
    data(){
        return{
            email: null,
            pass: null,
            loading:false,
            userName:"",
            loggedIn:false,
        }
    },
    methods:{
        login:function(){
          //Asynchronous function to take user input
          //start loading screen
          this.loading = true;
          //start fetch
          var formData = new FormData();

          formData.append('email', this.email);
          formData.append('password', this.pass);

          console.log(this.email, this.pass);

          fetch('https://coderoses-db.herokuapp.com/selectUser.php', {
            method: "POST",
            body: formData
          })
          .then((response) => {
            return response.json()
          })
          .then ((data) => {
            if(data == "The username or password do not match"){
              alert(data);
            }else{
            localStorage.userName = data.name;
            localStorage.loggedIn = true;
            location.reload();
            this.$router.push("home");
            }
            this.loading = false;
          }).catch( error => {
            alert(error);
            this.loading = false;
          });
        }
    }
}
</script>
<style>
#form{
    margin: auto;
    width: 11em;
    height: auto;
    width: 31em;
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
    font-family: 'Hind Vadodara', sans-serif;
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

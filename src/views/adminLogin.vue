<template>
  <div>
    <div v-if="loading" id="app">
       <h3>Loading</h3>
       <div style="text-align: center">
         <cube-spin></cube-spin>
       </div>
     </div>
    <div v-if="!loading">
  <div id="form">
      <Navbar/>
      <h2> Admin Login</h2>

            <p id="formHeading">Email: </p>
            <input type="email" v-model="email" placeholder="Email" name="email">

            <p id="formHeading">Password: </p>
            <input type="password" v-model="pass" placeholder="Choose a password" name="password">

            <button id="button" @click="login">Login</button>

            <button id="button">
        <router-link
            to="/Home">Cancel</router-link>
          </button>

            <button id="button">
        <router-link
            to="/Login"> Regular User Login</router-link>
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
    </div>
  </div>
</template>

<script>
    import Navbar from '@/components/Navbar'

    import CubeSpin from 'vue-loading-spinner/src/components/Circle'
export default{
  components: {
    CubeSpin
  },

    name:"adminLogin",
    data(){
        return{
            email: null,
            pass: null,
            loading:false,
            userName:"",
            loggedIn:false,
            adminLoggedIn:false,
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

          fetch('https://coderoses-db.herokuapp.com/selectAdmin.php', {
            method: "POST",
            body: formData
          })
          .then((response) => {
            return response.json()
          })
          .then ((data) => {
            console.log(data.name);
            if(data == false || data == [] || data == null || data == ""){
              alert("wrong pass or email");
            }else{
            localStorage.userName = data.name;
            localStorage.loggedIn = true;
            localStorage.adminLoggedIn = true;
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
    width: 31em;
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

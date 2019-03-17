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
          <h2> Create an Account</h2>
                <p id="formHeading">First name: </p>
                <input v-model="fname" placeholder="First Name" name="firstname">

                <p id="formHeading">Last name: </p>
                <input v-model="lname" placeholder="Last Name" name="lastname">

                <p id="formHeading">Email: </p>
                <input type="email" v-model="email" placeholder="Email" name="email">

                <p id="formHeading">Password: </p>
                <input type="password" v-model="pass" placeholder="Choose a password" name="password">
                <!--<p>Message is: {{ message }}</p>-->

                <button id="button" @click="signup">Submit</button>
                <!-- <button id="button" @click="cancel">Cancel</button> -->

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

        name:"SignUp",
        data(){
            return{
                email: null,
                pass: null,
                fname:null,
                lname:null,
                loading:false,
            }
        },
        methods:{
            signup:function(){
              //Asynchronous function to take user input
              //start loading screen
              this.loading = true;
              //start fetch
              var formData = new FormData();

              formData.append('firstname', this.fname);
              formData.append('lastname', this.lname);
              formData.append('email', this.email);
              formData.append('password', this.pass);

              fetch('https://coderoses-db.herokuapp.com/addUser.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.json()
              })
              .then ((data) => {
                //console.log(data.status, data.id);
                //validate if email exists.
                //if it does, alert user.
                //iF not create new user and route to flowerpage
                if(data.status){
                  console.log("yeep");
                  this.$router.push("FlowerPage");
                }else{
                  console.log("yaawp");
                  alert("That email already exists.");
                }
                this.loading = false;
              }).catch( error => { alert(error); });
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

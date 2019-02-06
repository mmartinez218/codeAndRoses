<template>
  <div id="form" >
      <h2> Create an Account</h2>
            <p id="formHeading">First name: </p>
            <input v-model="message" placeholder="First Name" name="firstname">

            <p id="formHeading">Last name: </p>
            <input v-model="message" placeholder="Last Name" name="lastname">

            <p id="formHeading">Email: </p>
            <input type="email" v-model="message" placeholder="Email" name="email">

            <p id="formHeading">Password: </p>
            <input type="password" v-model="message" placeholder="Choose a password" name="password">
            <p>Message is: {{ message }}</p>

            <button id="button" @click="signup">Submit</button>
            <button id="button" @click="cancel">Cancel</button>

    </div>
</template>
<script>
    export default{
        name:"SignUp",
        data(){
            return{
                email: null,
            }
        },
        methods:{
            signup:function(){
              // let self = this;
              var formData = new FormData();

              formData.append('user', 'patrick')

              fetch('http://localhost/test.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.text()
              })
              .then ((data) => {
                // self.email = data
                alert(data)
                this.$router.push("FlowerPage");
              }).catch( error => { alert(error); });
                //fetch('../../../flowers_DB/addAdmin.php')
                // fetch('./test.php')
                // .then(function(response) {
                // return response.json();
                // })
                // .then(function(res) {
                // //console.log(res);
                // alert(res);
                // });
                // // alert(this.email);
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

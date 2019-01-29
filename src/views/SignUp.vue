<template>
  <div id="form" >
      <h2> Create an Account</h2>
        <form action="/addAdmin.php" method="post">
            <p id="formHeading">First name: </p>
            <input v-model="message" placeholder="First Name" name="firstname">

            <p id="formHeading">Last name: </p>
            <input v-model="message" placeholder="Last Name" name="lastname">

            <p id="formHeading">Email: </p>
            <input type="email" v-model="message" placeholder="Email" name="email">

            <p id="formHeading">Password: </p>
            <input type="password" v-model="message" placeholder="Choose a password" name="password">
            <p>Message is: {{ message }}</p>

            <button id="button" @click="submit">Submit</button>
            <button id="button" @click="cancel">Cancel</button>
        </form>

    </div>
</template>
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

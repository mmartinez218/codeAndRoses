<template>
  <div id="form" >
      <h2> Admin Login</h2>
        <form>
            <p id="formHeading">Email: </p>
            <input type="email" v-model="message" placeholder="Email" name="email">

            <p id="formHeading">Password: </p>
            <input type="password" v-model="message" placeholder="Choose a password" name="password">

            <button id="button" @click="submit">Login</button>
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

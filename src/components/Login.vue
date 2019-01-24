<template>
    <div id="login">
        <input type="text" placeholder="type your email here"/>
        <button @click="Login">LOGIN</button>
    </div>
</template>
<script>
    export default{
        name:"Login",
        data(){
            return{
                email:""
            }
        },
        methods:{
            Login:function(){
                alert(this.email);
            }
        }
    }
</script>
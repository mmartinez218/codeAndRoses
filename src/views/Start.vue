<template>
    <div id="start">
        start
        {{greetings}}
        {{glob}}
        <div @click="ChangeGreetings">Begin</div>
        <div>
            <button @click="ChangeLogin" >Login</button>
            <button @click="ChangeRegister">Register</button>
        </div>
        <div v-if="page===1">
        <MyLogin/>
            </div>
        
        <div v-if="page===2">
        <MyReg/>
            </div>
        
        
    </div>
</template>
<script>
    import Login from "@/components/Login.vue"
    import Register from "@/components/Register.vue"
    export default{
        name:"Start",
        components:{
            MyLogin:Login,
            MyReg:Register
            
        },
        data(){
           return {
            greetings: "Welcome to my app",
               glob:this.store.globalTest,
               page:0
               }
        },
        methods:{
            ChangeGreetings:function(){
                this.greetings = "lets begin";
                this.store.globalTest = "something globally new";
                this.glob = this.store.globalTest;
            },
            ChangeLogin:function(){
                this.page = 1;
            },
            ChangeRegister:function(){
                this.page = 2;
            }
        }
    }
</script>
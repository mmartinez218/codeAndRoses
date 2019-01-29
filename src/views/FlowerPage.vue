<template>
  <div class="about">
    <h2></h2>
      <button @click="ChangeAddItem" id="button" > Add Item</button>
       <div v-if="page===1">
        <AddItemsV/>
            </div>
      
  </div>
</template>
<script>
    import AddItem from "@/components/AddItem.vue"
    import Register from "@/components/Register.vue"
    import Products from "@/components/Products.vue"
    export default{
        name:"Start",
        components:{
            AddItemsV:AddItem,
            MyReg:Register,
            Products:Products
            
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
            ChangeAddItem:function(){
                this.page = 1;
            },
            ChangeRegister:function(){
                this.page = 2;
            }
        }
    
    }
</script>


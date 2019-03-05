<template>
  <div class="about">
    <h2></h2>
      <button @click="ChangeAddItem" id="button" > Add Item</button>
      <div v-if="page===1">
        <AddItemsV/>
      </div>
      
      <div 
        id="listOfFlowers"
        class="galleryCon">
            <p id="title"> Arrangements </p>
             <div id="galleryBox">
                <div id="galleryCaption">
                    Flower arrangements are an important part of the ambience on any occasion. Arrangements come in glass vases and are bigger than Bouquet
                </div><br/>
                <button @click="ChangeAddItem" id="button">See the full collection</button>
            </div>
            <img src="../imgs/0000355_exquisite-flower-bouquet-with-red-roses-white-oriental-lilies-and-greenery_550.jpeg" class="galleryImgs"/>
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

<style>

</style>


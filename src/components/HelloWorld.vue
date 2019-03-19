<template>
  <div class="hello">
    <div class="homeGallery">
        <div class="galleryCon">
            <p id="title">  Bouquets </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                Flower bouquets are often given for special occasions
                </div><br/>
                 <button @click="ChangeAddItem" id="button">View Collection</button>
            </div>
            <img src="../imgs/standardBouquet.jpg" id="bouquets" class="imgs"/>
        </div> 
        
        <div class="galleryCon">
            <p id="title"> Arrangements </p>
             <div id="galleryBox">
                <div id="galleryCaption">
                    Flower arrangements are an important part of the ambience on any occasion. Arrangements come in glass vases and are bigger than Bouquet
                </div><br/>
                <button @click="ChangeAddItem" id="button">View Collection</button>
            </div>
            <img src="../imgs/standardArrangement.jpg" class="imgs" id="arrangements"/>
        </div>  
        
        <div class="galleryCon">
            <p id="title">  Planters </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                    A planter comes in pots made from plastic, wood, or stone. Pot selection will vary on seller. The soil in the planters will help your flowers live longer.                
                </div><br/>
                <button @click="ChangeAddItem" id="button">View Collection</button>
             </div>
                <img src="../imgs/standardPlanter.jpg" class="imgs" id="planters"/>
        </div>   
        
    </div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
            },
            flowerIdDel:function(dId){
              console.log(dId);
              this.flowerIdToDelete = dId
            },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    
    body {
      font-family: 'Montserrat', sans-serif;  
    }
    
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
    #bouquets {
        transform: rotate(90deg);
        max-width: 550px;
        width: 100%;
        min-width: 300px;
    }
    
    #arrangements {
        max-width: 550px;
        width: 100%;
        height: auto;
        max-height: 550px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    
    #planters {
        max-height: 550px;
        min-width: 300px;
        min-height: 300px;
        width: 100%;
    }
    
    .imgs {
        position: relative;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: inline-block;
    }
</style>

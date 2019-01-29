<template >
  <div class="home">
      <h2> All Planters </h2>
        
        <div class="galleryCon">
            <p id="title">  Name of Planter </p>
            <div id="galleryBox">
                <div id="bouquetCaption">
                Description of planter
                </div>
                <div id="bouquetPrice">
                Price of planter <!--in bold--->
                </div>
                <br/>
                 <button @click="ChangeAddItem" id="button"> Add to Cart </button><!---this is supposed to link to the Shopping Cart--->
            </div>
            <img src="../imgs/standardBouquet.jpg" class="galleryImgs"/> 
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignUp from '@/views/SignUp.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
    HelloWorld{
        color:red;
    }
</style>

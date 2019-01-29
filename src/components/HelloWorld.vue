<template>
  <div class="hello">
   
      
    <div class="homeGallery">
        <div class="galleryCon">
            <p id="title">  Title One </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                Something Fancy about this flower
                </div><br/>
                 <button @click="ChangeAddItem" id="button"> Buy It</button>
            </div>
            <img src="../imgs/e630e5aba6313f6472dd9ae263b20e88_23.jpg" class="galleryImgs"/>
        </div> 
        
        <div class="galleryCon">
            <p id="title">  Title Two </p>
             <div id="galleryBox">
                <div id="galleryCaption">
                Something Fancy about this flower
                </div><br/>
                <button @click="ChangeAddItem" id="button"> Buy It</button>
            </div>
            <img src="../imgs/0000355_exquisite-flower-bouquet-with-red-roses-white-oriental-lilies-and-greenery_550.jpeg" class="galleryImgs"/>
        </div>  
        
        <div class="galleryCon">
            <p id="title">  Title three </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                Something Fancy about this flower
                </div><br/>
                <button @click="ChangeAddItem" id="button"> Buy It</button>
             </div>
             <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/lethal-combination-standard_1.jpg" class="galleryImgs"/>
             </a>
        </div>   
        
    </div> 
      add an about button on the nav<br>    
    and a contact buton<br> 
       <div id="banner">
        <div id="bannerCon">
            <h3> Shop for any occasion!</h3>
            <p id="bannerDesc">Check the catalogue for the our finest flowers also add a button bro</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    add a Gallary<br>
    Bouque of the month<br>
    add an about button on the nav<br>    
    and a contact buton<br>   
    <div class="homeGallery">
    
        <div class="galleryCon">
            <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/e630e5aba6313f6472dd9ae263b20e88_23.jpg" class="galleryImgs"/>
            </a>
            <p id="caption">  Photo One </p>
        </div> 
        
        <div class="galleryCon">
            <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/0000355_exquisite-flower-bouquet-with-red-roses-white-oriental-lilies-and-greenery_550.jpeg" class="galleryImgs"/>
            </a>
            <p id="caption">  Photo Two </p>
        </div>  
        
        <div class="galleryCon">
            <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/lethal-combination-standard_1.jpg" class="galleryImgs"/>
            </a>
            <p id="caption">  Photo Three </p>
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

<template>
    <div id="3types">
        <div class="homeGallery">
        <div class="galleryCon">
            <p id="title">  Bouquets </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                Flower bouquets are often given for special occasions.
                </div><br/>
                 <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the Bouquets.vue page just not sure how to do it lol--->
            </div>
            <img src="../imgs/standardBouquet.jpg" class="galleryImgs"/> 
        </div> 
        
        <div class="galleryCon">
            <p id="title">  Arrangements </p>
             <div id="galleryBox">
                <div id="galleryCaption">
                Flower arrangements are an important part of the ambience on any occasion. Arrangements come in glass vases and are bigger than Bouquets.
                </div><br/>
                <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the VaseArragements.vue page --->
            </div>
            <img src="../imgs/standardArrangement.jpg" class="galleryImgs"/>
        </div>  
        
        <div class="galleryCon">
            <p id="title">  Planters </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                A planter comes in pots made from plastic, wood, or stone. Pot selection will vary on seller. The soil in the planters will help your flowers live longer.
                </div><br/>
                <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the Planters.vue page --->
             </div>
             <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/standardPlanter.jpg" class="galleryImgs"/>
             </a>
        </div>   
        </div>   
        
    </div> 
</template>


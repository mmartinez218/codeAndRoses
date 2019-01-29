<template>
    <div id="3types">
        <div class="galleryCon">
            <p id="title">  Bouquets </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                Flower bouquets are often given for special occasions such as birthdays or anniversaries.
                </div><br/>
                 <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the Bouquets.vue page just not sure how to do it lol--->
            </div>
            <img src="../imgs/standardBouquet.jpg" class="galleryImgs"/> 
        </div> 
        
        <div class="galleryCon">
            <p id="title">  Arrangements </p>
             <div id="galleryBox">
                <div id="galleryCaption">
                Flower arrangements are an important part of the ambience on any occasion, weddings, birthdays, parties or any other events in life. Arrangements come in glass vases and are bigger than Bouquets.
                </div><br/>
                <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the VaseArragements.vue page --->
            </div>
            <img src="../imgs/standardArrangement.jpg" class="galleryImgs"/>
        </div>  
        
        <div class="galleryCon">
            <p id="title">  Planters </p>
            <div id="galleryBox">
                <div id="galleryCaption">
                A planter comes in pots made from plastic, wood, or stone. Pot selection will vary on seller. The soil in the planters will help your flowers live longer, and are therefore on a higher price point. Planters can vary in size, but are mostly heavy and big in size, so they are recommended for your own home.
                </div><br/>
                <button @click="ChangeAddItem" id="button"> See the full collection </button><!---this is supposed to link to the Planters.vue page --->
             </div>
             <a href="../imgs/lethal-combination-standard_1.jpg">
                <img src="../imgs/standardPlanter.jpg" class="galleryImgs"/>
             </a>
        </div>   
        
    </div> 
</template>


<template>
  <div>
    <div class="alerts"  id="form" v-if="updateItemAlert">
               <h2>Edit</h2>

         <p id="formHeading">Edit</p>
         <select name="type" v-model="type">
                <option value="bouquet" name="type">Bouquet</option>
                <option value="Arrangement" name="type">Arrangement</option>
                <option value="Planter" name="type">Planter</option>
            </select>

            <p id="formHeading">Name of Product</p>
            <input v-model="flowerName" placeholder="Name" name="itemName">

            <p id="formHeading">Description: </p>

             <textarea name="description" rows="5" cols="30" v-model="desc">
            </textarea>

            <p id="price">Price: <input id="money" type="number" v-model="pDollar" placeholder="0" name="price" max="999" min="0">.

            <input id="money" type="number" placeholder="00" v-model="pCents"> </p>
            <input type="file" name="itemImg" accept="image/*" @change="imgUp">

           <button id="button" @click="updateItemAlert=false">Cancel</button>
           <button id="button" @click="" >Update</button>
    </div>
    <div class="alerts" id="form" v-if="deleteItemAlert">
        <h4> Are you sure you want to delete this item?</h4>
        <p style="text-align:center"> All content will be permanently deleted
            <br>
            <br>
            <button id="button" @click="deleteItemAlert=false">Cancel</button>
            <button id="button" @click="deleteFlower(this.flower_id)">Delete</button>
        </p>

    </div>
    <div class="galleryCon" id="listOfFlowers" v-for="(m, i) in dFlowers[0]" :key="compKey + i">
      <p id="title">
        {{m.name}}<br/>
      </p>
      <div id="galleryBox" class="listOfFlowers">
          {{m.type}}
          {{m.dateadded}}
          {{m.description}}
          {{m.price}}
      </div>

        <img src="../imgs/0000355_exquisite-flower-bouquet-with-red-roses-white-oriental-lilies-and-greenery_550.jpeg" class="galleryImgs"/>
        <button
            id="button"
            @click="updateItemAlert=true"
            >
                Update ({{ updateItemAlert ? 'visible' : 'hidden' }})
         </button>
         <button
            id="button"
            @click="deleteItemAlert=true"
            >
                Delete ({{ deleteItemAlert ? 'visible': 'hidden' }})
          </button>


        <!--
            <button @click="updateFlower(m.flower_id)" >Edit</button>

            <button @click="deleteFlower(m.flower_id)" >Delete</button>
        -->
    </div>

     <div v-if="loading" id="app">
      <h3>Loading</h3>
      <div style="text-align: center">
        <cube-spin></cube-spin>
      </div>
    </div>
    <div id="form" v-if="!loading">
      <h2> Add an Item</h2>
            <p id="formHeading">Type of Product</p>

            <select name="type" v-model="type">
                <option value="bouquet" name="type">Bouquet</option>
                <option value="Arrangement" name="type">Arrangement</option>
                <option value="Planter" name="type">Planter</option>
            </select>

            <p id="formHeading">Name of Product</p>
            <input v-model="flowerName" placeholder="Name" name="itemName">

            <p id="formHeading">Description: </p>

             <textarea name="description" rows="5" cols="30" v-model="desc">
            </textarea>

            <p id="price">Price: <input id="money" type="number" v-model="pDollar" placeholder="0" name="price" max="999" min="0">.

            <input id="money" type="number" placeholder="00" v-model="pCents"> </p>
            <input type="file" name="itemImg" accept="image/*" @change="imgUp">

           <button id="button" @click="addflower">Submit</button>
           <button id="button" @click="theDate">chckArray</button>
      </div>
    </div>
</template>
<script>
    import CubeSpin from 'vue-loading-spinner/src/components/Circle'
    export default{
        components: {
          CubeSpin
        },

        name:"AddItem",
        data(){
            return{
                type:"",
                flowerName:"default",
                desc:"",
                pDollar:0,
                pCents:0,
                price:0,
                dImg:null,
                //dateAdd: new Date().toISOString().slice(0,10),
                dateAdd: "1999-01-01",
                adminId:1,
                dFlowers:[],
                loading:false,
                compKey:0,
                updateItemAlert: false,
                deleteItemAlert: false,
                flowerIdToDelete:0,
            }
        },
        mounted(){
          //Grab flowers from database when loading the page
          this.getFlower();
        },

        methods:{
            flowerIdDel:function(dId){
              console.log(dId);
              this.flowerIdToDelete = dId
            },
            getFlower:function(){
              this.loading = true;
              var formData = new FormData();

              formData.append('adminnum', this.adminId);

              fetch('https://coderoses-db.herokuapp.com/selectFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                this.loading = false;
                return response.text()
              })
              .then ((data) => {
                //check if there are flowers in the database
                //add to array if there is
                this.dFlowers.push(JSON.parse(data));
                this.dFlowers = this.dFlowers;
                console.log(this.dFlowers[0][0]);
                console.log("yeeet");
                // change key to attempt rerender
                this.compKey++;
              }).catch( error => { console.log(error); });
            },
            theDate:function(){
              // alert(this.pDollar);
              for(var x=0;x<this.dFlowers[0].length;x++){
                console.log(this.dFlowers[0][x].name);
                console.log(this.dFlowers[0][x].dateadded);
                console.log(this.dFlowers[0][x].description);
                console.log(this.dFlowers[0][x].price);
                console.log(this.dFlowers[0][x].type);
              }
            },
            imgUp:function(event){
              this.dImg=event;
            },
            updateFlower:function(x){
              alert(x);
            },
            deleteFlower:function(x){
              alert(x)
              // var formData = new FormData();
              //
              // formData.append('flowerid', x);
              //
              // fetch('https://coderoses-db.herokuapp.com/deleteFlower.php', {
              //   method: "POST",
              //   body: formData
              // })
              // .then((response) => {
              //   this.loading = false;
              //   return response.text()
              // })
              // .then ((data) => {
              //   alert(data)
              // }).catch( error => { console.log(error); });
            },
            addflower:function(){
              //After form submit, post flower info to database
              this.loading = true;

              //concat date
              var nd = new Date();
              var curDay = nd.getDate();
              var curYear = nd.getFullYear();
              var curMonth = nd.getMonth()+1;
              var dDate = curYear+"-"+curMonth+"-"+curDay;
              this.dateAdd = dDate;


              //validate Price
              if(this.pDollar>999 || this.pCents>99){
                alert("Enter a valid dollar from 0 and 999 and valid cent from 0 and 99");
                this.loading = false;
                return;
              }else{
                //concat price
                this.price = this.pDollar+"."+this.pCents;
                parseFloat(this.price);
              }

              var formData = new FormData();

              formData.append('type', this.type)
              formData.append('itemName', this.flowerName)
              formData.append('price', this.price)
              formData.append('description', this.desc)
              //formData.append('img', this.dImg)
              formData.append('dateadded', this.dateAdd)

              fetch('https://coderoses-db.herokuapp.com/postFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                this.loading = false;
                return response.text()
              })
              .then ((data) => {
                //this.compKey++;
                this.getFlower();
                //alert("Flower Added")

                // this.$router.push("FlowerPage");
              }).catch( error => {
                this.loading = false;
                alert(error);
              });

            },
        }
    }
</script>
<style>
    .alerts{
        position: absolute;
        background-color: white;
        z-index: 5;
        left: 17%;
    }
#editItem{
    border-color: red;
    position: absolute;
    margin: auto;
    z-index: 2;
    left: 25%;
    height: auto;
    width: 50%;
    background-color: rebeccapurple;
}
#form{
    margin: auto;
    width: 11em;
    height: auto;
    width: 31em;
    border-style: solid;
    border-color: #F8EDFF;
    border-radius: 5px;
    padding: 1.5em 2em 1.5em 4.5em;
}

form{
    width: 11em;
    height: auto;
}
#formHeading{
    font-size: 1.1em;
    color:#2E0A38;
    margin-bottom: 0.5em;
    font-family: 'Hind Vadodara', sans-serif;
}

input{
    height: 2em;
    width: 30em;
    font-size: 15px;
}

input:hover{
    border-color: #2E0A38;
}

input:focus{
    border-color: #2E0A38;
}

.galleryImgs{
    position: relative;
    z-index: -1;
    top: 0;
    opacity: 0.5;

}

#galleryBox{
    position: relative;
    display: block;
    opacity: 1;
    z-index: -1;

}
#listOfFlowers{
        flex-direction: row;
}
.listOfFlowers{
        flex-direction: row;
}
</style>

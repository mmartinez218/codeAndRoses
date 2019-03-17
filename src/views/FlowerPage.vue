<template>
  <div class="about">
    <h2></h2>
    <button @click="ChangeAddItem" id="button" > Add Item</button>
    <div v-if="page===1">
        <AddItemsV/>
     </div>
     <div class="alerts editAlert"  id="form" v-if="updateItemAlert">
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
           <button id="button" @click="updateFlower" >Update</button>
    </div>
    <div class="alerts" id="form" v-if="deleteItemAlert">
        <h4> Are you sure you want to delete this item?</h4>
        <p style="text-align:center"> All content will be permanently deleted
            <br>
            <br>
            <button id="button" @click="deleteItemAlert=false">Cancel</button>
            <button id="button" @click="deleteFlower" :key="compKey">Delete</button>
        </p>

    </div>

     <div id="itemsCon">
        <div class="" id="listOfFlowers" v-for="(m, i) in dFlowers[0]" :key="compKey + i">
          <p id="itemTitle">
            {{m.name}}<br/>
          </p>
          <img src="../imgs/0000355_exquisite-flower-bouquet-with-red-roses-white-oriental-lilies-and-greenery_550.jpeg" class="itemImgs"/>
          <div id="itemBox">
            {{m.type}}
            {{m.dateadded}}<br/>
            {{m.description}}<br/>
            ${{m.price}}<br/><br/>
          </div>
          <textarea id="reviewInp" name="review" rows="10" cols="">Add a review
          </textarea>

          <button id="button" @click="updateFlowerPrompt(m.flower_id)">
                Update ({{ updateItemAlert ? 'visible' : 'hidden' }})
          </button>
          <button id="button" @click="deleteFlowerPrompt(m.flower_id)">
                Delete ({{ deleteItemAlert ? 'visible': 'hidden' }})
          </button>

        </div>
     </div>
  </div>
</template>
<script>
    import AddItem from "@/components/AddItem.vue"
    import Register from "@/components/Register.vue"
    import Products from "@/components/Products.vue"
    import CubeSpin from 'vue-loading-spinner/src/components/Circle'
    export default{
        name:"Start",
        components:{
            AddItemsV:AddItem,
            MyReg:Register,
            Products:Products,
            CubeSpin

        },
        data(){
           return {
            greetings: "Welcome to my app",
            glob:this.store.globalTest,
            page:0,
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
            flowerIdToUpdate:0,
               }
        },
        mounted(){
          //Grab flowers from database when loading the page
          this.getFlower();
          console.log("MOUNTflowerpage");
        },
        watch: {

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
            getFlower:function(){
              console.log("getting flowers");
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
                // change key to attempt rerender
                this.compKey++;
              }).catch( error => { console.log(error); });
            },
            imgUp:function(event){
              this.dImg=event;
            },
            deleteFlower:function(){
              //Delete the flower with flowerid set to floweridtodelete
              console.log("ck start", this.compKey);
              this.deleteItemAlert=false
              this.loading = true;

              var formData = new FormData();
              formData.append('flowerid', this.flowerIdToDelete);
              fetch('https://coderoses-db.herokuapp.com/deleteFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                this.loading = false;
                this.compKey += 1;
                this.getFlower();
                return response.text()
              })
              .then ((data) => {
                console.log(data);
                //this.$router.push("FlowerPage");
              }).catch( error => { console.log(error); });

              //update the flower page with the database without the deleted flower
              console.log("yaaww", this.flowerIdToDelete, this.compKey);

            },
            deleteFlowerPrompt:function(x){
              //Open Delete dialogue and set floweridtodelete
              //take the flower id from the post and set up a variable
              this.flowerIdToDelete = x;
              // Open are you sure to delete dialogue
              this.deleteItemAlert=true;

              console.log("yeeet", this.flowerIdToDelete);

            },
            updateFlowerPrompt:function(x){
              //Open Delete dialogue and set floweridtodelete
              //take the flower id from the post and set up a variable
              this.flowerIdToUpdate = x;
              // Open are you sure to delete dialogue
              this.updateItemAlert=true;
            },
            updateFlower:function(){
              //After form submit, update flower in the DATABASE
              //start loading screen
              this.loading = true;
              this.updateItemAlert=false;
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
                this.price = this.pDollar+"."+this.pCents;
                parseFloat(this.price);
              }

              var formData = new FormData();

              //include flowerid for updating a specific flower in the database
              formData.append('flowerid', this.flowerIdToUpdate)
              formData.append('type', this.type)
              formData.append('itemName', this.flowerName)
              formData.append('price', this.price)
              formData.append('description', this.desc)
              //formData.append('img', this.dImg)
              formData.append('dateadded', this.dateAdd)

              fetch('https://coderoses-db.herokuapp.com/updateFlower.php', {
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
                alert("Flower Update Successful");
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
    position: fixed;
    background-color: white;
    z-index: 5;
}

.editAlert{
    top: 10%;
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

#itemsCon{
    position: relative;
    flex-direction: row;
    margin-bottom:100px;
   /** grid-template-columns: repeat(3, 1fr); **/
}
#itemBox{

}
.itemImgs{
    width: auto;
    height:60%;
    position: inherit;
    z-index: 1;
    top: 0;
    opacity: 1;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
    color: #2E0A38;
}

#itemTitle{
    font-size: 200%;
    margin-left: 2%;
}
#listOfFlowers{
    position: relative;
    display: block;
    opacity: 1;
    height: 40vh;
    background-color: red;
    border-color: 50px solid #2E0A38;


}
#reviewInp{
    height: 100px;
    width: 60vw;
}

</style>

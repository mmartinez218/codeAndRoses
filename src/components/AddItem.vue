<template>
  <div>
    <div id="listOfFlowers" v-for="(m, i) in dFlowers[0]" :key="compKey + i">
      <div style="background-color:red">
      {{m.name}}
      {{m.type}}
      {{m.dateadded}}
      {{m.description}}
      {{m.price}}
      <button @click="updateFlower(m.flower_id)" >Edit</button>
      <button @click="deleteFlower(m.flower_id)" >Delete</button>
      </div>
    </div>
    <div v-if="loading" id="app">
      <h2>Loading</h2>
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
           <button id="button" @click="selectFlower">GrabFlowersFromDatabase</button>
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
            }
        },
        mounted(){
          //Grab flowers from database when loading the page
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
            this.dFlowers.push(JSON.parse(data));
            console.log(this.dFlowers[0][0]);
            console.log(data);
            //this.dFlowers = data[0];

            //alert(this.dFlowers.name);
            //console.log(data);
            //this.$router.push("AddItem");
          }).catch( error => { console.log(error); });
        },
    //      mounted(){
    //     this.socket.on("user_connected", (data)=>{
    //         alert("Some one else is on this site! B**** GTFO");
    //     });
    //     this.socket.on("new_msg",(data)=>{
    //         this.dFlowers.push(data);
    //     });
    //     },
    //
    //      methods:{
    //     selectFlower:function(){
    //         var obj = {
    //             flowerName:this.flowerName,
    //             //msg:this.msg
    //         }
    //         this.socket.emit("typed_msg", obj);
    //
    //     }
    // }
        methods:{
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
              alert(x);
            },
            selectFlower:function(){
              var formData = new FormData();

              formData.append('adminnum', this.adminId);

              fetch('https://coderoses-db.herokuapp.com/selectFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.text()
              })
              .then ((data) => {
                //console.log(data);
                this.dFlowers.push(JSON.parse(data));
                // for(var i=0;i<data.length;i++){
                //   this.dFlowers.push(data[i]);
                // }
                console.log(this.dFlowers[0][0]);
                //this.dFlowers = data[0];

                //alert(this.dFlowers.name);
                //console.log(data);
                //this.$router.push("AddItem");
              }).catch( error => { alert(error); });

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
                this.compKey++;
                //alert("Flower Added")

                // this.$router.push("FlowerPage");
              }).catch( error => {
                this.loading = false;
                alert(error);
              });

            }
        }
    }
</script>
<style>
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

#listOfFlowers{
  width:100vw;
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
</style>

<template>
  <div id="form" >
      <h2> Add an Item</h2>
      <div v-for="m in dFlowers">
        {{m.flowerName}}
      </div>
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

            <p id="price">Price: <input id="money" type="number" v-model="pDollar" placeholder="0" name="price">.

            <input id="money" type="number" placeholder="00" v-model="pCents"> </p>
            <input type="file" name="itemImg" accept="image/*">

           <!-- <button id="button" @click="addflower">Submit</button> -->
            <button id="button" @click="addflower">Cancel</button>

    </div>
</template>
<script>
    export default{
        name:"AddItem",
        data(){
            return{
                type:"",
                flowerName:"default",
                desc:"",
                pDollar:0,
                pCents:0,
                price:0,
                dImg:"",
                //dateAdd: new Date().toISOString().slice(0,10),
                dateAdd: "1999-01-01",
                adminId:1,
                dFlowers:[],
            }
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
            selectFlower:function(){
              var formData = new FormData();

              formData.append('adminnum', this.adminId);

              fetch('https://coderoses-db.herokuapp.com/mysql/selectFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.json()
              })
              .then ((data) => {
                this.dFlowers = data[0];
                //this.dFlowers.push(data[0])
                //alert(this.dFlowers.name);
                //console.log(data);
                this.$router.push("AddItem");
              }).catch( error => { alert(error); });

            },
            addflower:function(){
              this.price = this.pDollar+"."+this.pCents;
              parseFloat(this.price)

              var formData = new FormData();

              formData.append('type', this.type)
              formData.append('itemName', this.flowerName)
              formData.append('price', this.price)
              formData.append('description', this.desc)
              //formData.append('img', this.dImg)
              formData.append('dateadded', this.dateAdd)

              fetch('http://localhost/postFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.text()
              })
              .then ((data) => {
                alert(data)
                // this.$router.push("FlowerPage");
              }).catch( error => { alert(error); });

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

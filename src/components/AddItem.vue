<template>
  <div id="form" >
      <h2> Add an Item</h2>
        <form>
            <p id="formHeading">Type of Product</p>
            <select>
                <option value="bouquet" name="type" v-model="type">Bouquet</option>
                <option value="Arrangement" name="type" v-model="type">Arrangement</option>
                <option value="Planter" name="type" v-model="type">Planter</option>
            </select>
            <p id="formHeading">Name of Product</p>
            <input v-model="flowerName" placeholder="Name" name="itemName">

            <p id="formHeading">Description: </p>

             <textarea name="description" rows="5" cols="30" v-model="desc">
            </textarea>

            <p id="price">Price: <input id="money" type="number" v-model="pDollar" placeholder="0" name="price">.

            <input id="money" type="number" placeholder="00" v-model="pCents"> </p>
            <input type="file" name="itemImg" accept="image/*" >

            <button id="button" @click="addflower">Submit</button>
            <button id="button" @click="cancel">Cancel</button>
        </form>

    </div>
</template>
<script>
    export default{
        name:"AddItem",
        data(){
            return{
                type:"",
                flowerName:"",
                desc:"",
                pDollar:"",
                pCents:"",
                price:0,
                dImg:"",
                dateAdd:"",
            }
        },
        methods:{
            addflower:function(){
              var formData = new FormData();

              formData.append('type', this.type)
              formData.append('name', this.flowerName)
              formData.append('price', this.price)
              formData.append('description', this.desc)
              formData.append('img', this.dImg)
              formData.append('datedded', this.date)

              fetch('/postFlower.php', {
                method: "POST",
                body: formData
              })
              .then((response) => {
                return response.text()
              })
              .then ((data) => {
                alert(data)
                this.$router.push("FlowerPage");
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

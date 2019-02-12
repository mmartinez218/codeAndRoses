<template>
  <div id="form" >
      <h2> Contact Us</h2>
        <form>
            <p id="formHeading">Name:</p>
            <input placeholder="First Name" type="text">
            <br/>
            <input placeholder="Last Name" type="text">
           
            <p id="formHeading">Email:</p>
            <input v-model="flowerName" placeholder="Email" name="">

            <p id="formHeading">Message: </p>

             <textarea name="description" rows="5" cols="30" v-model="desc">
            </textarea>

           

            <button id="button" @click="">Send</button>
            <button id="button" @click="">Cancel</button>
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
                pDollar:0,
                pCents:0,
                price:0,
                dImg:"",
                //dateAdd: new Date().toISOString().slice(0,10),
                dateAdd: "1999-01-01"
            }
        },
        methods:{
            addflower:function(){
              this.price = this.pDollar+"."+this.pCents;

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

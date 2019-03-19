<template>
  <div id="form" >
      <Navbar/>
      <h2> Contact Us</h2>
        <form>
            <p id="formHeading">Name:</p>
            <input placeholder="First Name" type="text">
            <br/>
            <input placeholder="Last Name" type="text">
           
            <p id="formHeading">Email:</p>
            <input v-model="flowerName" placeholder="Email" name="">

            <p id="formHeading">Message: </p>

             <textarea name="description" rows="5" v-model="desc">
            </textarea>

           <div id="box">
                <button id="button" @click="">Send</button>
                <button id="button" @click="">Cancel</button>
            </div>
        </form>

    </div>
</template>
<script>
    import Navbar from '@/components/Navbar'
    export default{
        components: {
            Navbar
  },
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
    border-style: solid;
    border-color: #F8EDFF;
    border-radius: 5px;

}

form{
    width: 500px;
    height: auto;
}
#formHeading{
    font-size: 1.1em;
    color:#2E0A38;
    margin-bottom: 0.5em;
    font-family: 'Montserrat', sans-serif;
}

input:hover{
    border-color: #2E0A38;
}

input:focus{
    border-color: #2E0A38;
}
    
input {
  max-width: 465px;
  border-radius: 12.5px;
  border-color: #2E0A38;
  left: -300px;
  padding-left: 20px;
  margin: 10px;
    }
    
    textarea {
        width: 700px;
        border-radius: 20px;
        border-color: #2E0A38;
    }
    
    buttons {
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        display: inline-block;
    }
    
    #box {
        margin-top: 50px;
        height: 80px;
        width: auto;
        left: 50%;
        align-items: center;
    }
  
</style>

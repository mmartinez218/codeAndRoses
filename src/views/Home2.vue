<template>
  <div class="home">
    <Navbar/>
      
      <div id="cc">
      <h2>Take a Look at Our Product Categories</h2>
        </div>
  <HelloWorld/>
      <br>
  <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignUp from '@/views/SignUp.vue'
import Navbar from '@/components/Navbar'
import HomeButtons from '@/components/HomeButtons'
import Banner from '@/components/Banner'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    HomeButtons, 
    Banner
  }
}
</script>
<style>


    
    
</style>

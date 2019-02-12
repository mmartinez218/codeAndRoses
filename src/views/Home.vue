<template >
  <div class="home">
      <h2>Our top Specialty </h2>
  <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignUp from '@/views/SignUp.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
    HelloWorld{
        color:red;
    }
</style>

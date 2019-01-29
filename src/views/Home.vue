<template >
  <div class="home">
      <h2> Top Three bouquet for January</h2>
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
   
</style>

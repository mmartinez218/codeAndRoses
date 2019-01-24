<template >
  <div class="home">
    <router-link to="/start">This is the HOME TEMPLATE</router-link>
      
    <HelloWorld msg="Welcome to Code&Roses"/>
      <SignUp/>
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
    .home{
        background-color: red;
    }
</style>

<template>
  <div class="container">
    <Navbar></Navbar>
  <router-view/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue"

  export default{
    name:'App',
    components:{
      Navbar
    }
  }
</script>

<style>
  body{
    background-color:#F4F4F4;
  }
  .container{
    max-width:800px;
    margin-left:auto;
    margin-right:auto;
    width:calc(100vw - 64px);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,p{
  margin:0;
}
a{
  color:black;
  text-decoration:none;
}


</style>

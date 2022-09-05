<template>
  <div class="wrapper">
    <div class="contents">
      <h1>Manage your task effectively</h1>
      <p>Modern todo list application to help you track your activities and stay productive</p>
      <TButton name="Get Started" @click="handleGetStarted()"></TButton>
    </div>
    <div class="illustration">
      <img :src=imgSrc alt=""/>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import illustration from "../assets/hero-illustration.png"
export default {
  name: 'HomeView',
  data:()=>({
    imgSrc:illustration
  }),
  components: {
  },
  methods: {
    handleGetStarted(){
      this.$router.push('/todos')
    }
  }
}
</script>

<style scoped>
  h1{
    font-size:40px;
    line-height:1.2;
    letter-spacing:-1px;
    max-width:333px;
    margin-bottom:8px;
  }
  p{
    max-width:324px;
    margin-bottom:16px;
    line-height: 160%;
  }
  .wrapper{
    margin-block:40px;
  }
 @media(min-width:768px){
  .wrapper{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
 }
</style>

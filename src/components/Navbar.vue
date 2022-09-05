<template>
    <div class="nav-root">
        <div class ="logo">
            Todo App
        </div>
        <ul class ="nav-list">
           <li>
            <router-link to="/">Home</router-link>
           </li>
           <li>
            <router-link to="/todos">Todos</router-link>
           </li>
        </ul>
    </div>
</template>

<script>
  export default{
    name:'Navbar'
}
</script>

<style scoped>
.nav-root{
    display:flex;
    justify-content: space-between;
    padding:16px 32px;
    align-items: center;
    box-shadow:0 1rem 2rem rgba(0,0,0,0.1);
    border-radius:8px;
    background-color: #fff;
}
.logo{
    font-weight: 600;
}
.nav-list{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    list-style: none;
    gap:16px;
}
</style>
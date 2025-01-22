<script setup>
import log from './MyComponents/Auth.vue';
import { useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire';


const router = useRouter();

// getCurrentUser().then(
//   (usu)=> {
//     user = usu;
//     console.log(user);
//   }
// ).catch((error)=>{"Error: "+error});


router.beforeEach(async(to, from) => {
  // ... to.fullpath
  // explicitly return false to cancel the navigation
  if (to.meta.requireAuth) {
    var user = await getCurrentUser();
  if (user) {
    return true
  }else {
      return false
    }
    }else {
      return true;
  }
})

</script>

<template>

  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/Recordatorios">Recordatorios</RouterLink>
    <log></log>
  </nav>

  <RouterView/>
</template>



<style scoped>

nav {
      background-color: #80c482;
      color: white; 
      padding: 0.5em 1em;
      display: flex;
      justify-content: space-between;
      align-items: center; 
}

</style>
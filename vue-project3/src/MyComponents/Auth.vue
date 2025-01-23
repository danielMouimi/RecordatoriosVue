<script setup>
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider();
const user = useCurrentUser();



function login() {

    router.push("/login");

}

function logout() {
    signOut(auth).then(
        ()=>{
            console.log("cierra sesion");
            router.push("/");
    }).catch(
        (error)=>console.log("Error: "+error)
    );
}
function getUsernameFromEmail(email) {
  return email.split('@')[0];
}

</script>


<template>
    <p v-if="user">Hola {{ user?.providerData[0]?.displayName || getUsernameFromEmail(user.email) }}</p>
    <button v-if="user" @click="logout">Cerrar sesion</button>
    <button @click="login" v-else>Iniciar Sesion</button>
</template>
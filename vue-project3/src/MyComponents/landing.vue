<script setup>
import { useCurrentUser } from 'vuefire';
import { useRouter } from 'vue-router';

const user = useCurrentUser();
const router = useRouter();
function routes() {
    console.log("llego aqui")
    if(user) {
        router.push("/Recordatorios");
    }else {
        router.push("/login");
    }
}


</script>

<template>

<header>
        <h2>Recordatorios Inteligentes</h2>
    </header>
    <main>
        <h1>Organiza tu vida con facilidad</h1>
        <p>Guarda tus recordatorios importantes en un solo lugar y nunca olvides una fecha clave.</p>
        <button class="btn" @click="routes">Comienza Ahora</button>
    </main>
</template>

<style scoped>
template {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f5;
}
header {
    background-color: #4CAF50;
    color: white;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
}
main {
    text-align: center;
    padding: 2rem;
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}
.btn {
    padding: 1rem 2rem;
    font-size: 1rem;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.btn:hover {
    background-color: #45a049;
}
</style>
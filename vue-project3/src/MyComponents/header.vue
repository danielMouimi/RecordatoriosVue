<script setup>
import { ref, defineEmits } from 'vue';
import { useCurrentUser } from 'vuefire';

const emits = defineEmits(['newContent']);

const content = ref("");

const user = useCurrentUser();

function newC() {
    const values = {
     name: content.value,
     priority: 1,
     time: Date.now(),
     done: false,
     user: user.value.uid
   }
    emits('newContent', values);
    content.value = '';
}

</script>


<template>
<h1>Proyecto Vue.js - Daniel Amin Mouimi Romero</h1>
<div id="contenedor">
    <div id="introduccion">
      <input id="intro" placeholder="¿Qué quieres recordar?" v-model="content" v-on:keyup.enter="newC"/>
      <button v-on:click="newC" id="introbtn">Add</button>
    </div>

</div>
</template>

<style scoped>

#intro {
  width: 70%;
  height: 20px;
  border-radius: 8px;
  padding: 10px;
}
#introbtn {
  width: 60px;
  height: 42px;
  border-radius: 5px;
  margin-left: 5px;
  background-color: rgb(144, 255, 144);
}


</style>
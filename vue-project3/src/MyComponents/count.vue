<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['list']);
const emit = defineEmits(['clearCompleted']);

const clearCompletedTasks = () => {
  emit('clearCompleted');
};
</script>

<template>
  <div class="content">
    <p>You have {{ props.list.filter(item => item.done).length }} tasks done of {{ props.list.length }} to do. </p>
    <!-- Botón con estilo de texto -->
    <button class="clear-completed-btn" @click="clearCompletedTasks">
      Eliminar todas las tareas completadas
    </button>
  </div>
</template>

<style scoped>
.content {
   display: flex;
}

.clear-completed-btn {
  background: none;
  border: none;
  color: red;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  padding: 0;
  margin-left: 10px;
}

.clear-completed-btn:hover {
  text-decoration: underline;
  color: darkred;
}

</style>

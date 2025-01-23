<script setup>
import { ref, defineProps, defineEmits, computed, onUnmounted, onMounted } from 'vue';

const props = defineProps(['task']);
const emits = defineEmits(['remove', 'check', 'priority']);

const elapsedTime = ref('');
const interval = ref(null);
const componentRef = ref(null); // Ref para el contenedor del componente

function time() {
  let minutes = Math.floor((Date.now() - props.task.time) / 60000);
  return minutes;
}

function setTime() {
  const minutes = time();
  elapsedTime.value = minutes >= 1440 
    ? `${Math.floor(minutes / 1440)} días`
    : minutes >= 60 
        ? `${Math.floor(minutes / 60)} horas`
        : `${minutes} minutos`;
}

onMounted(() => {
  setTime();
  interval.value = setInterval(setTime, 600);
});

onUnmounted(() => {
  clearInterval(interval.value);  
});

function removeOne() {
  emits('remove', props.task.id);
}

function check() {
  emits('check', props.task.id);
}

function priority(p) {
  setTime();
  emits('priority', props.task.id, p);
}
</script>

<template>
  <div class="content" ref="componentRef">
    <div v-if="props.task.done" class="checkbox-container">
      <input type="checkbox" class="checkbox checked" @click="check" checked />
    </div>
    <div v-else class="checkbox-container checkbox.checked">
      <input type="checkbox" class="checkbox" @click="check" />
    </div>

    <div v-if="props.task.done">
    <h2 class="task-name"><del>{{ props.task.name }}</del></h2>
    </div>

    <div v-else>
    <h2 class="task-name">{{ props.task.name }}</h2>
    </div>
    
    <p class="priority-label">Prioridad:</p>
    <div class="priority-buttons">
      <button class="button low" @click="priority(0)" :class="{'active': props.task.priority === 0}">Low</button>
      <button class="button normal" @click="priority(1)" :class="{'active': props.task.priority === 1}">Normal</button>
      <button class="button high" @click="priority(2)" :class="{'active': props.task.priority === 2}">High</button>
    </div>

    <p class="elapsed-time">Realizado hace {{ elapsedTime }}</p>
    <button class="delete-button" @click="removeOne">Eliminar</button>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90vw;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgb(35, 35, 35);
  margin-bottom: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.content:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.checkbox-container {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      width: 10vw;
    }

    .checkbox {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f0f0f0;
      border: 2px solid #ccc;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .checked {
      background-color: #4caf50;
      border-color: #4caf50;
    }


.task-name {
  font-size: 1.5rem;
  font-weight: bold;
  width: 80vw;
  margin: 8px 0;
  color: white;
}

.priority-label {
  font-weight: 500;
  margin-bottom: 8px;
  color: white;
}

.priority-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
}

.button.low {
  background-color: lightblue;
}

.button.normal {
  background-color: lightgreen;
}

.button.high {
  background-color: lightcoral;
}

.button.active {
  font-weight: bold;
  color: rgb(42, 0, 0);
  border: 2px solid white;
}

.elapsed-time {
  font-size: 0.9rem;
  color: #b2b2b2;
  margin-bottom: 16px;
}

.delete-button {
  align-self: flex-start;
  background-color: #ff5f5f;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  justify-self: flex-end;
}

.delete-button:hover {
  background-color: #ff3b3b;
}
</style>


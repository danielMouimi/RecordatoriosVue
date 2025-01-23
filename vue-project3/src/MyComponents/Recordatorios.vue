<script setup>
import he from './header.vue'
import list from './list.vue'
import foot from './footer.vue'
import count from './count.vue'
import { ref, onMounted, watch, } from 'vue' 


import { useCollection, useFirestore } from 'vuefire'
import { collection, addDoc, orderBy, query, deleteDoc, doc, updateDoc, getDoc, where, getDocs } from 'firebase/firestore'
import { connectStorageEmulator } from 'firebase/storage'
import { useCurrentUser } from 'vuefire'

const db = useFirestore();

const user = useCurrentUser();
  
// const li = ref(loadFromLocalStorage());
var li = [];
console.log(user);
if (user.value.uid == 'gXn8HOEU7RcBmSd3Ah6FJKc41Ty1') {
  li = useCollection(query(collection(db, 'Recordatorios'),orderBy('name','asc')));
}else {
li = useCollection(query(collection(db, 'Recordatorios'),where('user','==',user.value.uid),orderBy('name','asc')));
}


function add(values) {
  // li.value.push(values);
  addDoc(collection(db, "Recordatorios"), values
).then((docref)=> {
  console.log("new note added");
}).catch((error)=> {
  console.log("ERROR: "+error);
});
}

function removeOne(id) {

  // li.value.splice(index, 1);
  deleteDoc(doc(db, "Recordatorios",id))
  .then((docref)=> {
    console.log("note deleted");
}).catch((error)=> {
  console.log("ERROR: "+error);
});

}

function deletedone() {
  // Consulta todas las tareas completadas
  const completedTasksQuery = query(
    collection(db, "Recordatorios"),
    where("done", "==", true)
  );

  getDocs(completedTasksQuery)
    .then((result) => {
      
      const deletePromises = result.docs.map((docSnap) =>
        deleteDoc(doc(db, "Recordatorios", docSnap.id))
      );


      return Promise.all(deletePromises);
    })
    .then(() => {
      console.log("Todas las tareas completadas han sido eliminadas.");
    })
    .catch((error) => {
      console.log("ERROR al eliminar tareas completadas: " + error);
    });
}


function check(id) {
  // li.value[index].done = !li.value[index].done;

 getDoc(doc(db, "Recordatorios",id))
   .then((docref)=> {

 updateDoc(doc(db, "Recordatorios",id),{ done : !(docref.data().done)})
   .then((docrefed)=> {
    console.log("done changed");
 }).catch((error)=> {
   console.log("ERROR: "+error);
 });


 }).catch((error)=> {
   console.log("ERROR: "+error);
});



}

function priority(id,p) {


  updateDoc(doc(db, "Recordatorios",id),{ priority : p})
   .then((docrefed)=> {
    console.log("done changed");
 }).catch((error)=> {
   console.log("ERROR: "+error);
 })
  

}

// function orderByPriority() {
//   li.value.sort((a,b)=> {
//     if (a.priority < b.priority) {
//       return 1;
//     }
//     if (a.priority > b.priority) {
//       return -1;
//     }
//     return 0;
//   });
// }


// watch(li,()=>{orderByPriority()},{deep: true});
// watch(li, ()=>{saveToLocalStorage()},{deep: true})




// onMounted(() => {
//   li.value = loadFromLocalStorage();
// });

</script>

<template>
  <he @newContent="add"></he>
  <count :list="li" @clearCompleted="deletedone"></count>

  <!-- Transition group para animar las notas -->
  <transition-group name="fade" tag="div" class="note-list">
    <list 
      v-for="(task, index) in li" 
      :key="task.id" 
      :task="task" 
      :ID="index" 
      @remove="removeOne" 
      @check="check" 
      @priority="priority"
    />
  </transition-group>

  <foot></foot>
</template>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
<template>
  <h1>
    Task viewer
  </h1>
  <Search ref="search" />
  <ul>
    <li v-bind:key="t" v-for="t in visibleTasks">
      <Task :task="t"  @taskCompleted="completeTask" @taskDeleted="deleteTask"></Task>
    </li>
  </ul>
</template>

<script setup>
import Search from "./Search.vue"
import Task from "./Task.vue"
import { ref, onMounted, computed, onUpdated, onBeforeUnmount} from 'vue'

const tasks = ref([]);
const search = ref("");

const visibleTasks = computed(() => {
  //canviar el filtre, ara només compara strings
  return tasks.value.filter((task)=> (task.name.includes(search.value.word)));
});
 
onUpdated(() => {
  //console.log(filt);
});

onMounted(() => {
  console.log("mounted");
    tasks.value = JSON.parse(localStorage.getItem('tasks'));
    //console.log(tasks.value);
    if(tasks.value == null || tasks.value == undefined){
    tasks.value = [];
    //console.log(tasks.value);
  }
});

onBeforeUnmount(() => {
  console.log("B");
  //console.log(search);
  //console.log(search.value.word);
});

function completeTask(tID){
  console.log(tID);
  let id = searchIndex(tID);
  console.log(id);
  tasks.value[id].completed = !tasks.value[id].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
  tasks.value = JSON.parse(localStorage.getItem('tasks'));
};

function deleteTask(tID){
  let id = searchIndex(tID);
  tasks.value.splice(id, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
  tasks.value = JSON.parse(localStorage.getItem('tasks'));
};

function searchIndex(num){
  return tasks.value.findIndex((task)=>{
      return task.tID == num;
    });
}
</script>

<style scoped>
h1 {
  margin:2rem 0px;
  font-size: 3rem;
}

ul {
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap:1rem;
  margin: 3rem 0px;
}

p{
  margin: 0px;
}

li{
  list-style-type: none;
  padding: none;
}
</style>
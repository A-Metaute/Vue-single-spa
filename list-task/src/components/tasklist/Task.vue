<template>
    <div :class="completed">
        <p>
            {{visibleText}}
        </p>
        <div id="buttons" :class="completed">
            <button v-if="!task.completed" @click="$emit('taskCompleted', task.tID)">
                Complete
            </button>
            <button v-else @click="$emit('taskCompleted', task.tID)">
                Uncomplete
            </button>
            <button @click="$emit('taskDeleted', task.tID)">
                Delete
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps(["task"]);

const task = ref(props.task);

const completed = (task.value.completed) ? "completed" : "active"; 

const visibleText = computed(() => {
  //canviar el filtre, ara només compara strings
  return (task.value.name.length > 300) ? task.value.name.slice(0, 300).concat("...") : task.value.name;
});

onMounted(() => {
    //console.log(task.value);
    //console.log(task.value.completed);
    //console.log(typeof(task.value.completed));
    //console.log(task.value.completed == true);
});
</script>

<style scoped>
div {
    padding: 1rem;
    background-color: lightblue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:50vw;
    border-radius: 10px;
}

div.completed{
    background-color: rgb(253, 172, 141);
}

#buttons{
    margin-left: 1rem;
    padding: 0px;
    width:auto;
    gap:1rem;
}

button {
    background-color:lightgray;
    border:0px;
    padding:0.5rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
}

button:hover{
    background-color: orange;
}

button:active{
    background-color: orangered;
}

p{
    margin:0rem;
    text-align: justify;
}

</style>
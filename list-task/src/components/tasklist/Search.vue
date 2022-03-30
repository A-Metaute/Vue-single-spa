<template>
    <form action="" @submit.prevent>
        <input type="text" v-model="word" placeholder="Search">
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const word = ref("");

defineExpose({
    word,
})
</script>

<style scoped>
input{
    width:15rem;
    height:1.5rem;
    font-size:1.5rem;
    padding:5px;
    text-align: center;
}
</style>

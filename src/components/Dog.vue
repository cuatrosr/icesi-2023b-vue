<script setup>
import { onMounted, ref } from 'vue';
import axios from '@/config/axios.js'

const props = defineProps({
    dog: {
        type: Object,
        required: true
    }
})

let img = ref("")
const getImg = () => {
    axios.get("breed/" + props.dog.breed + "/images/random")
        .then(res => {
            img.value = res.data.message
        })
}

onMounted(getImg)
</script>

<template>
    <v-card color="grey lighten-2">
        <v-card-title>
            <h3>{{ dog.name }}</h3>
            <p>{{ dog.breed }}</p>
        </v-card-title>
        <v-img cover :src="img" height="200px" />
    </v-card>
</template>
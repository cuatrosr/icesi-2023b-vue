<script setup>
import { Dogs } from '@/data/dogs.js'
import Dog from "./Dog.vue"
const dogs = Dogs
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col xs="12" md="3" sm="4" v-for="pet in dogs">
                <Dog :dog="pet" />
            </v-col>
        </v-row>
    </v-container>
</template>
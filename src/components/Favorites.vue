<script setup>
let favorites = [
    {
        name: "Duke",
        breed: "doberman",
        img: "https://images.dog.ceo/breeds/doberman/n02107142_4653.jpg",
    },
    {
        name: "Lily",
        breed: "malamute",
        img: "https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg",
    },
]
</script>

<template>
    <div>
        <v-list>
            <v-list-subheader>My Favorites</v-list-subheader>
            <v-list-item v-for="(dog, index) in favorites" :key="index" :prepend-avatar="dog.img" :title="dog.breed"
                :subtitle="dog.name">
            </v-list-item>
        </v-list>
    </div>
</template>
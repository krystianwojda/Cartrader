<template>
  <div class="w-full">
    <CarCard v-for="car in data" :key="car.id" :car="car" @favor="handleFavorite" :favored="car.id in favorite"/>
  </div>
</template>

<script setup>
  import cars from '@/data/cars.json';
  
  const data = cars;
  const favorite = useLocalStorage("favorite", {});

  const handleFavorite = (id) => {
    if (id in favorite.value) {
      delete favorite.value[id]
    } else {
      favorite.value = {
        ...favorite.value,
        [id]: true
      }
    }
  }
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in data" :key="car.id" :car="car"/>
  </div>
</template>

<script setup>
  import cars from '@/data/cars.json';
  
  const data = cars;
</script>
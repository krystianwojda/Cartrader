<template>
  <div class="mt-10">
    <img :src="car.image" class="w-full" :alt="car.name">
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car.numberOfSeats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }}km</p>
      </div>
      <div>
        <p class="font-bold text-2xl">Cena: {{ car.price }} zł</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    car: Object
  });
</script>
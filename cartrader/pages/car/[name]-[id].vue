<template>
  <div>
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <CarDetailHero :car="car"/>
    </div>
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div v-if="car">
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact/>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: route.params.name
})

const {data: car} = await useFetchCar(route.params.id);
</script>
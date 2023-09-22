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
import cars from "@/data/cars.json";

const route = useRoute();
const data = cars;

useHead({
  title: route.params.name
})

const car = computed(() => {
  return data.find((c) => {
    return c.id === parseInt(route.params.id)
  })
})

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID ${route.params.id} does not exist`
  })
}
</script>
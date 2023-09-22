<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <div class="flex h-full">
      <img :src="car.url" alt="" class="w-[300px] h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <div class="p-4 flex flex-col">
        <div class="flex justify-between">
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <img class="w-7 right-5 top-2" :src="favored ? heartFilled : heartOutline" alt="" @click="favored = !favored"/>
        </div>
        <p class="text-gray-700">{{ car.description }}</p>
        <h1 class="mt-auto text-xl">{{ car.price}} zł</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
  import heartFilled from '@/assets/heartFilled.png';
  import heartOutline from '@/assets/heartOutline.png';

  const props = defineProps({
    car: Object
  });

  const favored = useState(`favored-${props.car.id}`, () => {
    return false;
  })
</script>
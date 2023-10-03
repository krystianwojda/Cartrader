<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <div class="flex h-full">
      <img :src="`${config.public.supabase.url}/storage/v1/object/public/images/public/${car.image}`" alt="" class="w-[300px] h-full">
      <div class="p-4 flex flex-col">
        <div class="flex justify-between">
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <img class="w-7 right-5 top-2"
               :src="favored ? heartFilled : heartOutline"
               @click="emit('favor', car.id)"/>
        </div>
        <p class="text-gray-700">{{ car.description }}</p>
        <h1 class="mt-auto text-xl">{{ car.price}} zł</h1>
        <button class="bg-blue-400 mt-1 mb-1 p-2" @click="navigateTo(`/car/${car.name}-${car.id}`)">Show detail</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import heartFilled from '@/assets/heartFilled.png';
  import heartOutline from '@/assets/heartOutline.png';

  const props = defineProps({
    car: Object,
    favored: Boolean
  });

  const config = useRuntimeConfig();

  const emit = defineEmits(['favor'])
</script>
<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="rounded shadow mt-20">
      <CarMessageCard v-for="message in messages" :key="message.id" :message="message"/>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const {data: messages} = useFetch(`/api/car/listings/${route.params.id}/message`);
</script>
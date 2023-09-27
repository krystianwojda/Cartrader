<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink to="/profile/listings/create" class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer">+</NuxtLink>
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard v-for="listing in listings" :key="listing" :listing="listing"/>
    </div>
  </div>
</template>

<script setup>
import listing from '@/data/listings.json';

definePageMeta({
  middleware: [
      function (to, from) {
        const user = useSupabaseUser();
        if (user.value) {
          return;
        }
        return navigateTo('/login');
      }
  ]
});

const listings = listing;
</script>
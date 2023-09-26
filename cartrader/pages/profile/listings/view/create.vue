<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="mt-24">
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput"/>
    </div>
  </div>
</template>

<script setup>
import dataMake from '@/data/makes.json';

const makes = dataMake;
const info = useState('adInfo', () => {
  return {
    make: '',
    model: '',
    year: '',
    miles: '',
    price: '',
    city: '',
    seats: '',
    description: '',
    image: null
  }
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};
</script>
<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="mt-24">
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput"/>
      <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput"/>
      <CarAdTextarea title="Description *" name="description" placeholder="Some description..." @change-input="onChangeInput"/>
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
    features: '',
    description: '',
    image: null
  }
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: 'Model *',
    name: 'model',
    placeholder: "Civic"
  },
  {
    id: 1,
    title: 'Year *',
    name: 'year',
    placeholder: "2019"
  },
  {
    id: 3,
    title: 'Miles *',
    name: 'Miles',
    placeholder: "22182"
  },
  {
    id: 4,
    title: 'City *',
    name: 'city',
    placeholder: "Oklahoma"
  },
  {
    id: 5,
    title: 'Number of Seats *',
    name: 'seats',
    placeholder: "5"
  },
  {
    id: 6,
    title: 'Features *',
    name: 'features',
    placeholder: "Leather Interior, No Accidents"
  },
];
</script>
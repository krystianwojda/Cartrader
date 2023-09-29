<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="mt-24">
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput"/>
      <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput"/>
      <CarAdTextarea title="Description *" name="description" placeholder="Some description..." @change-input="onChangeInput"/>
      <CarAdImage @change-input="onChangeInput"/>
      <div>
        <button :disabled="isButtonDisabled" @click="handleSubmit" class="bg-blue-400 text-white rounded py-2 px-7 mt-3">Submit</button>
        <p v-if="errorMessage" class="mt-3 text-red-500">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataMake from '~/data/makes.json';

const makes = dataMake;
const user = useSupabaseUser();
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
    image: 'asdasd'
  }
});
const errorMessage = ref('');

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
    id: 2,
    title: 'Year *',
    name: 'year',
    placeholder: "2019"
  },
  {
    id: 3,
    title: 'Price *',
    name: 'price',
    placeholder: "10 000"
  },
  {
    id: 4,
    title: 'Miles *',
    name: 'Miles',
    placeholder: "22182"
  },
  {
    id: 5,
    title: 'City *',
    name: 'city',
    placeholder: "Oklahoma"
  },
  {
    id: 6,
    title: 'Number of Seats *',
    name: 'seats',
    placeholder: "5"
  },
  {
    id: 7,
    title: 'Features *',
    name: 'features',
    placeholder: "Leather Interior, No Accidents"
  },
];

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true
  }
  return false;
});

const handleSubmit = async () => {
  const body = {
    ...info.value,
    features: info.value.features.split(', '),
    numberOfSeats: parseInt(info.value.seats),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    year: parseInt(info.value.price),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id
  };

  delete body.seats;

  try {
    const response = await $fetch('/api/car/listings', {
      method: 'POST',
      body
    });
    navigateTo('/profile/listings')
  } catch (error) {
    errorMessage.value = error.statusMessage;
  }
};
</script>
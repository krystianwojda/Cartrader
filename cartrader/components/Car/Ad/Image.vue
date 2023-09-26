<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-cyan-500 mb-1 text-sm">Image *</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input type="file" class="opacity-0 absolute cursor-pointer" accept="image/*" @change="onImageUpload">
          <button class="bg-blue-400 mt-1 mb-1 p-2 text-white cursor-pointer">Browse File</button>
        </div>
        <div class="border p-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" class="img-fluid" :alt="image.preview"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const image = useState('carImage', () => {
  return {
    preview: null,
    image: null
  }
});

const emits = defineEmits(['changeInput']);

const onImageUpload = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits('changeInput', input.files[0], 'image');
  }
};
</script>
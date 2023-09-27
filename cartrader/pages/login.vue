<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="mt-10">
      {{user}}
      <h1 class="text-5xl font-bold mb-7">Log in</h1>
      <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">Login with google</button>
    </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const login = async () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  if (error) {
    console.log(error);
  }
};
</script>
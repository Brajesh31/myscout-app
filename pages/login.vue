<template>
  <div class="w-full min-h-screen flex items-center justify-center p-2">
    <Card class="w-full max-w-[28rem]">
      <template #header>
        <div class="w-full flex justify-center">
          <img :src="Logo" class="size-32 " />
        </div>

        <div class="text-center text-(--p-primary-500) text-2xl font-bold">MyScout</div>
      </template>

      <template #content>
        <LoginForm v-if="currentForm === 0" @jump="currentForm = 1" />
        <RegisterForm v-else @jump="currentForm = 0" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import Logo from '~/assets/images/logo_square_transparent.png'
import LoginForm from '~/components/Auth/LoginForm.vue';
import RegisterForm from '~/components/Auth/RegisterForm.vue';

const currentForm = ref(0)

definePageMeta({
  layout: false
})


useHead({
  title: 'Login'
})
</script>
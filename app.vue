<template>
  <div class="flex flex-row">
      <div class="w-1/3 flex items-center justify-center px-24 py-24">
          <NuxtLink
          to="/login"
          class="px-4 py-2 font-medium text-4xl text-white capitalize transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-800 focus:ring-opacity-80"
          >
              LoginPage
          </NuxtLink>
      </div>

      <div class="w-1/3 px-12 py-12 my-24 mx-24">
        <form class="space-y-3">
          <div>
            <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">Register</h1>
          </div>
          <div class="space-y-2">
            <label for="email" class="block font-medium tracking-tight">Email</label>
            <input placeholder="your email" type="email" v-model="email" id="email" class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2">
          </div>
          <div class="space-y-2">
          <label for="password" class="block font-medium tracking-tight">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
            placeholder="*********"
          />
        </div>
        <div class="flex justify-end">
          <button @click="createUser" type="button" class="inline-flex items-center text-white px-5 py-2 rounded-lg overflow-hidden focus:outline-none bg-indigo-500 hover:bg-indigo-600 font-semibold tracking-tight">Register</button>
        </div>
        </form>
      </div>
  </div>
</template>

<script>
import { handleError } from 'nuxt/dist/app/compat/capi';

export default {
  data: ()=>({
    email: "",
    password: "",
  }),
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$router.push('/dashboard')
      } catch (e) {
        handleError(e);
      }
    }
  }
}
</script>

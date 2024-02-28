<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/vamos"
    >
      <img class="w-36 md:w-32 lg:w-32 sm:w-16" src="../../assets/vamos.webp" />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">Admin</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
      style="line-height: 2.6"
    >
      Vamos
    </p>
  </div>
</template>

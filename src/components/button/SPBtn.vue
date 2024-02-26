<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/sp"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/dashboard/legislative-tracking-archiving-sp.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">SP</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Legislative Tracking
    </p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      & Archiving
    </p>
  </div>
</template>

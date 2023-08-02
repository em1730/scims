<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/userLogs"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/masterlist/User_Logs_Management.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800">User Log</p>
  </div>
</template>

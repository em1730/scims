<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/brgyMasterlist"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/masterlist/Barangay_Masterlist.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">Barangay</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Barangay
    </p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Masterlist
    </p>
  </div>
</template>

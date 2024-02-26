<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/barangay"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/dashboard/certificate-and-clearance-issuance.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">Certificate</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Certification &
    </p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Clearances
    </p>
  </div>
</template>

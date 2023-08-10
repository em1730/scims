<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/docMasterlist"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/masterlist/Document_Masterlist.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">Document Type</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Document Type
    </p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Masterlist
    </p>
  </div>
</template>

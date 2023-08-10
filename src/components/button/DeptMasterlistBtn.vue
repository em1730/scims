<template>
  <div class="group hover:scale-110 duration-300">
    <q-btn
      flat
      unelevated
      dense
      color="white"
      :ripple="{ color: 'white' }"
      to="/deptMasterlist"
    >
      <img
        class="w-36 md:w-32 lg:w-32 sm:w-16"
        src="../../assets/icons/masterlist/Department_Masterlist.webp"
      />
    </q-btn>
    <p class="text-xs group-hover:text-blue-800 lg:hidden">Department</p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Department
    </p>
    <p
      class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
    >
      Administration
    </p>
  </div>
</template>

<template>
  <div>
    <q-btn :to="to" rounded size="13px" :label="label" color="grey-7" style="width:120px" />
  </div>
</template>

<script setup>

const props = defineProps({
  to: String,
  label: String,
})


</script>

<style lang="scss" scoped></style>

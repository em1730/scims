<template>
  <div>
    <q-input :model-value="data" dense outlined square filled flat readonly disable :placeholder="placeholder"
      :mask="mask" />
  </div>
</template>

<script setup>

const props = defineProps({
  data: String,
  placeholder: String,
  mask: String
})
const emits = defineEmits(['viewValue']);
</script>

<style lang="scss" scoped></style>

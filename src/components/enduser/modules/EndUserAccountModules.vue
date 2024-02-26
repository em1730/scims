<template>
  <div class="" style="border: 5px; border-radius: 15px;">
    <q-radio dense @update:model-value="$emit('updateValue', val)" :val="val" color="cyan" />
  </div>
</template>

<script setup>
import { ref } from "vue"


const props = defineProps({
  val: String
})
const emits = defineEmits(["updateValue"])



</script>

<style lang="scss" scoped>
// .field {
//   border-radius: 15px;
//   border: 5px;

// }
</style>

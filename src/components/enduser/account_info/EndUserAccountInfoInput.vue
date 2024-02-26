<template>
  <div>
    <q-input @update:model-value="$emit('updateValue', data)" v-model="data" outlined square dense flat />
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref();
const emits = defineEmits(["updateValue"]);
</script>

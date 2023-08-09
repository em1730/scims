<template>
  <q-input dense square filled :label="label" :type="type" />
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
});
</script>

<style lang=""></style>

<template>
  <q-input square filled :label="label" :type="type"  :mask="mask"/>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
  mask: String,
});
</script>

<style lang=""></style>

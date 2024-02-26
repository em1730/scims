<template>
  <q-input dense rounded outlined :label="label" :type="type" />
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
});
</script>

<style lang=""></style>

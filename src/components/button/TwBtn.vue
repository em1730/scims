<template>
  <button
    :type="type"
    class="rounded-md transition-color duration-200 ease-soft-in-out bg-gradient-to-tl from-gray-900 to-slate-600 hover:scale-110 hover:shadow-soft-xs px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: String,
});
</script>

<style lang="scss" scoped></style>

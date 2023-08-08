<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar, LoadingBar } from "quasar";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();

    LoadingBar.setDefaults({
      color: "green",
      size: "3px",
    });

    // Start the loading bar
    $q.loadingBar.start();

    // Simulate some asynchronous operation
    setTimeout(() => {
      // Stop the loading bar after the operation is complete
      $q.loadingBar.stop();
    }); // Simulated 2-second operation

    return {};
  },
});
</script>

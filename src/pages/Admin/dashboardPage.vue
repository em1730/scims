<template>
  <q-page padding>
    <div class="pt-20 grid place-items-center">
      <div class="pb-5">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <img
            class="h-48 w-48 rounded-full border drop-shadow-2xl"
            src="https://vamosmobile.app/sccdrrmo/flutter/images/647acfbcc8828.jpg"
            alt="Profile Picture"
          />
        </transition>
      </div>
      <div class="pb-10">
        <p class="text-center text-3xl">Jerhod Kyan A. Ricabo</p>
      </div>

      <div
        class="flex flex-wrap vertical:flex-col justify-center items-center text-center"
      >
        <!-- System Buttons  -->
        <transition-group
          appear
          enter-active-class="animated animate__zoomIn"
          leave-active-class="animated animate__zoomOut"
        >
          <DoctrackBtn key="doctrack-button" />
          <JomisBtn key="jomis-button" />
          <SPBtn key="sp-button" />
          <AdminBtn key="admin-button" />
        </transition-group>
        <!-- End of System Buttons  -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import JomisBtn from "components/button/JomisBtn.vue";
import DoctrackBtn from "components/button/DoctrackBtn.vue";
import SPBtn from "components/button/SPBtn.vue";
import AdminBtn from "components/button/AdminBtn.vue";
</script>

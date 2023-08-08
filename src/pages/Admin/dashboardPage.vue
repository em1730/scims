<template>
  <q-page padding>
    <div class="pt-20 grid place-items-center">
      <div class="pb-5">
        <transition
          appear
          enter-active-class="animated animate__fadeIn"
          leave-active-class="animated animate__fadeOut"
        >
          <img
            class="h-48 w-48 rounded-full border drop-shadow-2xl"
            v-bind:src="UserData.image"
            alt="Profile Picture"
          />
        </transition>
      </div>
      <div class="pb-10">
        <p class="text-center text-3xl">
          {{
            UserData.first_name +
            " " +
            UserData.middle_name +
            " " +
            UserData.last_name
          }}
        </p>
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
          <CertClearanceBtn key="CertClearance-button" />
          <SPBtn key="sp-button" />
          <JomisBtn key="jomis-button" />
          <SeniorBtn key="senior-button" />
          <GsdBtn key="gsd-button" />
          <LetBtn key="let-button" />
          <ETurismoBtn key="eTurismo-button" />
          <HrisBtn key="hris-button" />
          <AdminBtn key="admin-button" />
        </transition-group>
        <!-- End of System Buttons  -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import { UserData } from "../../constants/global_constants";

import JomisBtn from "components/button/JomisBtn.vue";
import DoctrackBtn from "components/button/DoctrackBtn.vue";
import SPBtn from "components/button/SPBtn.vue";
import AdminBtn from "components/button/AdminBtn.vue";
import CertClearanceBtn from "components/button/CertClearanceBtn.vue";
import SeniorBtn from "components/button/SeniorBtn.vue";
import GsdBtn from "components/button/GsdBtn.vue";
import LetBtn from "components/button/LetBtn.vue";
import ETurismoBtn from "components/button/ETurismoBtn.vue";
import HrisBtn from "components/button/HrisBtn.vue";
</script>

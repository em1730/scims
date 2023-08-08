<template>
  <body class="h-screen w-auto">
    <div class="content-auto">
      <div class="pt-20">
        <div class="grid place-items-center">
          <div class="pb-10 pt-5">
            <p
              class="text-center text-4xl portrait:text-3xl landscape:text-3xl"
            >
              MASTER LISTING
            </p>
          </div>

          <div
            class="flex flex-wrap vertical:flex-col justify-center items-center transition-all text-center"
          >
            <transition-group
              appear
              enter-active-class="animated animate__zoomIn"
              leave-active-class="animated animate__zoomOut"
            >
              <!-- System Buttons  -->
              <BrgyMasterlistBtn key="BrgyMasterlist-button" />
              <DeptMasterlistBtn key="DeptMasterlist-button" />
              <DocMasterlistBtn key="DocMasterlist-button" />
              <!-- End of System Buttons  -->
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import BrgyMasterlistBtn from "components/button/BrgyMasterlistBtn.vue";
import DeptMasterlistBtn from "components/button/DeptMasterlistBtn.vue";
import DocMasterlistBtn from "components/button/DocMasterlistBtn.vue";
</script>

<template>
  <body class="h-screen w-auto">
    <div class="content-auto">
      <div class="pt-20">
        <div class="grid place-items-center">
          <div class="pb-10 pt-5">
            <p
              class="text-center text-4xl portrait:text-3xl landscape:text-3xl"
            >
              ADMINISTRATION
            </p>
          </div>

          <div
            class="flex flex-wrap vertical:flex-col justify-center items-center transition-all text-center"
          >
            <!-- System Buttons  -->
            <transition-group
              appear
              enter-active-class="animated animate__zoomIn"
              leave-active-class="animated animate__zoomOut"
            >
              <ModuleBtn key="Module-button" />
              <EndUserBtn key="EndUser-button" />
              <UserLogsBtn key="UserLogs-button" />
              <MasterListBtn key="MasterList-button" />
            </transition-group>
            <!-- End of System Buttons  -->
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import EndUserBtn from "components/button/EndUserBtn.vue";
import MasterListBtn from "components/button/MasterListBtn.vue";
import UserLogsBtn from "components/button/UserLogsBtn.vue";
import ModuleBtn from "components/button/ModuleBtn.vue";
</script>

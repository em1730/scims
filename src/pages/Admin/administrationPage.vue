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
            <!-- <a href="/scims_final/system">
              <button
                class="group hover:scale-110 duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
                type="submit"
              >
                <img
                  class="w-36 md:w-32 lg:w-32 sm:w-16"
                  src="https://vamosmobile.app/scims_final/resources/images/module.webp"
                />
                <p class="text-xs group-hover:text-blue-800 lg:hidden">
                  Module
                </p>
                <p
                  class="text-xs group-hover:text-blue-800 lg:block sm:hidden portrait:hidden"
                >
                  Module Management
                </p>
              </button>
            </a>
            <a href="#">
              <button
                class="group hover:scale-110 duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
                type="submit"
              >
                <img
                  class="w-36 md:w-32 lg:w-32 sm:w-16"
                  src="https://vamosmobile.app/scims_final/resources/images/end_user.webp"
                />
                <p class="text-xs group-hover:text-blue-800">End User</p>
              </button>
            </a>
            <a href="#">
              <button
                class="group hover:scale-110 duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
                type="submit"
              >
                <img
                  class="w-36 md:w-32 lg:w-32 sm:w-16"
                  src="https://vamosmobile.app/scims_final/resources/images/user_logs.webp"
                />
                <p class="text-xs group-hover:text-blue-800">User Logs</p>
              </button>
            </a>
            <a href="#">
              <button
                class="group hover:scale-110 duration-300"
                data-te-ripple-init
                data-te-ripple-color="light"
                type="submit"
              >
                <img
                  class="w-36 md:w-32 lg:w-32 sm:w-16"
                  src="https://vamosmobile.app/scims_final/resources/images/masterlisting.webp"
                />
                <p class="text-xs group-hover:text-blue-800">Master List</p>
              </button>
            </a> -->

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

<template>
  <q-layout view="hHh lpR fFf" class="select-none">
    <nav
      class="transition-all duration-300 ease-in-out delay-300 bg-gradient-to-tl from-gray-800 to-slate-700 drop-shadow-2xl"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <transition-group
                appear
                enter-active-class="animated animate__zoomIn"
                leave-active-class="animated animate__zoomOut"
              >
                <img
                  class="block h-9 w-auto lg:hidden"
                  src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico"
                  alt="SCC LGU"
                  key="scc-logo"
                />
                <img
                  class="hidden h-9 w-auto lg:block"
                  src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico"
                  alt="SCC LGU"
                  key="scc-logooctrack-button"
                />
              </transition-group>
            </div>
            <div class="sm:hidden md:block portrait:hidden">
              <div class="flex space-x-4">
                <p class="text-white px-1 py-2 rounded-md text-xl font-medium">
                  San Carlos Integrated Management System
                </p>
              </div>
            </div>
          </div>

          <div class="q-pa-md">
            <q-btn-dropdown
              :ripple="false"
              class="duration-300 border flex items-center text-sm font-medium text-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-100 bg-gray-600"
              v-bind:label="
                UserData.first_name +
                ' ' +
                UserData.last_name
              "
            >
              <q-list class="bg-gray-200">
                <router-link to="/">
                  <q-item dense clickable v-close-popup>
                    <q-item-section avatar>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-2 fill-current"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                  </q-item>
                </router-link>

                <q-item dense clickable v-close-popup>
                  <q-item-section avatar>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 ml-2 fill-current"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z"
                      />
                    </svg>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Register Account</q-item-label>
                  </q-item-section>
                </q-item>

                <router-link to="/manageAcct">
                  <q-item dense clickable v-close-popup>
                    <q-item-section avatar>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-2 fill-current"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 00-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 00.649.375h2.158zM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 006 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 000-.75L7.839 7.758zM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 004.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 00-.65.375l-1.078 1.868z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.13 4.347l.644-1.117a.75.75 0 00-1.299-.75l-.644 1.116a6.954 6.954 0 00-2.081-.556V1.75a.75.75 0 00-1.5 0v1.29a6.954 6.954 0 00-2.081.556L6.525 2.48a.75.75 0 10-1.3.75l.645 1.117A7.04 7.04 0 004.347 5.87L3.23 5.225a.75.75 0 10-.75 1.3l1.116.644A6.954 6.954 0 003.04 9.25H1.75a.75.75 0 000 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 10.75 1.298l1.117-.644a7.04 7.04 0 001.523 1.523l-.645 1.117a.75.75 0 101.3.75l.644-1.116a6.954 6.954 0 002.081.556v1.29a.75.75 0 001.5 0v-1.29a6.954 6.954 0 002.081-.556l.645 1.116a.75.75 0 001.299-.75l-.645-1.117a7.042 7.042 0 001.523-1.523l1.117.644a.75.75 0 00.75-1.298l-1.116-.645a6.954 6.954 0 00.556-2.081h1.29a.75.75 0 000-1.5h-1.29a6.954 6.954 0 00-.556-2.081l1.116-.644a.75.75 0 00-.75-1.3l-1.117.645a7.04 7.04 0 00-1.524-1.523zM10 4.5a5.475 5.475 0 00-2.781.754A5.527 5.527 0 005.22 7.277 5.475 5.475 0 004.5 10a5.475 5.475 0 00.752 2.777 5.527 5.527 0 002.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 002.78-.753 5.527 5.527 0 002.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 00-.753-2.78 5.528 5.528 0 00-2.028-2.002A5.475 5.475 0 0010 4.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Manage Account</q-item-label>
                    </q-item-section>
                  </q-item>
                </router-link>

                <router-link to="/login">
                  <q-item dense clickable v-close-popup>
                    <q-item-section avatar>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-2 fill-current"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Sign Out</q-item-label>
                    </q-item-section>
                  </q-item>
                </router-link>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
    </nav>

    <q-page-container>
      <!-- <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >

      </transition> -->
      <div
        class="overflow-y-auto transition-all duration-300 bg-cover bg-center"
        style="background-image: url(src/assets/bg.png)"
      >
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { reactive } from "vue";
import { UserData } from "../constants/global_constants";
</script>

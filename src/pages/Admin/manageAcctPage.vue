<template>
  <transition
    appear
    enter-active-class="animated animate__fadeIn"
    leave-active-class="animated animate__fadeOut"
  >
    <q-page padding>
      <div class="pt-10 grid place-items-center">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <q-card
              class="my-card border-gray-400 drop-shadow-2xl"
              flat
              bordered
            >
              <q-card-section align="center" class="overflow-auto">
                <img
                  class="h-48 w-48 rounded-full border drop-shadow-2xl mt-4"
                  v-bind:src="UserData.image"
                  alt="Profile Picture"
                />
                <p class="text-center text-2x portrait:text-xs pt-4">
                  {{
                    UserData.first_name +
                    " " +
                    UserData.middle_name +
                    " " +
                    UserData.last_name
                  }}
                </p>
                <p
                  class="text-center text-sm portrait:text-xs text-gray-500 pb-4"
                >
                  {{ UserData.entity_no }}
                </p>

                <p class="text-center text-xl portrait:text-xs pb-4">
                  Contact Information
                </p>
                <p class="text-left text-lg portrait:text-xs text-blue-700">
                  Job Designation:
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3 pb-2"
                >
                  {{ UserData.job_designation }}
                </p>

                <p class="text-left text-lg portrait:text-xs text-blue-700">
                  Birthdate:
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3 pb-2"
                >
                  {{ UserData.birthdate }}
                </p>

                <p class="text-left text-lg portrait:text-xs text-blue-700">
                  Email Address:
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3 pb-2"
                >
                  {{ UserData.email_address }}
                </p>

                <p class="text-left text-lg portrait:text-xs text-blue-700">
                  Phone Number:
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3 pb-2"
                >
                  {{ UserData.phone }}
                </p>

                <p class="text-left text-lg portrait:text-xs text-blue-700">
                  Address:
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3"
                >
                  {{ UserData.street }}
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3"
                >
                  {{ UserData.barangay }}
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3"
                >
                  {{ UserData.city }}, {{ UserData.province }}
                </p>
                <p
                  class="text-left text-lg portrait:text-xs text-gray-500 pl-3"
                >
                  {{ UserData.country }}
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-span-2">
            <q-card
              class="my-card border-gray-400 drop-shadow-2xl"
              flat
              bordered
            >
              <q-card-section align="center">
                <div>
                  <q-tabs v-model="tab" class="text-lime-800" align="left">
                    <q-tab
                      name="edit_profile"
                      icon="edit"
                      label="Edit Profile"
                    />
                    <q-tab name="settings" icon="settings" label="Settings" />
                    <q-tab name="module" icon="view_module" label="Module" />
                  </q-tabs>
                  <q-separator />
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <!-- Profile Tab Content -->
                    <q-tab-panel name="edit_profile">
                      <div class="text-h4 q-mb-md">Profile Details</div>
                      <div class="grid grid-cols-3 gap-4">
                        <InputSquare
                          readonly
                          v-model="UserData.first_name"
                          label="First Name"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.middle_name"
                          label="Middle Name"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.last_name"
                          label="Last Name"
                        />

                        <SelectInput
                          readonly
                          v-model="UserData.gender"
                          label="Gender"
                          :options="SelectOption.gender"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.birthdate"
                          label="Birthdate"
                          type="date"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.email_address"
                          label="Email Address"
                          type="email"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.phone"
                          label="Phone Number"
                          fill-mask
                          mask="#### ### ####"
                        />
                      </div>

                      <div class="text-h4 q-mb-md pt-4">Address</div>
                      <div class="grid grid-cols-3 gap-4">
                        <InputSquare
                          readonly
                          v-model="UserData.street"
                          label="Street"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.barangay"
                          label="Barangay"
                        />
                        <InputSquare
                          readonly
                          v-model="UserData.city"
                          label="City"
                        />

                        <SelectInput
                          readonly
                          v-model="UserData.province"
                          :options="SelectOption.province"
                          label="Province"
                        />

                        <SelectInput
                          readonly
                          v-model="UserData.country"
                          :options="SelectOption.country"
                          label="Country"
                        />
                      </div>
                      <q-separator class="mt-4" />
                      <q-card-actions align="right">
                        <button
                          type="submit"
                          class="rounded-md transition-color duration-200 ease-soft-in-out bg-gradient-to-tl from-gray-900 to-slate-600 hover:scale-105 hover:shadow-soft-xs px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save & Update
                        </button>
                      </q-card-actions>
                    </q-tab-panel>
                    <!-- End of Profile Tab Content -->

                    <!-- Module Tab Content -->
                    <q-tab-panel name="module">
                      <!-- <div class="text-h4 q-mb-md">Module</div> -->
                      <div class="grid grid-cols-2 gap-4">
                        <!-- Doctrack -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Document Tracking System :
                        </label>
                        <InputRounded disable v-model="UserData.doctrack_sys" />
                        <!-- End of Doctrack -->

                        <!-- Jomis -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Job Order Management Information Office System :
                        </label>
                        <InputRounded disable v-model="UserData.jomis_sys" />
                        <!-- End of Jomis -->

                        <!-- Vamos Cares -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Vamos Cares :
                        </label>
                        <InputRounded disable v-model="UserData.vamos_sys" />
                        <!-- End of Vamos Cares -->

                        <!-- Resbakuna -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Resbakuna :
                        </label>
                        <InputRounded
                          disable
                          v-model="UserData.resbakuna_sys"
                        />
                        <!-- End of Resbakuna -->

                        <!-- SP -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Legislative Tracking & Archiving :
                        </label>
                        <InputRounded disable v-model="UserData.let_sys" />
                        <!-- End of SP -->

                        <!-- GSD -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          GSD :
                        </label>
                        <InputRounded disable v-model="UserData.gsd_sys" />
                        <!-- End of GSD -->

                        <!-- HRIS -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Human Resource Information System :
                        </label>
                        <InputRounded disable v-model="UserData.hris_sys" />
                        <!-- End of HRIS -->

                        <!-- E-Turismo -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          E-Turismo :
                        </label>
                        <InputRounded
                          disable
                          v-model="UserData.e_turismo_sys"
                        />
                        <!-- End of E-Turismo -->

                        <!-- Certificate & Clearance -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Certificate & Clearance :
                        </label>
                        <InputRounded
                          disable
                          v-model="UserData.cert_clearance_sys"
                        />
                        <!-- End of Certificate & Clearance -->

                        <!-- Senior -->
                        <label
                          class="text-left self-center text-lg portrait:text-xs"
                        >
                          Senior-on-the-Go :
                        </label>
                        <InputRounded disable v-model="UserData.senior_sys" />
                        <!-- End of Senior -->
                      </div>
                    </q-tab-panel>
                    <!-- End of Module Tab Content -->

                    <!-- Settings Tab Content -->
                    <q-tab-panel name="settings">
                      <!-- <div class="text-h4 q-mb-md">Settings</div> -->
                      <q-separator />
                      <div class="grid grid-cols-2 divide-x gap-1">
                        <div class="text-left p-4">
                          <label
                            class="text-2xl portrait:text-xs text-blue-600 pl-3"
                          >
                            Department
                          </label>

                          <div class="indent-8 pt-4">
                            <label class="text-lg">Department:</label>
                            <InputRounded
                              v-model="UserData.department"
                              readonly
                            />
                          </div>

                          <div class="indent-8 pt-4">
                            <label class="text-lg">Division:</label>
                            <InputRounded
                              v-model="UserData.division"
                              readonly
                            />
                          </div>

                          <div class="indent-8 pt-4">
                            <label class="text-lg">Section:</label>
                            <InputRounded v-model="UserData.section" readonly />
                          </div>
                        </div>

                        <div class="text-left p-4">
                          <label
                            class="text-2xl portrait:text-xs text-blue-600 pl-3"
                          >
                            Edit Account Credentials
                          </label>

                          <div class="indent-8 pt-4">
                            <label class="text-lg">Username:</label>
                            <InputRounded
                              v-model="UserData.username"
                              readonly
                            />
                          </div>

                          <div class="indent-8 pt-4">
                            <label class="text-lg">Change Password:</label>
                            <InputRounded
                              v-model="UserData.password"
                              readonly
                              type="password"
                            />
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>
                    <!-- End of Settings Tab Content -->
                  </q-tab-panels>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script setup>
import { ref } from "vue";

import InputRounded from "../../components/input/InputFieldRounded.vue";
import InputSquare from "../../components/input/InputFieldSquare.vue";
import SelectInput from "../../components/select/SelectInput.vue";

import { UserData, SelectOption } from "../../constants/global_constants";

const gender = ref(null); //Default Value for Gender
const tab = ref("edit_profile"); //Default Tab View
</script>

<style scoped></style>

<template>
  <transition
    appear
    enter-active-class="animated animate__fadeIn"
    leave-active-class="animated animate__fadeOut"
  >
    <div class="w-full">
      <div class="content-auto w-screen h-full">
        <div class="px-20 pt-5 h-screen w-full">
          <div class="pb-10">
            <div class="grid grid-cols-1 gap-4">
              <div class="flex justify-between w-full">
                <router-link to="/">
                  <TwBtn>Back</TwBtn>
                </router-link>
              </div>
              <!-- //Main Form Content Here -->
              <div class="border shadow-2xl rounded-md bg-white">
                <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                  <p class="text-white text-2xl font-bold">
                    BARANGAY MASTERLIST
                  </p>
                </nav>

                <div class="p-5 gap-4">
                  <div class="w-full">
                    <div class="w-full flex">
                      <div id="recipients" class="w-full text-2xl">
                        <q-table
                          class="bg-gray-200 text-weight-bolder text-justify text-body1"
                          flat
                          bordered
                          separator="vertical"
                          virtual-scroll
                          :columns="Barangay.columns"
                          :rows="rows"
                          :filter="filter"
                        >
                          <template v-slot:top>
                            <div class="flex justify-end w-full">
                              <div>
                                <TwInput
                                  v-model="filter"
                                  class="mt-1"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                          </template>

                          <template v-slot:body-cell-options="props">
                            <q-td :props="props">
                              <div class="space-x-2">
                                <TwBtn @click="handleDialog()">Open</TwBtn>
                              </div>
                            </q-td>
                          </template>
                        </q-table>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- User Dialog -->
                <q-dialog v-model="brgyDialog">
                  <q-card style="width: 820px; max-width: 80vw; height: 550px">
                    <q-form @submit="updateBrgy()">
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col-11">
                            <TwBtn v-close-popup>BACK</TwBtn>
                          </div>

                          <div class="col-1">
                            <TwBtn v-close-popup>UPDATE</TwBtn>
                          </div>
                        </div>

                        <div class="q-pa-md row items-start q-gutter-md">
                          <q-card
                            style="
                              width: 240px;
                              max-width: 80vw;
                              height: 270px;
                              border-radius: 10px;
                            "
                          >
                            <q-card-section>
                              <q-img
                                width="180px"
                                height="180px"
                                src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico"
                              />
                              <q-btn
                                class="glossy q-mt-md"
                                v-close-popup
                                rounded
                                @click="handlePhotoDialog()"
                                style="
                                  background-color: rgba(191, 195, 203, 0.96);
                                  text-fill-color: black;
                                  width: 200px;
                                "
                                align="center"
                                ><q-icon name="upload" /> Upload Logo</q-btn
                              >
                            </q-card-section>
                          </q-card>

                          <q-card
                            style="width: 500px; max-width: 80vw; height: 435px"
                          >
                            <q-card-section>
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Barangay Name"
                                v-model="userForm.barangay_name"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Barangay Code"
                                v-model="userForm.barangay_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="City Code"
                                v-model="userForm.city_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Province Code"
                                v-model="userForm.province_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Region Code"
                                v-model="userForm.region_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Island Group Code"
                                v-model="userForm.island_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="PSGC 10-Digit Code"
                                v-model="userForm.psgc_code"
                              />
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </q-form>
                  </q-card>
                </q-dialog>

                <!-- User Dialog -->
                <q-dialog v-model="photoDialog">
                  <q-card style="width: 335px; height: 380px">
                    <q-card-section>
                      <q-form @submit="updatePhoto()">
                        <div class="col-10 col-md">
                          <q-card style="width: 300px; height: 290px">
                            <q-uploader
                              url="http://localhost:4444/upload"
                              label="Upload Logos"
                              color="black glossy"
                              square
                              flat
                              bordered
                              style="max-width: 300px"
                            />
                          </q-card>
                        </div>

                        <q-separator />
                        <br />
                        <TwBtn class="full-width" @click="handleDialog()"
                          >CANCEL</TwBtn
                        >
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script setup>
import { Barangay } from "../../constants/global_constants";
import { ref, reactive } from "vue";

import InputFieldSquare from "../../components/input/InputFieldSquare.vue";
import TwInput from "../../components/input/TwInput.vue";
import TwBtn from "../../components/button/TwBtn.vue";
import InputRounded from "../../components/input/InputFieldRounded.vue";

const brgyDialog = ref([false]);
const photoDialog = ref([false]);
const filter = ref("");

const userForm = reactive({
  ID: "",
  EmpFname: "",
});

function handleDialog() {
  brgyDialog.value = true;
  photoDialog.value = false;
}

function handlePhotoDialog() {
  photoDialog.value = true;
  brgyDialog.value = true;
}

async function updateBrgy() {
  handleDialog.value = false;

  Swal.fire("Good job!", "User Added successfully!", "success");
}

async function updatePhoto() {
  photoDialog.value = false;

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}

// Column Definition

const rows = [
  {
    barangay_code: "064524001",
    barangay_name: "BAGONBON",
    options: "Open",
  },
  {
    barangay_code: "064524002",
    barangay_name: "BULUANGAN",
    options: "Open",
  },
  {
    barangay_code: "064524003",
    barangay_name: "CODCOD",
    options: "Open",
  },
];
</script>

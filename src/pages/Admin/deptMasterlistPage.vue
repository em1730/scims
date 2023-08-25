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
                <router-link to="/masterList">
                  <TwBtn>Back</TwBtn>
                </router-link>
              </div>
              <!-- //Main Form Content Here -->
              <div class="border shadow-2xl rounded-md bg-white">
                <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                  <p class="text-white text-2xl font-bold">
                    DEPARTMENT MASTERLIST
                  </p>
                </nav>

                <div class="p-5 gap-4">
                  <div class="w-full">
                    <div class="w-full flex">
                      <aside class="w-1/6 pr-2" aria-label="Sidebar">
                        <div
                            class="px-3 py-4 overflow-auto rounded-md shadow-xl bg-gray-800 dark:bg-gray-800"
                          >
                            <ul class="space-y-2">
                              <table class="w-full">
                                <tbody id="systems-table-body">
                                  <tr
                                    data-system-id="<?= $system_name ?>"
                                    style="user-select: none"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="hover:scale-105 duration-200 flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
                                  >
                                    <td class="px-2 py-2">DEPARTMENT</td>
                                  </tr>
                                  <tr
                                    data-system-id="<?= $system_name ?>"
                                    style="user-select: none"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="hover:scale-105 duration-200 flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
                                  >
                                    <td class="px-2 py-2" to="/division">DIVISION</td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                        </div>
                      </aside>

                      <!--Table-->
                      <div id="recipients" class="w-5/6 text-2xl">
                        <q-table
                          class="bg-gray-200 text-weight-bolder text-justify text-body1"
                          flat
                          bordered
                          separator="vertical"
                          virtual-scroll
                          :columns="Department.columns"
                          :rows="rows"
                          :filter="filter"
                        >
                          <template v-slot:top>
                            <div class="flex justify-between w-full">
                                <router-link to="/masterList">

                                </router-link>
                                <TwBtn @click="deptDialog = true">New Department</TwBtn>
                            </div>
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

                <!-- New Department Dialog -->
                <q-dialog v-model="deptDialog">
                  <q-card style="width: 820px; max-width: 80vw; height: 400px">
                    <q-form @submit="saveDept()">
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col-11">
                            <TwBtn v-close-popup>BACK</TwBtn>
                          </div>

                          <div class="col-1">
                            <TwBtn v-close-popup>SAVE</TwBtn>
                          </div>
                        </div>

                        <div class="q-pa-md row items-start q-gutter-md">
                          <q-card
                            style="width: 500px; max-width: 80vw; height: 270px"
                          >
                            <q-card-section>
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Department Code"
                                v-model="userForm.department_code"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Department Name"
                                v-model="userForm.department_name"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Telephone Number"
                                v-model="userForm.telephone_no"
                              />
                              <InputRounded
                                class="pb-5 uppercase"
                                label="Email Address"
                                v-model="userForm.email_add"
                              />
                            </q-card-section>
                          </q-card>

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
                        </div>
                      </div>
                    </q-form>
                  </q-card>
                </q-dialog>

                <!-- Photo department Dialog -->
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
import { Department } from "../../constants/global_constants";
import { ref, reactive } from "vue";

import InputFieldSquare from "src/components/input/InputFieldSquare.vue";
import InputRounded from "../../components/input/InputFieldRounded.vue";
import TwBtn from "src/components/button/TwBtn.vue";
import TwInput from "src/components/input/TwInput.vue";

const deptDialog = ref([false]);

const photoDialog = ref([false]);
const filter = ref("");

const userForm = reactive({
  ID: "",
  EmpFname: "",
});

function handleDialog() {
  deptDialog.value = true;
  photoDialog.value = false;
}

function handlePhotoDialog() {
  photoDialog.value = true;
  deptDialog.value = true;
}

async function saveDept() {
  handleDialog.value = false;

  Swal.fire("Good job!", "Department Added successfully!", "success");
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
    department_code: "CMO",
    department_name: "City Mayors Office",
    options: "Open",
  },
  {
    department_code: "ADMIN",
    department_name: "City Administrator's Office",
    options: "Open",
  },
  {
    department_code: "OHRM",
    department_name: "Office of the Human Resource and Management",
    options: "Open",
  },
  {
    department_code: "SP",
    department_name: "Sangguniang Panlungsod",
    options: "Open",
  },
  {
    department_code: "CPDCO",
    department_name: "City Planning and Development Coordinator's Office",
    options: "Open",
  },
  {
    department_code: "CCRO",
    department_name: "City Civil Registrar's Office",
    options: "Open",
  },
  {
    department_code: "GSD",
    department_name: "General Services Department",
    options: "Open",
  },
]
</script>

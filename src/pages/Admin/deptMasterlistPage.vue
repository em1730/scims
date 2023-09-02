<template>
  <transition appear enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut">
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
                <!-- New Department Dialog -->
                <q-dialog v-model="deptDialog">
                  <q-card style="width: 850px; max-width: 80vw; height: 400px">
                    <q-bar dark class="bg-gray-800 text-white">
                      <div class="col text-center text-weight-bold">
                        DEPARTMENT
                      </div>
                    </q-bar>
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
                          <q-card style="width: 500px; max-width: 80vw; height: 270px">
                            <q-card-section>
                              <InputRounded class="pb-5 uppercase" label="Department Code"
                                v-model="userForm.department_code" />
                              <InputRounded class="pb-5 uppercase" label="Department Name"
                                v-model="userForm.department_name" />
                              <InputRounded class="pb-5 uppercase" label="Telephone Number"
                                v-model="userForm.telephone_no" />
                              <InputRounded class="pb-5 uppercase" label="Email Address" v-model="userForm.email_add" />
                            </q-card-section>
                          </q-card>

                          <q-card style="
                              width: 240px;
                              max-width: 80vw;
                              height: 270px;
                              border-radius: 10px;
                            ">
                            <q-card-section>
                              <q-img width="180px" height="180px"
                                src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico" />
                              <q-btn class="glossy q-mt-md" v-close-popup rounded @click="handlePhotoDialog()" style="
                                  background-color: rgba(191, 195, 203, 0.96);
                                  text-fill-color: black;
                                  width: 200px;
                                " align="center"><q-icon name="upload" /> Upload Logo</q-btn>
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
                            <q-uploader url="http://localhost:4444/upload" label="Upload Logos" color="black glossy"
                              square flat bordered style="max-width: 300px" />
                          </q-card>
                        </div>

                        <q-separator />
                        <br />
                        <TwBtn class="full-width" @click="handleDialog()">CANCEL</TwBtn>
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>

                <!--Division-->
                <q-dialog v-model="divDialog">
                  <q-card style="width: 900px; max-width: 80vw; height: 900px">
                    <q-bar dark class="bg-gray-800 text-white">
                      <div class="col text-center text-weight-bold">
                        DIVISION
                      </div>
                    </q-bar>
                    <q-form @submit="saveDiv()">
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
                          <q-card style="
                              width: 240px;
                              max-width: 80vw;
                              height: 310px;
                              border-radius: 10px;
                            ">
                            <q-card-section>
                              <q-img width="180px" height="180px"
                                src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico" />
                              <q-btn class="glossy q-mt-md" v-close-popup rounded @click="handlePhotoDialog()" style="
                                  background-color: rgba(191, 195, 203, 0.96);
                                  text-fill-color: black;
                                  width: 200px;
                                " align="center"><q-icon name="upload" /> Upload Logo</q-btn>
                            </q-card-section>
                          </q-card>

                          <q-card style="width: 560px; max-width: 80vw; height: 310px">
                            <q-card-section>
                              <InputRounded class="pb-5 uppercase" label="Select Department Name"
                                v-model="userForm.department_name" />
                              <InputRounded class="pb-5 uppercase" label="Division Code"
                                v-model="userForm.division_code" />
                              <InputRounded class="pb-5 uppercase" label="Division Name"
                                v-model="userForm.division_name" />
                              <InputRounded class="pb-5 uppercase" label="Telephone Number"
                                v-model="userForm.telephone_no" />
                              <InputRounded class="pb-5 uppercase" label="Email Address" v-model="userForm.email_add" />
                            </q-card-section>
                          </q-card>

                        </div>

                        <div class="q-pa-md">
                          <TableComponent />
                        </div>

                      </div>
                    </q-form>
                  </q-card>
                </q-dialog>

                <!--Tab-->
                <div class="col-span-2 q-ma-pa">
                  <q-card class="my-card border-gray-400 drop-shadow-2xl" flat bordered>
                    <q-splitter v-model="splitterModel" style="height: 450px">
                      <template v-slot:before>
                        <q-tabs v-model="tab" vertical class="bg-gray-800 p-2 rounded-t-md text-white" align="left">
                          <q-tab name="department" label="DEPARTMENT" />
                          <q-tab name="division" label="DIVISION" />
                        </q-tabs>
                      </template>

                      <template v-slot:after>
                        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up"
                          transition-next="jump-up">
                          <q-tab-panel name="department">
                            <div id="recipients" class="w-6/6 text-2xl">
                              <q-table class="bg-gray-200 text-weight-bolder text-justify table-fixed" flat bordered
                                separator="vertical" dense :columns="Department.columns" :rows="rows"
                                :filter="filter">
                                <template v-slot:top>
                                  <div class="flex justify-between w-full">
                                    <router-link to="/masterList">

                                    </router-link>
                                    <TwBtn @click="deptDialog = true">New Department</TwBtn>
                                  </div>
                                  <div class="flex justify-end w-full">
                                    <div>
                                      <TwInput v-model="filter" class="mt-1" placeholder="Search" />
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

                          </q-tab-panel>

                          <q-tab-panel name="division">
                            <div id="recipients" class="w-6/6 text-2xl">
                              <q-table class="bg-gray-200 text-weight-bolder text-justify table-fixed" flat bordered
                                separator="vertical" dense :columns="Division.columns" :rows="div"
                                :filter="filter">
                                <template v-slot:top>
                                  <div class="flex justify-between w-full">
                                    <router-link to="/masterList">

                                    </router-link>
                                    <!-- <TwBtn @click="handlesDialog()" >New Division</TwBtn> -->
                                    <router-link to="/newDivision">
                                      <TwBtn>New Division</TwBtn>
                                    </router-link>


                                  </div>
                                  <div class="flex justify-end w-full">
                                    <div>
                                      <TwInput v-model="filter" class="mt-1" placeholder="Search" />
                                    </div>
                                  </div>
                                </template>

                                <template v-slot:body-cell-options="props">
                                  <q-td :props="props">
                                    <div class="space-x-2">
                                      <TwBtn @click="divDialog = true">Open</TwBtn>
                                    </div>
                                  </q-td>
                                </template>
                              </q-table>
                            </div>
                          </q-tab-panel>
                        </q-tab-panels>
                      </template>

                    </q-splitter>

                  </q-card>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </transition>
</template>


<script setup>
import { Department, Division } from "../../constants/global_constants";
import { ref, reactive } from "vue";

import InputFieldSquare from "src/components/input/InputFieldSquare.vue";
import InputRounded from "../../components/input/InputFieldRounded.vue";
import TwBtn from "src/components/button/TwBtn.vue";
import TwInput from "src/components/input/TwInput.vue";
import TableComponent from "src/components/button/TableComponent.vue"

const deptDialog = ref([false]);
const divDialog = ref([false]);
const photoDialog = ref([false]);
const filter = ref("");
const tab = ref("department"); //Default Tab View
const gender = ref(null); //Default Value for Gender

const userForm = reactive({
  ID: "",
  EmpFname: "",
});

function handleDialog() {
  deptDialog.value = true;
  photoDialog.value = false;
}

function handlesDialog() {
  divDialog.value = true;
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

const div = [
  {
    division_code: "CMO-ESS",
    division_name: "Executive Support Staff",
    section_name: "",
    options: "Open",
  },
  {
    division_code: "CMO-AS",
    division_name: "Administrative Services",
    section_name: "Personnel and Record Managements and etc...",
    options: "Open",
  },
  {
    division_code: "CMO-IAS",
    division_name: "Internal Audit Services",
    section_name: "",
    options: "Open",
  },
  {
    division_code: "CMO-BPLO",
    division_name: "Business Permit and Licensing Office",
    section_name: "",
    options: "Open",
  },
  {
    division_code: "CMO-BAC",
    division_name: "Bids and Awards Committee Secretariat and Procurement Division",
    section_name: "Aministrative and Procurement Planning and etc...",
    options: "Open",
  },
  {
    division_code: "CMO-CLDO",
    division_name: "Cooperatives and Livelihood Development Office",
    section_name: "Assistance and Institutional Development",
    options: "Open",
  },
  {
    division_code: "CMO-NEGOSYO",
    division_name: "San Carlos City Investment Promotional Center",
    section_name: "",
    options: "Open",
  },
]
</script>

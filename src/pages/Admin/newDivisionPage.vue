<template>
  <transition appear enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut">
    <div class="w-full">
      <div class="content-auto w-screen h-full">
        <div class="px-20 pt-5 h-screen w-full">
          <div class="pb-10">
            <div class="grid grid-cols-1 gap-4">
              <div class="flex justify-between w-full">
                <router-link to="/deptMasterlist">
                  <TwBtn>Back</TwBtn>
                </router-link>
                <div class="col-1">
                  <TwBtn v-close-popup>SAVE</TwBtn>
                </div>
              </div>
              <!-- //Main Form Content Here -->
              <div class="border shadow-2xl rounded-md bg-white">
                <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                  <p class="text-white text-2xl font-bold">
                    DIVISION
                  </p>
                </nav>
                <div class="justify-self: auto">
                  <q-form @submit="saveDiv()">
                  <div class="q-pa-md">
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

                      <q-card style="width: 790px; max-width: 90vw; height: 310px">
                        <q-card-section>
                          <SelectInputRounded class="pb-5 uppercase" label="Select Department Name"
                            v-model="userForm.department_name" :options="SelectOption.gender" />
                          <InputRounded class="pb-5 uppercase" label="Division Code" v-model="userForm.division_code" />
                          <InputRounded class="pb-5 uppercase" label="Division Name" v-model="userForm.division_name" />
                          <InputRounded class="pb-5 uppercase" label="Telephone Number" v-model="userForm.telephone_no" />
                          <InputRounded class="pb-5 uppercase" label="Email Address" v-model="userForm.email_add" />
                        </q-card-section>
                      </q-card>

                    </div>

                    <div class="q-pa-md">
                      <TableComponent />
                    </div>

                  </div>
                </q-form>

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
import { ref, reactive } from "vue";
import { SelectOption } from "../../constants/global_constants";

import InputRounded from "../../components/input/InputFieldRounded.vue";
import TwBtn from "src/components/button/TwBtn.vue";
import TableComponent from "src/components/button/TableComponent.vue"
import SelectInputRounded from "src/components/select/SelectInputRounded.vue";

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

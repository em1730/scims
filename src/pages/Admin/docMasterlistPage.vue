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

                <TwBtn @click="newDialog()">New Document</TwBtn>
              </div>
              <!-- //Main Form Content Here -->
              <div class="border shadow-2xl rounded-md bg-white">
                <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                  <p class="text-white text-2xl font-bold">
                    TYPE OF DOCUMENT MASTERLIST
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
                          :columns="DocMasterlist.columns"
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
                                <TwBtn @click="handleDialog()">Edit</TwBtn>
                              </div>
                            </q-td>
                          </template>
                        </q-table>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Open Button Dialog -->
                <q-dialog v-model="DocListDialog">
                  <q-card style="width: 550px; max-width: 80vw; height: 350px">
                    <q-form @submit="openbutton()">
                      <div class="q-pa-md">
                        <div
                          class="border shadow-2xl rounded-md bg-white"
                        ></div>
                        <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                          <p class="text-white text-2xl font-bold">
                            EDIT DOCUMENT
                          </p>
                        </nav>
                        <div class="row"></div>
                        <q-card-section>
                          <InputRounded class="pb-5 uppercase" label="Code" />
                          <InputRounded
                            class="pb-5 uppercase"
                            label="Type of Document"
                            v-model="userForm.document_name"
                          />
                          <InputRounded
                            class="pb-5 uppercase"
                            label="Description"
                          />
                        </q-card-section>

                        <div class="flex justify-between q-pa-md">
                          <TwBtn v-close-popup>CLOSE</TwBtn>
                          <TwBtn v-close-popup>UPDATE</TwBtn>
                        </div>
                      </div>
                    </q-form>
                  </q-card>
                </q-dialog>

                <!-- New Document Dialog -->

                <q-dialog v-model="NewButtonDialog">
                  <q-card style="width: 550px; max-width: 80vw; height: 350px">
                    <q-form @submit="newdocument()">
                      <div class="q-pa-md">
                        <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                          <p class="text-white text-2xl font-bold">
                            NEW DOCUMENT
                          </p>
                        </nav>
                        <div class="row"></div>

                        <q-card-section>
                          <InputRounded class="pb-5 uppercase" label="Code" />
                          <InputRounded
                            class="pb-5 uppercase"
                            label="Type of Document"
                            v-model="userForm.document_name"
                          />
                          <InputRounded
                            class="pb-5 uppercase"
                            label="Description"
                          />
                        </q-card-section>

                        <div class="flex justify-between q-pa-md">
                          <TwBtn v-close-popup>CLOSE</TwBtn>
                          <TwBtn v-close-popup>SAVE</TwBtn>
                        </div>
                      </div>
                    </q-form>
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
import { DocMasterlist } from "../../constants/global_constants";
import { ref, reactive } from "vue";

import InputFieldSquare from "../../components/input/InputFieldSquare.vue";
import TwInput from "../../components/input/TwInput.vue";
import TwBtn from "../../components/button/TwBtn.vue";
import InputRounded from "../../components/input/InputFieldRounded.vue";

const DocListDialog = ref([false]);
const NewButtonDialog = ref([false]);
const filter = ref("");

const userForm = reactive({
  ID: "",
  EmpFname: "",
});
    
//handle dialog open button
function handleDialog() {
  DocListDialog.value = true;
  // photoDialog.value = false;
}

function newDialog() {
  NewButtonDialog.value = true;
  // photoDialog.value = false;
}

async function openbutton() {
  handleDialog.value = false;

  Swal.fire("Good job!", "User Added successfully!", "success");
}

// Column Definition

const rows = [
  {
    document_code: "OBR",
    document_name: "OBLIGATION REQUEST",
    options: "Open",
  },
  {
    document_code: "DV",
    document_name: "DISBURSEMENT VOUCHER",
    options: "Open",
  },
  {
    document_code: "EO",
    document_name: "EXECUTIVE ORDER",
    options: "Open",
  },
  {
    document_code: "EL",
    document_name: "EMAIL LETTER",
    options: "Open",
  },
  {
    document_code: "FTL",
    document_name: "FAILURE TO LOG",
    options: "Open",
  },
  {
    document_code: "ITB",
    document_name: "INVITATION TO BID",
    options: "Open",
  },
  {
    document_code: "OR",
    document_name: "OFFICIAL RECEIPT",
    options: "Open",
  },
];
</script>

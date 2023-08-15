<template>
  <transition
    appear
    enter-active-class="animated animate__fadeIn"
    leave-active-class="animated animate__fadeOut"
  >
    <div class="w-full">
      <body class="flex flex-items">
        <div class="content-auto w-screen h-full">
          <div class="px-20 pt-5 h-screen w-full">
            <div class="pb-10">
              <div class="grid grid-cols-1 gap-4">
                <!-- //Main Form Content Here -->
                <div class="border shadow-2xl rounded-md bg-white">
                  <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                    <p class="text-white text-2xl font-bold">
                      MODULE MANAGEMENT
                    </p>
                  </nav>

                  <!-- Start of Module Sidebar -->
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
                                    <td class="px-2 py-2">DEMOS</td>
                                  </tr>
                                  <tr
                                    data-system-id="<?= $system_name ?>"
                                    style="user-select: none"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="hover:scale-105 duration-200 flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
                                  >
                                    <td class="px-2 py-2">VAMOS</td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                          </div>
                        </aside>

                        <div id="recipients" class="w-5/6 text-2xl">
                          <q-table
                            class="bg-gray-200 text-weight-bolder text-justify text-body1"
                            separator="vertical"
                            virtual-scroll
                            :columns="Module.columns"
                            :rows="users"
                            :filter="filter"
                            :loading="loading"
                          >
                            <template v-slot:loading>
                              <q-inner-loading showing color="info" />
                            </template>

                            <template v-slot:top>
                              <div class="flex justify-between w-full">
                                <router-link to="/">
                                  <TwBtn>Back</TwBtn>
                                </router-link>
                                <TwBtn @click="dialog = true">New Module</TwBtn>
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

                            <template v-slot:body-cell-actions="props">
                              <q-td :props="props">
                                <div class="space-x-2">
                                  <TwBtn>Open</TwBtn>
                                  <TwBtn>Delete</TwBtn>
                                </div>
                              </q-td>
                            </template>
                          </q-table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End of Module Sidebar -->

                  <q-dialog v-model="dialog" persistent class="select-none">
                    <q-card style="width: 700px; max-width: 80vw">
                      <q-card-section
                        class="bg-gray-800 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                      >
                        <div
                          class="text-h6 text-white font-medium leading-normal"
                        >
                          Enter New Module
                        </div>
                      </q-card-section>

                      <q-card-section class="q-pt-none mt-3">
                        <div class="grid grid-cols-1">
                          <InputSquare
                            class="pb-10"
                            label="Module Name"
                            hint="Note: Existing modules won't be added again."
                          />
                          <div class="flex justify-between pb-5">
                            <TwBtn>Delete Row</TwBtn>
                            <TwBtn>Add Row</TwBtn>
                          </div>
                          <q-table
                            class="bg-slate-300"
                            :columns="Module.columns"
                            :rows="users"
                          ></q-table>
                        </div>
                      </q-card-section>
                      <q-separator />
                      <q-card-actions align="right">
                        <div class="space-x-2">
                          <TwBtn v-close-popup>Close</TwBtn>
                          <TwBtn>Save Changes</TwBtn>
                        </div>
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                  <form role="form" method="POST">
                    <div class="px-4">
                      <div class="grid md:grid-cols-4 md:gap-6">
                        <!--Container-->
                        <div
                          class="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2"
                        >
                          <!--Card-->
                          <div
                            data-te-modal-init
                            class="fixed inset-0 top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="System_Registration_Modal"
                            tabindex="-1"
                            aria-labelledby="System_Registration_Modal"
                            aria-modal="true"
                            role="dialog"
                          >
                            <div
                              data-te-modal-dialog-ref
                              class="p-5 pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[1024px]:mx-auto min-[1024px]:mt-7 min-[1024px]:min-h-[calc(100%-3.5rem)] min-[1024px]:max-w-[1024px]"
                            >
                              <div
                                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
                              >
                                <div
                                  class="bg-gray-800 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                                >
                                  <h5
                                    class="text-white text-xl font-medium leading-normal dark:text-neutral-200"
                                    id="exampleModalScrollableLabel"
                                  >
                                    Enter New Module
                                  </h5>
                                  <button
                                    type="button"
                                    class="text-white box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-modal-dismiss
                                    aria-label="Close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="h-6 w-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <div class="">
                                  <div class="grid">
                                    <div class="p-4">
                                      <div class="relative z-0 py-6 pb-10">
                                        <input
                                          required
                                          type="text"
                                          name="system_name"
                                          id="floating_standard"
                                          class="uppercase block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                          placeholder=" "
                                        />
                                        <label
                                          for="floating_standard"
                                          class="uppercase font-bold py-2.5 absolute text-xl text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                          >MODULE</label
                                        >
                                        <label
                                          for="floating_company"
                                          class="text-red-600 peer-focus:font-medium absolute text-xs italic"
                                          >Note: Existing Module won't be added
                                          again.</label
                                        >
                                      </div>
                                      <table
                                        id="examples"
                                        class="row-border classic stripe hover"
                                        style="
                                          width: 100%;
                                          padding-top: 1em;
                                          padding-bottom: 1em;
                                        "
                                      >
                                        <div class="flex justify-between">
                                          <button
                                            id="delRow"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            type="button"
                                            class="duration-300 transition flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                              class="w-5 h-5 pr-1"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                clip-rule="evenodd"
                                              />
                                            </svg>
                                            Delete Row
                                          </button>
                                          <button
                                            id="addRow"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            type="button"
                                            class="duration-300 transition flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                              class="w-5 h-5 pr-1"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                                                clip-rule="evenodd"
                                              />
                                            </svg>
                                            Add Row
                                          </button>
                                        </div>
                                        <thead class="bg-gray-700 text-white">
                                          <tr>
                                            <th>User Role</th>
                                            <th>Title</th>
                                          </tr>
                                        </thead>
                                        <tbody class="text-center"></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                                >
                                  <button
                                    type="button"
                                    class="duration-300 transition text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    data-te-modal-dismiss
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    name="saveBtn"
                                    id="saveBtn"
                                    class="duration-300 transition text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--/Card -->
                        </div>
                        <!--/container-->
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  </transition>
</template>

<script setup>
import { Module } from "../../constants/global_constants";
import { api } from "src/boot/axios";
import { ref } from "vue";

// import InputRounded from "../../components/input/InputFieldRounded.vue";
import InputSquare from "../../components/input/InputFieldSquare.vue";
import TwInput from "../../components/input/TwInput.vue";
import TwBtn from "../../components/button/TwBtn.vue";

const dialog = ref("false");
const loading = ref("false");
const filter = ref("");
const users = ref([]);

async function getAllUsers() {
  loading.value = true;
  const res = await api.get("https://jsonplaceholder.typicode.com/users");
  users.value = res.data;
  loading.value = false;
}
getAllUsers();
</script>

<style lang="scss" scoped></style>

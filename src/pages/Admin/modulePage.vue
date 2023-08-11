<template>
  <div class="w-full">
    <body class="flex flex-items" style="user-select: none">
      <div class="content-auto font-Karla w-screen h-full">
        <div
          class="px-20 pt-5 bg-cover bg-center h-screen w-full"
          style="background-image: url('../dashboard/images/webp/bg.png')"
        >
          <div class="pb-10">
            <div class="grid grid-cols-1 gap-4">
              <!-- //Main Form Content Here -->
              <div class="border shadow-2xl rounded-md bg-white">
                <nav class="bg-gray-800 text-center p-2 rounded-t-md">
                  <p class="text-white text-2xl font-bold">MODULE MANAGEMENT</p>
                </nav>

                <!-- Start of Module Sidebar -->
                <div class="p-5 gap-4">
                  <div class="w-full">
                    <div class="w-full flex ">
                      <aside class="w-72 pr-2" aria-label="Sidebar">
                        <div
                          class="px-3 py-4 overflow-y-auto rounded-md shadow bg-gray-800 dark:bg-gray-800"
                        >
                          <ul class="space-y-2">
                            <table class="w-full">
                              <thead></thead>
                              <tbody id="systems-table-body">
                                <tr
                                  data-system-id="<?= $system_name ?>"
                                  style="user-select: none"
                                  data-te-ripple-init
                                  data-te-ripple-color="light"
                                  class="hover:scale-105 duration-200 flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700"
                                >
                                  <td class="px-4 py-2">DEMOS</td>
                                  <td class="px-4 py-2">DEMOS</td>
                                </tr>
                              </tbody>
                            </table>
                          </ul>
                        </div>
                      </aside>

                      <div
                        id="recipients"
                        class="w-4/6 p-4 lg:mt-0 bg-white border shadow-xl rounded-lg"
                      >
                        <!-- <table
                          id="systems"
                          class="row-border classic stripe hover"
                          style="
                            width: 100%;
                            padding-top: 1em;
                            padding-bottom: 1em;
                          "
                        >
                          <div class="flex justify-between">
                            <a href="../dashboard/index.php">
                              <button
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
                                    d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                Back
                              </button>
                            </a>

                            <button
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              type="button"
                              class="duration-300 transition flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                              data-te-toggle="modal"
                              data-te-target="#System_Registration_Modal"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 pr-1"
                              >
                                <path
                                  d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                />
                              </svg>
                              New Module
                            </button>
                          </div>
                          <thead class="bg-gray-700 text-white"></thead>
                          <tbody class="text-center"></tbody>
                        </table> -->
                        <q-table>

                        </q-table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End of Module Sidebar -->

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
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template>
  <q-page padding>
    <div class="q-pa-l">
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <q-btn
            class="glossy q-mt-md"
            href="masterList"
            rounded
            label="BACK"
            style="
              background-color: rgba(80, 82, 85, 0.96);
              text-fill-color: white;
              width: 200px;
            "
            align="center"
          />

          <div class="q-mt-md">
          <q-table
            flat
            bordered
            bold
            title="BARANGAY MASTERLIST"
            class="my-sticky-header-table text-uppercase"
            :rows="rows"
            :columns="cols"
            :filter="filter"
            style="height: 630px; width: 1280px"
          >
            <template v-slot:top-right>
              <q-input
                bordered
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <template v-slot:body-cell-code="props">
              <q-td style="text-align: center; font-size: 14px">
                <span>{{ props.row.code }}</span>
              </q-td>
            </template>

            <template v-slot:body-cell-barangay_name="props">
              <q-td dense style="text-align: center; font-size: 14px">
                <span>{{ props.row.barangay_name }}</span>
              </q-td>
            </template>

            <template v-slot:body-cell-option="props">
              <q-td style="text-align: center; font-size: 14px" :props="props">
                <q-btn
                  class="glossy q-mt-l"
                  rounded
                  dense
                  label="OPEN"
                  @click="handleDialog()"
                  style="
                    background-color: rgba(80, 82, 85, 0.96);
                    text-fill-color: white;
                    width: 100px;
                  "
                  align="center"
                />
              </q-td>
            </template>
          </q-table>

          <!-- User Dialog -->
          <q-dialog v-model="brgyDialog">
            <q-card style="width: 1000px; max-width: 80vw; height: 550px">
              <div class="q-pa-sm">
                <div class="row justify-center">
                  <div class="col-8">
                    <q-btn
                      class="glossy q-mt-md"
                      v-close-popup
                      rounded
                      label="BACK"
                      style="
                        background-color: rgba(80, 82, 85, 0.96);
                        text-fill-color: white;
                        width: 200px;
                      "
                      align="center"
                    />
                  </div>

                  <q-btn
                    class="glossy q-mt-md"
                    rounded
                    type="submit"
                    label="UPDATE"
                    style="
                      background-color: rgba(80, 82, 85, 0.96);
                      text-fill-color: white;
                      width: 200px;
                    "
                    align="center"
                  />
                </div>

                <q-form @submit="updateBarangay()" class="q-gutter-y-md">
                  <div class="q-pa-md row items-start q-gutter-md">
                    <div class="col-10 col-md">
                      <q-card>
                        <div class="row">
                          <div class="col-3">
                            <q-card>
                              <q-card-section>
                                <div class="col-5">
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
                                      background-color: rgba(
                                        231,
                                        235,
                                        242,
                                        0.96
                                      );
                                      text-fill-color: black;
                                      width: 200px;
                                    "
                                    align="center"
                                    ><q-icon name="upload" /> Upload Logo</q-btn
                                  >
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>

                          <div class="col-9">
                            <q-card>
                              <q-card-section>
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="Barangay Name"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="Barangay Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="City Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="Province Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="Region Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="Island Group Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                                <q-input
                                  style="font-size: 20px; height: 55px"
                                  v-model="userForm.EmpLname"
                                  dense
                                  outlined
                                  hint="PSGC 10-Digit Code"
                                  required
                                  class="text-uppercase"
                                  bg-color="grey-3"
                                  clearable
                                />
                              </q-card-section>
                            </q-card>
                          </div>
                        </div>
                      </q-card>
                    </div>
                  </div>
                </q-form>
              </div>
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

                  <q-btn
                    class="glossy full-width"
                    rounded
                    @click="handleDialog()"
                    label="Cancel"
                    style="
                      background-color: rgba(80, 82, 85, 0.96);
                      text-fill-color: white;
                      width: 200px;
                    "
                    align="center"
                  />
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>


<style lang="sass" scoped>
//button

  //table
.my-sticky-header-table
  /* height or max-height is important */
  height: 500px

  .q-table__top,
  thead tr:th
    /* bg color is important for th; just specify one */
    background-color: #CCF0FF

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

.custom-font-color
  color: black

  .custom-font-size
    font-size: 200%
</style>


<script setup>
import axios from "axios";
import { ref, reactive } from "vue";

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
const cols = [
  {
    name: "code",
    field: "code",
    label: "CODE",
    align: "center",
    sortable: true,
    headerStyle:
      "width: 560px; background-color: black; color:white; font-size:18px; bold:true",
  },
  {
    name: "barangay_name",
    field: "barangay_name",
    label: "BARANGAY NAME",
    align: "center",
    sortable: true,
    headerStyle:
      "width: 500px; background-color: black; color:white; font-size:18px; bold: true",
  },
  {
    name: "option",
    field: "optiion",
    label: "OPTION",
    align: "center",
    sortable: true,
    headerStyle:
      "width: 500px; background-color:black; color:white; font-size:18px; bold:true",
  },
];

const rows = [
  {
    code: "064524001",
    barangay_name: "BAGONBON",
    option: "Open",
  },
  {
    code: "064524002",
    barangay_name: "BULUANGAN",
    option: "Open",
  },
  {
    code: "064524003",
    barangay_name: "CODCOD",
    option: "Open",
  },
];
</script>

<template>
  <q-page>
    <q-card class="my-card q-mt-lg q-mx-xl q-mx-auto justify-between bg-transparent" flat dense style="width:1200px">
      <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
        <q-btn to="/" rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
        <q-btn to="/endUserRegister" rounded size="13px" label="NEW USER" color="grey-7" style="width:120px" />
      </q-card-section>
    </q-card>
    <q-card class="my-card q-mx-auto q-gutter-y-md justify-between" style="width:1200px">
      <q-card-section class="bg-blue-grey-9 text-white text-center q-pa-sm">
        <div class="text-h6">END USER MANAGEMENT</div>
      </q-card-section>
      <q-card-section class="">
        <q-input class="q-mr-md absolute-top-right" dense rounded outlined placeholder="Search" style="width:250px">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-table class="" flat bordered virtual-scroll :rows="rows" :columns="columns" row-key="name"
          :separator="separator">
          <template v-slot:body-cell-ops="props">
            <q-td class="print-hide" auto-width>
              <q-btn @click="handleEdit(props.row)" flat round dense size="sm" icon="edit" color="positive" />
              <q-btn @click="deleteCallers(props.row.id)" flat round dense size="sm" icon="delete" color="negative" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
    <q-dialog v-model="newUserDialog" style="width:auto">
      <div class="row q-gutter-x-md justify-between">
        <q-card class="my-card" style="width:1000px">
          <q-card-section class="bg-blue-grey-5 text-white q-pa-sm" style="height:50px">
            <div class="text-h6 text-center">PERSONAL INFORMATION</div>
          </q-card-section>
          <q-card-section>
            <q-form class="">
              <div class="q-gutter-y-sm">
                <div class="row q-gutter-x-md justify-between">
                  <div class="col-3">
                    <div class="text-caption">SELECT INDIVIDUAL</div>
                    <q-select dense v-model="endUserPersonalInfo.entityNo" outlined :options="departments" emit-value
                      option-value="department_name" option-label="department_name" use-input
                      @new-value="addNewValuedepartments" />
                  </div>
                  <div class="col-3">
                    <div class="text-caption">ENTITY NO.</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat />
                  </div>
                  <div class="col-4">
                    <div class="text-caption">FULL NAME</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat />
                  </div>

                </div>

                <div class="row q-gutter-x-md justify-between">
                  <div class="col-3 ">
                    <div class="text-caption">MOBILE NUMBER</div>
                    <q-input v-model="endUserPersonalInfo.mobileNo" mask="###########" outlined square filled dense
                      flat />
                  </div>
                  <div class="col-4">
                    <div class="text-caption">ENTITY NUMBER</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat />
                  </div>
                  <div class="col-3">
                    <div class="text-caption">FULL NAME</div>
                    <q-input v-model="endUserPersonalInfo.fullName" outlined square filled dense flat />
                  </div>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
        <!-- <div class="col-5">
          <q-card class="my-card" style="width:auto">
            <q-card-section class="bg-teal-9 text-white q-pa-sm" style="height:50px">
              <div class="text-h6">This is a card</div>
            </q-card-section>
          </q-card>
        </div> -->
      </div>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'

const separator = ref('horizontal')
const columns = [
  {
    name: 'entity_no',
    required: true,
    label: 'ENTITY NO.',
    align: 'center',
    field: row => row.entity_no,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'full_name', align: 'center', label: 'FULL NAME', field: 'full_name', sortable: true },
  { name: 'dpt', align: 'center', label: 'DEPARTMENT', field: 'dpt', sortable: true },
  { name: 'ops', align: 'center', label: 'OPTION', field: 'ops' },

]

const rows = [
  {
    entity_no: 'DCOEJJGHG1234',
    full_name: 'Jhon M. Doe',
    dpt: 'ITCSO',
    ops: 'ops',
  },
  {
    entity_no: 'DCOEJJGHG1234',
    full_name: 'Mark R. Reyes',
    dpt: 'ITCSO',
    ops: 'ops',
  },
  {
    entity_no: 'DCOEJJGHG1234',
    full_name: 'Mark M. Mercado',
    dpt: 'ITCSO',
    ops: 'ops',
  },
  {
    entity_no: 'DCOEJJGHG1234',
    full_name: 'Jhon M. Doe',
    dpt: 'ITCSO',
    ops: 'ops',
  },
  {
    entity_no: 'DCOEJJGHG1234',
    full_name: 'Jhon M. Doe',
    dpt: 'ITCSO',
    ops: 'ops',
  },

]

const endUserPersonalInfo = reactive({
  selectIndividual: "",
  entityNo: "",
  fullName: "",
  gender: "",
  dateOfBirth: "",
  mobileNo: "",
  homeAddress: "",
  email: "",
})
const endUserAccountInfo = reactive({
  username: "",
  password: "",
  jobDesignation: "",
  department: "",
  division: "",
  section: "",
})

// const endUserModulesVamos = reactive({
//   admin:"",

// })
</script>

<style lang="scss" scoped></style>



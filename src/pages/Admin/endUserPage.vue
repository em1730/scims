<template>
  <q-page padding>
    <q-card class="my-card q-mt-sm q-mx-xl q-mx-auto justify-between bg-transparent" flat dense style="width:1180px">
      <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
        <q-btn to="/" rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
        <q-btn to="/endUserRegister" rounded size="13px" label="NEW USER" color="grey-7" style="width:120px" />
      </q-card-section>
    </q-card>
    <q-card class="my-card q-mx-auto q-gutter-y-md justify-between" style="width:1180px">
      <!-- bg-gradient-to-tl from-gray-800 to-slate-700 drop-shadow-2xl -->
      <q-card-section class="bg-blue-grey-7 text-white text-center q-pa-sm">
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
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'boot/axios'

const separator = ref('horizontal')
const columns = [
  {
    name: 'entity_no',
    required: true,
    label: 'ENTITY NO.',
    align: 'left',
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


const endUserInfo = ref({

})

async function fetchEndUser() {
  const res = await api.get('api/users')

  endUserInfo.value = res.data

}
fetchEndUser()

</script>

<style lang="scss" scoped></style>



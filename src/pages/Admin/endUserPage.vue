<template>
  <q-page>
    <div class="my-card q-mt-lg q-mx-xl" flat>
      <q-card-section class="row q-gutter-y-md justify-between">
        <q-btn rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
        <q-btn rounded size="13px" label="NEW USER" color="grey-7" style="width:120px" />
      </q-card-section>
    </div>
    <q-card class="my-card q-mx-lg">
      <q-card-section class="bg-blue-grey-9 text-white text-center q-pa-sm">
        <div class="text-h6">END USER MANAGEMENT</div>
      </q-card-section>
      <q-card-section class="q-mb-lg">
        <q-input class="q-ma-md absolute-top-right" dense rounded outlined placeholder="Search" style="width:250px">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-table class="" flat bordered virtual-scroll :columns="col" row-key="name">
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const col = [
  {
    name: 'name',
    align: 'center',
    label: "ENTITY NO.",
    field: row => row.name,
    sortable: true,
  },
  {
    name: 'fullname',
    align: 'center',
    label: 'FULL NAME',
    sortable: true,
  },
  {
    name: 'dpt',
    required: true,
    label: 'DEPARTMENT',
    align: 'left',
    sortable: true,
  },
  {
    name: 'ops',
    required: true,
    label: 'OPTIONS',
    align: 'left',
    sortable: true,
  }
]

const row = [
  {
    name: 'BHDJSC855',
    fullname: 'John Doe',
    dpt: 'ITCSO',
  }



]
</script>

<style lang="scss" scoped></style>



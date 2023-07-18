<template>
  <q-page padding>
    <q-card style="width: 1080px;" class="absolute-center">
      <q-bar class="bg-blue-grey-10 text-white text-center">
        <div class="col text-center text-weight-bold">
          MODULE MANAGEMENT
        </div>
      </q-bar>
      <div class="q-pa-none row items-start">
        <!-- modules left card -->
        <q-card-section>
          <q-card class="my-card bg-blue-grey-10 text-white" style="width: min-content;">
            <q-card-actions vertical>
              <q-btn flat>Administration</q-btn>
              <q-btn flat>barangay</q-btn>
              <q-btn flat>demos</q-btn>
              <q-btn flat>doctrack</q-btn>
              <q-btn flat>jomis</q-btn>
              <q-btn flat>senior</q-btn>
              <q-btn flat>sp</q-btn>
              <q-btn flat>vamos</q-btn>
            </q-card-actions>
          </q-card>
        </q-card-section>

        <!-- add modules right card -->
        <q-card-section>
          <q-card class="my-card" style="width: max-content;">
            <q-card-actions horizontal>
              <q-btn icon="undo" label="back" color="blue-grey-10" to="/" />
              <q-btn icon="add" label="New Module" color="blue-grey-10" @click="handleDialogNew" />
            </q-card-actions>
          </q-card>
        </q-card-section>

        <q-dialog v-model="newDialog" class="q-pa-md" full-width>
          <q-card>
            <q-bar class="bg-blue-grey-10 text-white text-center">
              <div class="col text-left text-weight-bold">
                Enter New Module
              </div>

              <q-space />

              <q-btn dense flat icon="close" v-close-popup />
            </q-bar>
            <q-card-section>
              <q-input v-model="text" label="Module" hint="Note: Existing module won't be added."/>
            </q-card-section>

            <div class="row no-wrap items-center">
              <q-card-section>
              <q-btn dense icon="do_not_disturb_on" class="text-caption" label="Delete Row" color="blue-grey-10"/>
             
              <q-btn dense icon="add_circle" class="text-caption" label="Add Row" color="blue-grey-10"/>
            </q-card-section>
            </div>

            <q-card-section class="q-pt-none">
              <q-table>

              </q-table>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const newDialog = ref(false)

function handleDialogNew() {

  newDialog.value = true
}


</script>

<style lang="scss" scoped></style>

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
          <q-card class="my-card bg-blue-grey-10 text-white text-caption" style="width: min-content;">
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
        <q-card-section class="my-card" style="width: max-content;">
          <div class="row no-wrap items-center q-pa-none text-white rounded-borders">
            <q-btn icon="undo" label="back" color="blue-grey-10" to="/" />

            <q-space />

            <div>
              <q-btn icon="add" label="New Module" color="blue-grey-10" @click="handleDialogNew" />
            </div>
          </div>
        </q-card-section>

        <q-dialog v-model="newDialog" full-width>
          <q-card>
            <q-bar class="bg-blue-grey-10 text-white text-center">
              <div class="col text-left text-weight-bold">
                Enter New Module
              </div>

              <q-space />

              <q-btn dense flat icon="close" v-close-popup />
            </q-bar>

            <!-- Input -->
            <q-card-section>
              <q-input v-model="text" label="Module" hint="Note: Existing module won't be added." />
            </q-card-section>

            <div class="q-pa-md">

              <div class="row no-wrap items-center q-mt-md q-pa-sm text-white rounded-borders">
                <q-btn dense icon="do_not_disturb_on" class="text-caption" label="Delete Row" color="blue-grey-10" />

                <q-space />

                <div>
                  <q-btn dense icon="add_circle" class="text-caption" label="Add Row" color="blue-grey-10" />
                </div>
              </div>
            </div>

            <q-card-section class="q-pt-none">
              <q-table flat :rows="users" :columns="cols">
                <template v-slot:body-cell-username="props">
                  <q-td class="text-red">
                    <q-icon color="indigo" name="person" size="16px" /> {{ props.row.username }}
                  </q-td>
                </template>

                <template v-slot:body-cell-status="props">
                  <q-td :props="props" class="text-red">
                    <q-select v-model="status" :options="['Verified', 'Not Verified']" />
                  </q-td>
                </template>

                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn @click="handleDialogUpdating(props.row)" flat round icon="edit" size="sm" color="positive" />
                    <q-btn @click="handleDelete(props.row)" flat round icon="delete" size="sm" color="negative" />
                    <q-btn flat round icon="description" size="sm" color="blue" />
                  </q-td>
                </template>
              </q-table>
            </q-card-section>


            <q-card-actions align="right">
              <q-btn label="Close" color="blue-grey-10" v-close-popup />
              <q-btn label="Submit" color="blue-grey-10" v-close-popup />
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

const cols = [
  { name: 'userRole', field: 'userRole', label: 'User Role', align: 'center', sortable: true, headerClasses: 'bg-blue-grey-10 text-white'},
  { name: 'title', field: 'title', label: 'Title', align: 'center', sortable: true, headerClasses: 'bg-blue-grey-10 text-white' }

]


</script>

<style lang="scss" scoped></style>

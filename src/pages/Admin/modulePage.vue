<template>
  <q-page padding>
    <q-card style="width: 1000px;" class="absolute-center">
      <q-bar class="bg-blue-grey-10 text-white text-center">
        <div class="col text-center text-weight-bold">
          MODULE MANAGEMENT
        </div>
      </q-bar>
      <div class="q-pa-md row items-start q-gutter-xs">
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
              <q-btn rounded icon="undo" label="back" color="blue-grey-10" to="/"/>
              <q-btn rounded icon="add" label="New Module" color="blue-grey-10" />
            </q-card-actions>
          </q-card>
        </q-card-section>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>

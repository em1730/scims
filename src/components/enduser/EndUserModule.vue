<template>
  <div>
    <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
      <div class="text-h6 text-center">MODULES</div>
    </q-card-section>
    <q-card-section class="">
      <div class=" q-mb-md">
        <div class="row text-caption">VAMOS</div>
        <div class="row q-gutter-x-none items-start">
          <!-- <ModuleInput val="vamos.admin" style="width: 170px ;">
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
            </template>
          </ModuleInput> -->
          <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="vamosModule" val="vamos.admin" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="vamosModule" val="vamos.helpdesk" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 198px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="vamosModule" val="vamos.brangay.encoders" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">BARANGAY ENCODERS</div>
            </template>
          </q-field>

          <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="vamosModule" val="vamos.data.encoders" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="vamosModule" val="vamos.viewers" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">VIEWERS</div>
            </template>
          </q-field>
        </div>
      </div>
      <div class="q-mb-md">
        <div class="row text-caption">RESBAKUNA</div>
        <div class="row q-gutter-x-none items-start">
          <q-field standout dense label-color="orange" outlined stack-label style="width: 292px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="resbakunaModule" val="resbakuna.admin" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 293px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="resbakunaModule" val="resbakuna.helpdesk" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 292px  ;">
            <template v-slot:prepend>
              <q-radio dense v-model="resbakunaModule" val="resbakuna.data.encoders" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
            </template>
          </q-field>
        </div>
      </div>
      <div class="q-mb-md">
        <div class="row text-caption">DOCUMENT TRACKING</div>
        <div class="row q-gutter-x-none items-start">
          <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="doctrackModule" val="doctrack.admin" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="doctrackModule" val="doctrack.helpdesk" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="doctrackModule" val="doctrack.data.encoders" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
            </template>
          </q-field>
          <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
            <template v-slot:prepend>
              <q-radio dense v-model="doctrackModule" val="doctrack.viewers" color="cyan" />
            </template>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">VIEWERS</div>
            </template>
          </q-field>
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModuleInput from 'components/enduser/modules/EndUserAccountModules.vue'

const vamosModule = ref()
const resbakunaModule = ref()
const doctrackModule = ref()
</script>

<style lang="scss" scoped></style>

<template>
  <q-page padding>
    <!-- <h3>{{ uid() }}</h3> -->
    <h3 v-if="UserData.job_designation == 'Secretary'">Only Developer</h3>
    <q-card class="my-card q-mt-sm q-mx-auto bg-transparent justify-center" flat dense style="width:1180px">
      <Btn />
      <div class="individual-select">
        <!-- class="row reduce-height-form q-gutter-x-md justify-between " -->
        <q-form class="row q-gutter-md justify-between">
          <q-card class="my-card" style="width:910px">
            <PersonalInfo />
            <AccountInfo />
            <ModuleInfo />
          </q-card>
          <q-card class="my-card" style="width:250px; height: 280px;">
            <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">PROFILE PHOTO</div>
            </q-card-section>
            <q-card-section class="flex flex-center q-ma-auto">
              <q-avatar size="200px" class="q-ma-auto">
                <!-- <img :src="`https://vamosmobile.app/sccdrrmo/flutter/images/${endUserPersonalInfo.photo}`"> -->
              </q-avatar>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'boot/axios'
import { date, Notify, uid } from 'quasar'
import { useVamosDataStore } from 'stores/vamos-data'
import PersonalInfo from 'components/enduser/EndUserPersonalSection.vue'
import AccountInfo from 'components/enduser/EndUserAccountInfo.vue'
import ModuleInfo from 'components/enduser/EndUserModule.vue'
import Btn from 'components/enduser/EndUserBtn.vue'

import { UserData } from 'src/constants/global_constants'


// const store = useVamosDataStore();



// Example: Call the insertDataToDatabase function on a button click


function clear() {
  endUserPersonalInfo.entityNo = ''
  endUserPersonalInfo.fullName = ''
  endUserPersonalInfo.gender = ''
  endUserPersonalInfo.dateOfBirth = ''
  endUserPersonalInfo.mobileNo = ''
  endUserPersonalInfo.homeAddress = ''
  endUserPersonalInfo.email = ''
  endUserPersonalInfo.photo = ''
  endUserAccountInfo.username = ''
  endUserAccountInfo.password = ''
  endUserAccountInfo.jobDesignation = ''
  endUserAccountInfo.department = ''
  endUserAccountInfo.division = ''
  endUserAccountInfo.section = ''
  departmentInput.value = ''
  divisionInput.value = ''
  sectionInput.value = ''
  vamosModule.value = ''
  resbakunaModule.value = ''
  doctrackModule.value = ''


}



</script>





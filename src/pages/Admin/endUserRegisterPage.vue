<template>
  <q-page padding>
    <q-card class="my-card q-mt-md q-mx-xl q-mx-auto justify-between bg-transparent" flat dense style="width:1200px">
      <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
        <q-btn to="/endUser" rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
        <q-btn rounded size="13px" label="SAVE" color="grey-7" style="width:120px" />
      </q-card-section>
    </q-card>
    <q-form class="reduce-height-form">
      <div class="row q-gutter-x-sm justify-between">
        <div class="col-md-5 q-px-sm">
          <q-card class="my-card" style="width:1000px">
            <q-card-section class="bg-blue-grey-9 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">PERSONAL INFORMATION</div>
            </q-card-section>
            <q-card-section>
              <div class="">
                <div class="q-gutter-md row items-start">
                  <div>
                    <div class="text-caption">SELECT INDIVIDUAL</div>
                    <q-select dense v-model="endUserPersonalInfo.entityNo" outlined :options="departments" emit-value
                      option-value="department_name" option-label="department_name" use-input
                      @new-value="addNewValuedepartments" behavior="menu" style="width:150px" />
                  </div>
                  <div>
                    <div class="text-caption">ENTITY NO.</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" dense outlined square filled flat
                      style="width:150px" />
                  </div>
                  <div>
                    <div class="text-caption">FULL NAME</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat style="width:300px"
                      placeholder="(FIRST NAME, MIDDLE INITIAL, LAST NAME)" />
                  </div>
                  <div>
                    <div class="text-caption">GENDER</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat
                      style="width:150px" />
                  </div>
                  <div>
                    <div class="text-caption">DATE OF BIRTH</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" type="date" outlined square filled dense flat
                      style="width:150px" />
                  </div>
                  <div>
                    <div class="text-caption">MOBILE NUMBER</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat
                      style="width:150px" />
                  </div>
                  <div>
                    <div class="text-caption">HOME ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat
                      placeholder="(STREET, BARANGAY, CITY, PROVINCE, COUNTRY)" style="width:467px" />
                  </div>
                  <div>
                    <div class="text-caption">EMAIL ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat
                      style="width:150px" />
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-blue-grey-9 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">ACCOUNT INFORMATION</div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-md row items-start">
                <div>
                  <div class="text-caption">USERNAME</div>
                  <q-input v-model="endUserPersonalInfo.entityNo" outlined square dense flat style="width:310px" />
                </div>
                <div>
                  <div class="text-caption">PASSWORD</div>
                  <q-input v-model="endUserPersonalInfo.entityNo" outlined square filled dense flat style="width:310px" />
                </div>
                <div>
                  <div class="text-caption">JOB DESIGNATION</div>
                  <q-input v-model="endUserPersonalInfo.entityNo" outlined square dense flat style="width:310px" />
                </div>
                <div>
                  <div class="text-caption">DEPARTMENT</div>
                  <q-select model="endUserPersonalInfo.entityNo" outlined square dense flat style="width:310px" />
                </div>
                <div>
                  <div class="text-caption">DIVISION</div>
                  <q-select v-model="endUserPersonalInfo.entityNo" outlined square dense flat style="width:310px" />
                </div>
                <div>
                  <div class="text-caption">SECTION</div>
                  <q-select v-model="endUserPersonalInfo.entityNo" outlined square dense flat style="width:310px" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-blue-grey-9 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">MODULES</div>
            </q-card-section>
            <q-card-section>
              <div class=" q-mb-md">
                <div class="row text-caption">VAMOS</div>
                <div class="row q-gutter-x-none items-start">
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 192px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 192px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 200px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line3" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">BARANGAY ENDODERS</div>
                    </template>
                  </q-field>

                  <q-field standout dense label-color="orange" outlined stack-label style="width: 192px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line4" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                    </template>
                  </q-field>


                  <q-field standout dense label-color="orange" outlined stack-label style="width: 192px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line5" color="cyan" />
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
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 320px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 328px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 320px  ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line3" color="cyan" />
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
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 240px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line3" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 244px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>

                  <q-field standout dense label-color="orange" outlined stack-label style="width: 244px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                    </template>
                  </q-field>


                  <q-field standout dense label-color="orange" outlined stack-label style="width: 240px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line4" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">VIEWERS</div>
                    </template>
                  </q-field>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card" style="width:300px">
            <q-card-section class="bg-blue-grey-9 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">PROFILE PHOTO</div>
            </q-card-section>
            <q-card-section class="flex flex-center q-ma-auto">
              <q-avatar size="250px" class="q-ma-auto">
                <img src="~assets/scc-logo.ico">
              </q-avatar>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
//for customize input
import InputFieldRoundedVue from 'src/components/input/InputFieldRounded.vue'
import TwInput from 'src/components/input/TwInput.vue';
import LoginLayout from 'src/layouts/LoginLayout.vue';

const radioBtn = ref('line')
const text = ref("Admin")
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

<style lang="scss" >
// .individual-select {
//   .q-field--outlined .q-field__control {
//     border-radius: 10px;
//     height: 3opx;
//   }
// }
</style>



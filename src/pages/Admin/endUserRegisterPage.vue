<template>
  <q-page padding>
    <q-card class="my-card q-mt-sm q-mx-auto bg-transparent justify-center" flat dense style="width:1180px">
      <div>
        <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
          <q-btn to="/endUser" rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
          <q-btn rounded size="13px" label="SAVE" color="grey-7" style="width:120px" />
        </q-card-section>
      </div>
      <div class="individual-select">
        <q-form class="row reduce-height-form q-gutter-x-md justify-between ">
          <q-card class="my-card" style="width:910px">
            <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">PERSONAL INFORMATION</div>
            </q-card-section>
            <q-card-section>
              <div class="">
                <div class="q-gutter-x-md q-gutter-y-sm row items-start">
                  <div>
                    <div class="text-caption">SELECT INDIVIDUAL</div>
                    <q-select dense v-model="endUserPersonalInfo.selectIndividual" outlined :options="departments"
                      emit-value option-value="department_name" option-label="department_name" use-input
                      @new-value="addNewValuedepartments" behavior="menu" style="width:127px" />
                  </div>
                  <div>
                    <div class="text-caption">ENTITY NO.</div>
                    <q-input v-model="endUserPersonalInfo.entityNo" dense outlined square filled flat
                      style="width:120px" />
                  </div>
                  <div>
                    <div class="text-caption">FULL NAME</div>
                    <q-input v-model="endUserPersonalInfo.fullName" outlined square filled dense flat style="width:300px"
                      placeholder="(FIRST NAME, MIDDLE INITIAL, LAST NAME)" />
                  </div>
                  <div>
                    <div class="text-caption">GENDER</div>
                    <q-input v-model="endUserPersonalInfo.gender" outlined square filled dense flat style="width:120px" />
                  </div>
                  <div>
                    <div class="text-caption">DATE OF BIRTH</div>
                    <q-input v-model="endUserPersonalInfo.dateOfBirth" type="date" outlined square filled dense flat
                      style="width:145px" />
                  </div>
                  <div>
                    <div class="text-caption">MOBILE NUMBER</div>
                    <q-input v-model="endUserPersonalInfo.mobileNo" mask="###########" fill-mask="#" outlined square
                      filled dense flat style="width:127px" />
                  </div>
                  <div>
                    <div class="text-caption">HOME ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.homeAddress" outlined square filled dense flat
                      placeholder="(STREET, BARANGAY, CITY, PROVINCE, COUNTRY)" style="width:437px" />
                  </div>
                  <div>
                    <div class="text-caption">EMAIL ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.email" outlined square filled dense flat style="width:200px" />
                  </div>

                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">ACCOUNT INFORMATION</div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-x-md q-gutter-y-sm row items-start">
                <div>
                  <div class="text-caption">USERNAME</div>
                  <q-input v-model="endUserAccountInfo.username" outlined square dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">PASSWORD</div>
                  <q-input v-model="endUserAccountInfo.password" outlined square filled dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">JOB DESIGNATION</div>
                  <q-input v-model="endUserAccountInfo.jobDesignation" outlined square dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">DEPARTMENT</div>
                  <q-select v-model="endUserAccountInfo.department" outlined dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">DIVISION</div>
                  <q-select v-model="endUserPersonalInfo.division" outlined dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">SECTION</div>
                  <q-select v-model="endUserPersonalInfo.section" outlined dense flat style="width:280px" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">MODULES</div>
            </q-card-section>
            <q-card-section class="">
              <div class=" q-mb-md">
                <div class="row text-caption">VAMOS</div>
                <div class="row q-gutter-x-none items-start">
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 198px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line3" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">BARANGAY ENCODERS</div>
                    </template>
                  </q-field>

                  <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line4" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                    </template>
                  </q-field>


                  <q-field standout dense label-color="orange" outlined stack-label style="width: 170px ;">
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
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 292px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 293px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 292px  ;">
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
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line3" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line2" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                    </template>
                  </q-field>

                  <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
                    <template v-slot:prepend>
                      <q-radio dense v-model="radioBtn" val="line" color="cyan" />
                    </template>
                    <template v-slot:control>
                      <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                    </template>
                  </q-field>
                  <q-field standout dense label-color="orange" outlined stack-label style="width: 219px ;">
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
          <q-card class="my-card" style="width:250px; height: 280px;">
            <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
              <div class="text-h6 text-center">PROFILE PHOTO</div>
            </q-card-section>
            <q-card-section class="flex flex-center q-ma-auto">
              <q-avatar size="200px" class="q-ma-auto">
                <img src="~assets/scc-logo.ico">
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
//for customize input


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
.individual-select {
  .q-field--outlined .q-field__control {
    border-radius: 12px;

  }
}
</style>



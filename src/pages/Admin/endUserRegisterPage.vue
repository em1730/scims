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
                    <q-input @update:model-value="searchVamosUser" dense v-model="selectIndividual" outlined
                      style="width:127px" debounce="1000">
                      <div v-if="selectIndividual" class="custom-list z-top">
                        <q-card>
                          <q-list seaprator>
                            <q-item v-if="!vamosUser?.length">
                              No record found.
                            </q-item>
                            <template v-else>
                              <q-item @click="autoFillUser(user)" v-for="user in vamosUser" :key="user.id" clickable>
                                <q-item-section avatar>
                                  <q-icon name="person" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>{{ user.fullname }}</q-item-label>
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-list>
                        </q-card>
                      </div>
                    </q-input>
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
                <img :src="`https://vamosmobile.app/sccdrrmo/flutter/images/${endUserPersonalInfo.photo}`">
              </q-avatar>
            </q-card-section>
          </q-card>


        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useVamosDataStore } from '../../stores/vamos-data'
import { date } from 'quasar'
//for customize input

const vamosData = useVamosDataStore();
const vamosUser = computed(() => vamosData.vamosUserData)
console.log(vamosUser);

const searchVamosUser = (keyword) => {
  vamosData.findVamosUserData(keyword)

}

const selectIndividual = ref('')
const autoFillUser = (data) => {
  console.log(data);
  endUserPersonalInfo.entityNo = data.entity_no
  endUserPersonalInfo.fullName = `${data.firstname} ${data.middlename} ${data.lastname}`
  endUserPersonalInfo.gender = data.gender
  endUserPersonalInfo.dateOfBirth = date.formatDate(data.birthdate, "YYYY-MM-DD")
  endUserPersonalInfo.mobileNo = data.mobile_no
  endUserPersonalInfo.homeAddress = `${data.street} ${data.barangay} ${data.city} ${data.province} `
  endUserPersonalInfo.email = data.email
  endUserPersonalInfo.photo = data.photo

  selectIndividual.value = ""
}



const radioBtn = ref('line')
const text = ref("Admin")
const endUserPersonalInfo = reactive({
  entityNo: "",
  fullName: "",
  gender: "",
  dateOfBirth: "",
  mobileNo: "",
  homeAddress: "",
  email: "",
  photo: ""
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
.custom-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: 400px;
  width: 500px;
  overflow-y: auto;

}

.individual-select {
  .q-field--outlined .q-field__control {
    border-radius: 12px;

  }
}
</style>



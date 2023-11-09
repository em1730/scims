<template>
  <q-page padding>
    <q-card class="my-card q-mt-sm q-mx-auto bg-transparent justify-center" flat dense style="width:1180px">
      <div>
        <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
          <q-btn to="/endUser" rounded size="13px" label="BACK" color="grey-7" style="width:120px" />
          <q-btn @click="handleInsertButtonClick" rounded size="13px" label="SAVE" color="grey-7" style="width:120px" />
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
                      style="width:127px" debounce="1500">
                      <div v-if="selectIndividual" class="custom-list z-top">
                        <q-card>
                          <q-list seaprator>
                            <q-item v-if="!vamosUser?.length">
                              No record found.
                            </q-item>
                            <template v-else>
                              <q-item @click="autoFillUser(user)" v-for="user in vamosUser" :key="user.id" clickable>
                                <q-item-section avatar>
                                  <q-icon>
                                    <img :src="`https://vamosmobile.app/sccdrrmo/flutter/images/${user.photo}`">
                                  </q-icon>
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
                    <q-input v-model="endUserPersonalInfo.entityNo" dense outlined square filled flat readonly disable
                      style="width:120px" />
                  </div>
                  <div>
                    <div class="text-caption">FULL NAME</div>
                    <q-input v-model="endUserPersonalInfo.fullName" outlined square filled dense flat readonly disable
                      style="width:300px" placeholder="(FIRST NAME, MIDDLE INITIAL, LAST NAME)" />
                  </div>
                  <div>
                    <div class="text-caption">GENDER</div>
                    <q-input v-model="endUserPersonalInfo.gender" outlined square filled dense flat readonly disable
                      style="width:120px" />
                  </div>
                  <div>
                    <div class="text-caption">DATE OF BIRTH</div>
                    <q-input v-model="endUserPersonalInfo.dateOfBirth" type="date" outlined square filled dense flat
                      readonly disable style="width:145px" />
                  </div>
                  <div>
                    <div class="text-caption">MOBILE NUMBER</div>
                    <q-input v-model="endUserPersonalInfo.mobileNo" mask="###########" fill-mask="#" outlined square
                      filled dense flat readonly disable style="width:127px" />
                  </div>
                  <div>
                    <div class="text-caption">HOME ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.homeAddress" outlined square filled dense flat readonly disable
                      placeholder="(STREET, BARANGAY, CITY, PROVINCE, COUNTRY)" style="width:437px" />
                  </div>
                  <div>
                    <div class="text-caption">EMAIL ADDRESS</div>
                    <q-input v-model="endUserPersonalInfo.email" outlined square filled dense flat readonly disable
                      style="width:200px" />
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
                  <q-input v-model="endUserAccountInfo.password" :type="ispwd ? 'password' : 'text'" outlined square
                    filled dense flat style="width:280px">
                    <template v-slot:append>
                      <q-icon :name="ispwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                        @click="ispwd = !ispwd" />
                    </template>
                  </q-input>

                </div>
                <div>
                  <div class="text-caption">JOB DESIGNATION</div>
                  <q-input v-model="endUserAccountInfo.jobDesignation" outlined square dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">DEPARTMENT</div>
                  <q-select @update:model-value="onDepartmentSelected" v-model="departmentInput" :options="departments"
                    option-label="department_name" emit-value outlined dense flat style="width: 280px" />
                </div>
                <div>
                  <div class="text-caption">DIVISION</div>
                  <q-select @update:model-value="onDivisionSelected" v-model="divisionInput" option-value="division_name"
                    option-label="division_name" :options="divisions" outlined dense flat style="width:280px" />
                </div>
                <div>
                  <div class="text-caption">SECTION</div>
                  <q-select @update:model-value="onSectionSelected" v-model="sectionInput" option-value="section_name"
                    option-label="section_name" :options="sections" outlined dense flat style="width:280px" />
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
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useVamosDataStore } from '../../stores/vamos-data'
import { api } from 'boot/axios'
import { date, Notify } from 'quasar'
//for customize input

const vamosData = useVamosDataStore();
const vamosUser = computed(() => vamosData.vamosUserData)

const searchVamosUser = (keyword) => {
  vamosData.findVamosUserData(keyword)

}


const selectIndividual = ref('')
const autoFillUser = (data) => {
  endUserPersonalInfo.entityNo = data.entity_no
  endUserPersonalInfo.fullName = `${data.firstname} ${data.middlename} ${data.lastname}`
  endUserPersonalInfo.gender = data.gender
  endUserPersonalInfo.dateOfBirth = date.formatDate(data.birthdate, "YYYY-MM-DD")
  endUserPersonalInfo.mobileNo = data.mobile_no
  endUserPersonalInfo.homeAddress = `${data.street},Brgy. ${data.barangay}, ${data.city} ${data.province} `
  endUserPersonalInfo.email = data.email
  endUserPersonalInfo.photo = data.photo

  selectIndividual.value = ""
}

const vamosModule = ref()
const resbakunaModule = ref()
const doctrackModule = ref()

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
  department: "",
  division: "",
  password: "",
  username: "",
  jobDesignation: "",
  section: ""
});

// Function to send data to the server for database insertion
const insertDataToDatabase = async () => {
  const data = {
    username: endUserAccountInfo.username, // Add the missing fields here
    job_position: endUserAccountInfo.jobDesignation,
    fullname: endUserPersonalInfo.fullName,
    department: endUserAccountInfo.department,
    division: endUserAccountInfo.division,
    section: endUserAccountInfo.section,
    password: endUserAccountInfo.password,
    entity_no: endUserPersonalInfo.entityNo, // Include 'entityNo'
    vamosModule: vamosModule.value, // Include 'vamosModule'
    resbakunaModule: resbakunaModule.value, // Include 'resbakunaModule'
    doctrackModule: doctrackModule.value, // Include 'doctrackModule'

  };
  console.log(data)



  const response = await api.post('api/insertUserData', data);

  if (response.status === 201) {
    // Data successfully inserted
    Notify.create({
      type: 'positive',
      message: "User's data successfully inserted into the database."
    })
    clear()
  } else {
    // Handle error if necessary
    console.error('Error inserting data into the database.');
  }
};

// Example: Call the insertDataToDatabase function on a button click
const handleInsertButtonClick = () => {
  insertDataToDatabase();

};

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
  endUserAccountInfo.department = ''
  endUserAccountInfo.division = ''
  endUserAccountInfo.password = ''
  endUserAccountInfo.jobDesignation = ''
  endUserAccountInfo.section = ''


}

// Options of different select inputs
const departments = ref([]);
const divisions = ref([]);
const sections = ref([]);

// Select input v-models
const departmentInput = ref(null),
  sectionInput = ref(null),
  divisionInput = ref(null);

const onDepartmentSelected = (val) => {
  endUserAccountInfo.department = val.department_name
  if (val.divisions.length) {
    divisions.value = val.divisions
  } else {
    divisions.value = [{ division_name: 'N/A' }]
    endUserAccountInfo.division = 'N/A';
  }
  sections.value = [{ section_name: 'N/A' }];
  endUserAccountInfo.section = 'N/A';
}

const onDivisionSelected = (val) => {
  if (val.division_name == 'N/A') {
    endUserAccountInfo.division = 'N/A'
    sections.value = [{ section_name: 'N/A' }];
    endUserAccountInfo.section = 'N/A';
  } else {
    endUserAccountInfo.division = val.division_name
    if (val.sections && val.sections.length) {
      sections.value = val.sections;
    } else {
      sections.value = [{ section_name: 'N/A' }];
      endUserAccountInfo.section = 'N/A';
    }
  }

}

const onSectionSelected = (val) => {
  if (val.section_name == 'N/A') {
    endUserAccountInfo.section = 'N/A';
  } else {
    endUserAccountInfo.section = val.section_name;
  }

}

async function fetchDepartments() {
  const res = await api.get('api/department-with-division-sec')

  departments.value = res.data

}

fetchDepartments()


const ispwd = ref(true)


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



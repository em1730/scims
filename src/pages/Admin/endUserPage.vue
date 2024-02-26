<template>
  <q-page padding>
    <q-card class="my-card q-mx-xl q-mx-auto justify-between bg-transparent" flat dense style="width:1090px">
      <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
        <Btn to="/administration" label="BACK" />
        <Btn to="/endUserRegister" label="NEW USER" />
      </q-card-section>
    </q-card>
    <q-card class="my-card q-mx-auto q-gutter-y-md justify-between" style="width:1090px">
      <q-card-section class="bg-blue-grey-7 text-white text-center q-pa-sm">
        <div class="text-h6">END USER MANAGEMENT</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="searchQuery" @update:model-value="search" class="q-mr-md absolute-top-right" dense rounded
          outlined placeholder="Search" debounce="1500" style="width:250px">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <div v-if="loading" class="flex flex-center flex-middle vh-100">
          <!-- Loading spinner and message -->
          <div>
            <q-spinner size="lg" color="green" />
            <div>Loading...</div>
          </div>
        </div>
        <q-table v-else-if="scimsUser.length > 0" flat bordered virtual-scroll :rows="scimsUser" :columns="columns"
          row-key="name" :separator="separator">
          <template v-slot:body-cell-ops="props">
            <q-td auto-width>
              <q-btn @click="editUser(props.row)" flat round dense size="sm" icon="edit" color="positive">
                <q-tooltip class="bg-positive" :offset="[10, 10]">Open / Edit</q-tooltip>
              </q-btn>
              <q-btn @click="deleteScimsUser(props.row.id)" flat round dense size="sm" icon="delete" color="negative">
                <q-tooltip class="bg-negative" :offset="[10, 10]">Delete</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
        <div v-else>
          <q-table flat bordered :columns="columns" :rows="[]" row-key="name" :separator="separator" />
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialog" persistent content-style="background-color: rgba(0,0,0,1)">
      <q-card style="max-width: 100%; width:930px">
        <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
          <div class="text-h6 text-center">ACCOUNT INFORMATION</div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-x-md q-gutter-y-sm row items-start">
            <div>
              <div class="text-caption">FULLNAME</div>
              <q-input v-model="endUserAccountInfo.fullname" outlined square dense flat style="width:280px" />
            </div>
            <div>
              <div>
                <div class="text-caption">USERNAME</div>
                <q-input v-model="endUserAccountInfo.username" outlined square dense flat style="width:280px" />
              </div>
            </div>
            <div>
              <div class="text-caption">JOB DESIGNATION</div>
              <q-input v-model="endUserAccountInfo.jobDesignation" outlined square dense flat style="width:280px" />
            </div>
            <div>
              <div class="text-caption">DEPARTMENT</div>
              <q-select @update:model-value="onDepartmentSelected" v-model="endUserAccountInfo.department"
                :options="departments" option-label="department_name" emit-value outlined dense flat
                style="width: 280px" />
            </div>
            <div>
              <div class="text-caption">DIVISION</div>
              <q-select @update:model-value="onDivisionSelected" v-model="endUserAccountInfo.division"
                :options="divisions" option-label="division_name" emit-value outlined dense flat style="width:280px" />
            </div>
            <div>
              <div class="text-caption">SECTION</div>
              <q-select @update:model-value="onSectionSelected" v-model="endUserAccountInfo.section" :options="sections"
                option-label="section_name" emit-value outlined dense flat style="width:280px" />
            </div>
          </div>
        </q-card-section>
        <div class="q-mb-lg">
          <q-card-section class="bg-blue-grey-7 text-white q-pa-sm">
            <div class="text-h6 text-center">MODULES</div>
          </q-card-section>
          <q-card-section class="">
            <div class=" q-mb-sm">
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
            <div class="q-mb-sm">
              <div class="row text-caption">RESBAKUNA</div>
              <div class="row q-gutter-x-none items-start">
                <q-field standout dense outlined stack-label style="width: 292px ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="resbakunaModule" val="resbakuna.admin" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                  </template>
                </q-field>
                <q-field standout dense outlined stack-label style="width: 293px ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="resbakunaModule" val="resbakuna.helpdesk" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                  </template>
                </q-field>
                <q-field standout dense outlined stack-label style="width: 292px  ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="resbakunaModule" val="resbakuna.data.encoders" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                  </template>
                </q-field>
              </div>
            </div>
            <div class="q-mb-sm">
              <div class="row text-caption">DOCUMENT TRACKING</div>
              <div class="row q-gutter-x-none items-start">
                <q-field standout dense outlined stack-label style="width: 219px ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="doctrackModule" val="doctrack.admin" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">ADMIN</div>
                  </template>
                </q-field>
                <q-field standout dense outlined stack-label style="width: 219px ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="doctrackModule" val="doctrack.helpdesk" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">HELPDESK</div>
                  </template>
                </q-field>

                <q-field standout dense outlined stack-label style="width: 219px ;">
                  <template v-slot:prepend>
                    <q-radio dense v-model="doctrackModule" val="doctrack.data.encoders" color="cyan" />
                  </template>
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">DATA ENCODERS</div>
                  </template>
                </q-field>
                <q-field standout dense outlined stack-label style="width: 219px ;">
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
        <q-card-section>
          <div class="q-gutter-x-sm text-right">
            <q-btn label="Close" v-close-popup flat padding="5px 30px" />
            <q-btn @click="updateUser" padding="5px 30px" color="light-blue-10" rounded label="Save"
              class="glossy q-pa-sm" dense />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { api } from "boot/axios";
import { Notify } from 'quasar'
import Btn from "components/enduser/button/EndUserButton.vue"
// import { useScimsDataStore } from "../../stores/scims-data"
// import { useRouter } from 'vue-router'

const dialog = ref(false)
const scimsUser = ref([])
const separator = ref('horizontal')
const loading = ref(false);
const columns = [
  { name: 'entity_no', required: true, label: 'ENTITY NO.', align: 'left', field: row => row.entity_no, sortable: true },
  { name: 'fullname', align: 'center', label: 'FULL NAME', field: 'fullname', sortable: true },
  { name: 'department', align: 'center', label: 'DEPARTMENT', field: 'department', sortable: true },
  { name: 'ops', align: 'center', label: 'OPTION', field: 'ops' }
]

onMounted(() => {
  viewScimsUser()
})

async function fetchDepartments() {
  const res = await api.get('api/department-with-division-sec')
  departments.value = res.data
}
fetchDepartments()

const departments = ref([]);
const divisions = ref([]);
const sections = ref([]);


const vamosModule = ref(null);
const resbakunaModule = ref(null);
const doctrackModule = ref(null);

const endUserAccountInfo = reactive({
  department: "",
  division: "",
  fullname: "",
  username: "",
  jobDesignation: "",
  section: ""
});

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


const updateUser = (existingUser, updatedUser) => {
  if (!existingUser || !updatedUser) {
    console.error("Invalid users provided for update:", existingUser, updatedUser);
    return;
  }

  existingUser.username = updatedUser.username || existingUser.username;
  existingUser.fullname = updatedUser.fullname || existingUser.fullname;
  existingUser.job_position = updatedUser.job_position || existingUser.job_position;
  existingUser.department = updatedUser.department || existingUser.department;
  existingUser.division = updatedUser.division || existingUser.division;
  existingUser.section = updatedUser.section || existingUser.section;

  if (updatedUser.account_type) {
    existingUser.account_type = existingUser.account_type || {};
    const { doctrack_sys, resbakuna_sys, vamos_sys } = updatedUser.account_type;
    existingUser.account_type.doctrack_sys = doctrack_sys || existingUser.account_type.doctrack_sys;
    existingUser.account_type.resbakuna_sys = resbakuna_sys || existingUser.account_type.resbakuna_sys;
    existingUser.account_type.vamos_sys = vamos_sys || existingUser.account_type.vamos_sys;
  }

  editUser(existingUser);
};
const editUser = (user) => {
  if (!user.account_type) {
    // Handle the case where account_type is not defined
    console.error("Account type is undefined for the user:", user);
    return;
  }

  const { doctrack_sys, resbakuna_sys, vamos_sys } = user.account_type;

  endUserAccountInfo.username = user.username;
  endUserAccountInfo.fullname = user.fullname;
  endUserAccountInfo.jobDesignation = user.job_position;
  endUserAccountInfo.department = user.department;
  endUserAccountInfo.division = user.division;
  endUserAccountInfo.section = user.section;

  vamosModule.value = vamos_sys;
  resbakunaModule.value = resbakuna_sys;
  doctrackModule.value = doctrack_sys;

  dialog.value = true;

  // Assuming you have an index for the user in the scimsUser array
  const index = scimsUser.value.findIndex((u) => u.entity_no === user.entity_no);

  // Check if the user was found in the array
  if (index !== -1) {
    // Update the user in the array
    scimsUser.value.splice(index, 1, user);
  }

  console.log(user);
};



async function viewScimsUser() {
  try {
    loading.value = true;
    const res = await api.get("api/user");
    scimsUser.value = res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
}

async function deleteScimsUser(id) {
  try {
    const response = await api.delete("api/user/" + id)
    if (response.status === 200) {
      const index = scimsUser.value.findIndex(item => item.id === id)
      scimsUser.value.splice(index, 1)

      Notify.create({
        type: 'negative',
        message: response.data.message,
        position: 'bottom'
      })
    }
  } catch (error) {
    console.error("Error deleting user:", error)
  } finally {
    loading.value = false;
  }
}

const searchQuery = ref('');


const search = async () => {
  try {
    loading.value = true;
    const response = await api.post("api/search-user", { keyword: searchQuery.value });
    scimsUser.value = response.data;
  } catch (error) {
    console.error("Error searching user:", error);
  } finally {
    loading.value = false;
  }
};


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

<template>
  <div>
    <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
      <div class="text-h6 text-center">ACCOUNT INFORMATION</div>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-x-md q-gutter-y-sm row items-start">
        <div>
          <div class="text-caption">USERNAME</div>
          <DataInput :data="endUserAccountInfo.username" style="width:280px" />
        </div>
        <div>
          <div class="text-caption">PASSWORD</div>
          <q-input v-model="endUserAccountInfo.password" :type="ispwd ? 'password' : 'text'" outlined square filled dense
            flat style="width:280px">
            <template v-slot:append>
              <q-icon :name="ispwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="ispwd = !ispwd" />
            </template>
          </q-input>

        </div>
        <div>
          <div class="text-caption">JOB DESIGNATION</div>
          <DataInput :data="endUserAccountInfo.jobDesignation" outlined square dense flat style="width:280px" />
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
  </div>
</template>

<script setup>
import DataInput from 'components/enduser/account_info/EndUserAccountInfoInput.vue'
import { reactive, ref } from 'vue'
import { api } from 'boot/axios'

const ispwd = ref(true)
const endUserAccountInfo = reactive({
  department: "",
  division: "",
  password: "",
  username: "",
  jobDesignation: "",
  section: ""
});

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
</script>

<style lang="scss" scoped></style>

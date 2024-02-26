<template>
  <div>
    <q-card-section class="bg-blue-grey-7 text-white q-pa-sm" style="height:45px">
      <div class="text-h6 text-center">PERSONAL INFORMATION</div>
    </q-card-section>
    <q-card-section>
      <div class="">
        <div class="q-gutter-x-md q-gutter-y-sm row items-start">
          <div>
            <SearchInput @onSelect="autoFillUser" />
          </div>
          <div>
            <div class="text-caption">ENTITY NO.</div>
            <ViewInput :data="store.endUserPersonalInfo.entityNo" style="width:120px" />
          </div>
          <div>
            <div class="text-caption">FULL NAME</div>
            <ViewInput :data="store.endUserPersonalInfo.fullName" style="width:300px" />
          </div>
          <div>
            <div class="text-caption">GENDER</div>
            <ViewInput :data="store.endUserPersonalInfo.gender" style="width:120px" />
          </div>
          <div>
            <div class="text-caption">DATE OF BIRTH</div>
            <ViewInput :data="store.endUserPersonalInfo.dateOfBirth" style="width:145px" />
          </div>
          <div>
            <div class="text-caption">MOBILE NUMBER</div>
            <ViewInput :data="store.endUserPersonalInfo.mobileNo" style="width:127px" />
          </div>
          <div>
            <div class="text-caption">HOME ADDRESS</div>
            <ViewInput :data="store.endUserPersonalInfo.homeAddress" style="width:437px" />
          </div>
          <div>
            <div class="text-caption">EMAIL ADDRESS</div>
            <ViewInput :data="store.endUserPersonalInfo.email" style="width:200px" />
          </div>
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script setup>
import { date } from 'quasar'
import { useVamosDataStore } from 'stores/vamos-data'
import SearchInput from 'components/enduser/personal_info/input_component/EndUserSearchDataInput.vue'
import ViewInput from 'components/enduser/personal_info/input_component/EndUserInputPersonalInfo.vue'
import { info } from 'autoprefixer';

const store = useVamosDataStore()

// const endUserPersonalInfo = reactive({
//   entityNo: "",
//   fullName: "",
//   gender: "",
//   dateOfBirth: "",
//   mobileNo: "",
//   homeAddress: "",
//   email: "",
//   photo: ""
// })

const autoFillUser = (data) => {

  store.endUserPersonalInfo.entityNo = data.entity_no
  store.endUserPersonalInfo.fullName = `${data.firstname} ${data.middlename} ${data.lastname} ${data.suffix}`
  store.endUserPersonalInfo.gender = data.gender
  store.endUserPersonalInfo.dateOfBirth = date.formatDate(data.birthdate, "YYYY-MM-DD")
  store.endUserPersonalInfo.mobileNo = data.mobile_no
  store.endUserPersonalInfo.homeAddress = `${data.street},Brgy. ${data.barangay}, ${data.city} ${data.province} `
  store.endUserPersonalInfo.email = data.email
  store.endUserPersonalInfo.photo = data.photo
}

// function save() {
//   info.mobile = info.mobile.replace(" ", "")

// }
</script>

<style lang="scss" scoped></style>

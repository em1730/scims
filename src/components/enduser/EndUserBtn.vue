<template>
  <div>
    <q-card-section class="row q-gutter-y-md q-mx-auto justify-between">
      <Btn to="/endUser" label="BACK" />
      <Btn @click="handleInsertButtonClick" label="Save" />
    </q-card-section>
  </div>
</template>

<script setup>
import Btn from "components/enduser/button/EndUserButton.vue"

const insertDataToDatabase = async () => {
  const data = {
    username: endUserAccountInfo.username,
    job_position: endUserAccountInfo.jobDesignation,
    fullname: endUserPersonalInfo.fullName,
    department: endUserAccountInfo.department,
    division: endUserAccountInfo.division,
    section: endUserAccountInfo.section,
    password: endUserAccountInfo.password,
    entity_no: endUserPersonalInfo.entityNo,
    vamosModule: vamosModule.value,
    resbakunaModule: resbakunaModule.value,
    doctrackModule: doctrackModule.value,

  };

  const response = await api.post('api/user', data);

  if (response.status === 201) {
    Notify.create({
      type: 'positive',
      message: "User's data successfully inserted into the database."
    })
    clear()
  }
};
const handleInsertButtonClick = () => {
  insertDataToDatabase();

};
</script>

<style lang="scss" scoped></style>

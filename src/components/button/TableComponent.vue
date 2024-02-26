<template>
  <div>
    <q-btn @click="addTable" rounded icon="add" dense class="rounded-lg bg-gray-800 text-white">Add Section</q-btn>
    <div class="q-pa-md">
      <table v-if="showTable" :class="'rounded-lg'">
        <thead>
          <tr>
            <th><q-btn flat rounded icon="add" color="red" @click="addField" /></th>
            <th>Section Code</th>
            <th>Section Name</th>
          </tr>
        </thead>
        <tbody v-for="(field, index) in fields" :key="index">
          <tr v-for="(row, index) in tableData" :key="index">
            <td><q-btn icon="remove" rounded flat color="green" @click="removeField"></q-btn></td>
            <td><q-input></q-input></td>
            <td><q-input></q-input></td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>

export default {
  props: ['value'],
  data() {
    return {
      fieldValue: this.value || '',
      showTable: false,
      tableData: [],
      fields: [''], // Initial field
      columns:[
    {
      name: "options",
      icon: "add",
      align: "center",
      headerStyle: "width: 500px; color:black; font-size:18px; bold:true",

    },
    {
      name: "section_code",
      field: "section_code",
      label: "CODE",
      align: "center",
      sortable: true,
      headerStyle:
        "width: 500px; color:black; font-size:18px; bold: true; align:center",
    },
    {
      name: "section_name",
      field: "section_name",
      label: "SECTION",
      align: "center",
      sortable: true,
      headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
    },
  ],
    };
  },
  methods: {
    addTable() {
      this.showTable = true;
      this.tableData = [
        { column1: '', column2: 'Value 1' },
        // Add more data rows as needed
      ];
    },
    removeField(index) {
      this.fields.splice(index, 1);
    },
    watch: {
      fieldValue(newValue) {
        this.$emit('input', newValue);
      }
    },
    addField() {
      this.fields.push('');
    },
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
}

th,td {
  border: 1px solid #706f6fdd;
  background-color: #e5e7eb;
  text-align: center;
  padding: 8px;
}

th {
  background-color: #e5e7eb;
}
</style>


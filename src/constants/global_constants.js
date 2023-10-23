import { reactive } from "vue";

export const UserData = reactive({
    //Profile Tab Data
    image: "https://vamosmobile.app/sccdrrmo/flutter/images/647acfbcc8828.jpg",
    job_designation: "Web Developer",
    entity_no: "ZJNXJG5162",
    first_name: "Jerhod Kyan",
    middle_name: "Aburido",
    last_name: "Ricabo",
    gender: "Male",
    birthdate: "1998-09-10",
    email_address: "jerhodkyan@proton.me",
    phone: "09396571525",
    street: "Broce Street",
    barangay: "Barangay IV",
    city: "San Carlos City",
    province: "Negros Occidental",
    country: "Philippines",

    //Settings Tab Data
    department: "City Administrator's Office",
    division: "Information Technology and Computer Services Office",
    section: "N/A",
    username: "kyanix",
    password: "123123",

    //Module Tab Data

    scims_sys: "Super Admin",
    doctrack_sys: "Super Admin",
    jomis_sys: "Super Admin",
    resbakuna_sys: "Super Admin",
    let_sys: "Super Admin",
    hris_sys: "Super Admin",
    e_turismo_sys: "Super Admin",
    cert_clearance_sys: "Super Admin",
    administration_sys: "Super Admin",
    sp_sys: "Super Admin",
    gsd_sys: "Super Admin",
    senior_sys: "Super Admin",
    vamos_sys: "Super Admin",
    demos_sys: "Super Admin",
    barangay_sys: "Super Admin",
});

export const SelectOption = reactive({
    country: ["Philippines"],
    gender: ["Male", "Female"],
    province: [
        "Aklan",
        "Antique",
        "Capiz",
        "Iloilo",
        "Guimaras",
        "Negros Occidental",
    ],
    user_role: [
        "ADMIN",
        "BARANGAY ENCODERS",
        "CLERK",
        "CONTROLLER",
        "DATA ENCODERS",
        "DOCTOR",
        "ENCODER",
        "HELPDESK",
        "PROCESSORS",
        "SUPER ADMIN",
        "VALIDATORS",
        "VIEWER",
    ],
    user_permission: ["create", "read", "update", "delete"],

});

export const Module = reactive({
    //Module Columns module, title, option
    columns: [
        { name: "ID", field: "id", label: "ID", sortable: true, align: "left" },
        {
            name: "Name",
            field: "name",
            label: "Full Name",
            sortable: true,
            align: "left",
        },
        { name: "actions", label: "Action", align: "center" },
    ],
});

export const Barangay = reactive({
    //Module Columns module, title, option
    columns: [{
            name: "barangay_code",
            field: "barangay_code",
            label: "CODE",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true; align:center",
        },
        {
            name: "barangay_name",
            field: "barangay_name",
            label: "BARANGAY NAME",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
        },
        {
            name: "options",
            label: "OPTION",
            align: "center",
            headerStyle: "width: 500px; color:black; font-size:18px; bold:true",
        },
    ],
});

export const Department = reactive({
    //Module Columns module, title, option
    columns: [{
            name: "department_code",
            field: "department_code",
            label: "CODE",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true; align:center",
        },
        {
            name: "department_name",
            field: "department_name",
            label: "DEPARTMENT NAME",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
        },
        {
            name: "options",
            label: "OPTION",
            align: "center",
            headerStyle: "width: 500px; color:black; font-size:18px; bold:true",
        },
    ],
});

export const Division = reactive({
    //Module Columns module, title, option
    columns: [{
            name: "division_code",
            field: "division_code",
            label: "CODE",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true; align:center",
        },
        {
            name: "division_name",
            field: "division_name",
            label: "DIVISION",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
        },
        {
            name: "section_name",
            field: "section_name",
            label: "SECTION",
            align: "center",
            sortable: true,
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
        },
        {
            name: "options",
            label: "OPTION",
            align: "center",
            headerStyle: "width: 500px; color:black; font-size:18px; bold:true",
        },
    ],
});

export const Section = reactive({
    //Module Columns module, title, option
    columns: [{
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
            headerStyle: "width: 500px; color:black; font-size:18px; bold: true; align:center",
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

});


export const DocMasterlist = reactive({
  //Module Columns module, title, option
  columns: [
    {
      name: "document_code",
      field: "document_code",
      label: "CODE",
      align: "center",
      sortable: true,
      headerStyle:
        "width: 500px; color:black; font-size:18px; bold: true; align:center",
    },
    {
      name: "document_name",
      field: "document_name",
      label: "TYPE OF DOCUMENT",
      align: "center",
      sortable: true,
      headerStyle: "width: 500px; color:black; font-size:18px; bold: true",
    },
    {
      name: "options",
      label: "OPTION",
      align: "center",
      headerStyle: "width: 500px; color:black; font-size:18px; bold:true",
    },
  ],
});


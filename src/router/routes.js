const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/whoweare",
        component: () => import("pages/Landing/WhoWeAre.vue"),
      },
      // {
      //     path: "/vamos",
      //     component: () =>
      //         import ("pages/Landing/vamosPage.vue"),
      // },
    ],
  },

  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/changepwd",
    component: () => import("layouts/ChangePwdLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/changepwdPage.vue"),
      },
    ],
  },

  {
    path: "/dashboard",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/dashboardPage.vue"),
      },

      {
        path: "/administration",
        component: () => import("pages/Admin/administrationPage.vue"),
      },
      {
        path: "/manageAcct",
        component: () => import("pages/Admin/manageAcctPage.vue"),
      },
      {
        path: "/module",
        component: () => import("pages/Admin/modulePage.vue"),
      },
      {
        path: "/endUser",
        component: () => import("pages/Admin/endUserPage.vue"),
      },
      {
        path: "/endUserRegister",
        component: () => import("pages/Admin/endUserRegisterPage.vue"),
      },
      {
        path: "/userLogs",
        component: () => import("pages/Admin/userLogsPage.vue"),
      },
      {
        path: "/masterList",
        component: () => import("pages/Admin/masterListPage.vue"),
      },
      {
        path: "/brgyMasterlist",
        component: () => import("pages/Admin/brgyMasterlistPage.vue"),
      },
      {
        path: "/deptMasterlist",
        component: () => import("pages/Admin/deptMasterlistPage.vue"),
      },
      {
        path: "/docMasterlist",
        component: () => import("pages/Admin/docMasterlistPage.vue"),
      },
      // {
      //   path: "/doctrack",
      //   component: () => import("pages/Admin/doctrackPage.vue"),
      // },
      {
        path: "/eTurismo",
        component: () => import("pages/Admin/eTurismoPage.vue"),
      },
      {
        path: "/gsd",
        component: () => import("pages/Admin/gsdPage.vue"),
      },
      {
        path: "/hris",
        component: () => import("pages/Admin/hrisPage.vue"),
      },
      {
        path: "/let",
        component: () => import("pages/Admin/letPage.vue"),
      },
      {
        path: "/seniorcitizen",
        component: () => import("pages/Admin/seniorCitizenPage.vue"),
      },
      {
        path: "/newDivision",
        component: () => import("pages/Admin/newDivisionPage.vue"),
      },
    ],
  },

  {
    path: "/vamos",
    component: () => import("layouts/VamosLayout.vue"),
    children: [
      {
        path: " ",
        component: () => import("pages/Vamos/homePage.vue"),
      },
      {
        path: "/analytics",
        component: () => import("pages/Vamos/analyticsPage.vue"),
      },
      {
        path: "/individual",
        component: () => import("pages/Vamos/individualPage.vue"),
      },
      {
        path: "/juridical",
        component: () => import("pages/Vamos/juridicalPage.vue"),
      },
      {
        path: "/transportation",
        component: () => import("pages/Vamos/transportationPage.vue"),
      },
      {
        path: "/about",
        component: () => import("pages/Vamos/aboutPage.vue"),
      },
      {
        path: "/report_trace",
        component: () => import("pages/Vamos/tracehistoryPage.vue"),
      },
      {
        path: "/report_vamosid",
        component: () => import("pages/Vamos/vamosidPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue "),
  },
];

export default routes;

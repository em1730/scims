const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
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
        path: "/module",
        component: () => import("pages/Admin/modulePage.vue"),
      },
      {
        path: "/endUser",
        component: () => import("pages/Admin/endUserPage.vue"),
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
        path: "/masterList",
        component: () => import("pages/Admin/masterListPage.vue"),
      },
      {
        path: "/manageAcct",
        component: () => import("pages/Admin/ManageAcctPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/ChangePwdLayout.vue"),
    children: [
      {
        path: "/changePwd",
        component: () => import("pages/Admin/changepwdPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

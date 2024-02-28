const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/Admin/dashboardPage.vue"),
            },

            {
                path: "/administration",
                component: () =>
                    import ("pages/Admin/administrationPage.vue"),
            },
            {
                path: "/manageAcct",
                component: () =>
                    import ("pages/Admin/manageAcctPage.vue"),
            },
            {
                path: "/module",
                component: () =>
                    import ("pages/Admin/modulePage.vue"),
            },
            {
                path: "/endUser",
                component: () =>
                    import ("pages/Admin/endUserPage.vue"),
            },
            {
                path: "/endUserRegister",
                component: () =>
                    import ("pages/Admin/endUserRegisterPage.vue"),
            },
            {
                path: "/userLogs",
                component: () =>
                    import ("pages/Admin/userLogsPage.vue"),
            },
            {
                path: "/masterList",
                component: () =>
                    import ("pages/Admin/masterListPage.vue"),
            },
            {
                path: "/brgyMasterlist",
                component: () =>
                    import ("pages/Admin/brgyMasterlistPage.vue"),
            },
            {
                path: "/deptMasterlist",
                component: () =>
                    import ("pages/Admin/deptMasterlistPage.vue"),
            },
            {
                path: "/docMasterlist",
                component: () =>
                    import ("pages/Admin/docMasterlistPage.vue"),
            },
            {
                path: "/doctrack",
                component: () =>
                    import ("pages/Admin/doctrackPage.vue"),
            },
            {
                path: "/eTurismo",
                component: () =>
                    import ("pages/Admin/eTurismoPage.vue"),
            },
            {
                path: "/gsd",
                component: () =>
                    import ("pages/Admin/gsdPage.vue"),
            },
            {
                path: "/hris",
                component: () =>
                    import ("pages/Admin/hrisPage.vue"),
            },
            {
                path: "/let",
                component: () =>
                    import ("pages/Admin/letPage.vue"),
            },
            {
                path: "/seniorcitizen",
                component: () =>
                    import ("pages/Admin/seniorCitizenPage.vue"),
            },
            {
                path: "/newDivision",
                component: () =>
                    import ("pages/Admin/newDivisionPage.vue"),
            },
        ],
    },

    {
        path: "/",
        component: () =>
            import ("layouts/LoginLayout.vue"),
        children: [{
            path: "/login",
            component: () =>
                import ("pages/LoginPage.vue"),
        }, ],
    },

    {
        path: "/",
        component: () =>
            import ("layouts/ChangePwdLayout.vue"),
        children: [{
            path: "/changePwd",
            component: () =>
                import ("pages/Admin/changepwdPage.vue"),
        }, ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/ErrorNotFound.vue"),
    },
];

export default routes;

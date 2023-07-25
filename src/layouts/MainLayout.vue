<template>
  <q-layout view="hHh lpR fFf" class="select-none">
    <q-header
      class="bg-gradient-to-tl from-gray-950 to-slate-700 text-white drop-shadow-2xl"
    >
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2">
          <q-avatar size="w-6 h-auto">
            <img
              src="https://vamosmobile.app/scims-v2/dashboard/images/scc-logo.ico"
            />
          </q-avatar>
          <!-- <q-avatar>
            <img src="../assets/scc-logo.ico" />
          </q-avatar> -->
          San Carlos City Integrated Management System
        </q-toolbar-title>

        <q-btn flat label="Button">
          <q-menu anchor="bottom middle" self="top left">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <div
      style="background-image: url(src/assets/bg.png); background-size: cover"
    >
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>

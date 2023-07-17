<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2">
          <q-avatar>
            <img src="../assets/scc-logo.ico">
          </q-avatar>
          San Carlos City Integrated Management System
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div style="background-image: url(src/assets/bg.png); background-size: cover;">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>

</script>

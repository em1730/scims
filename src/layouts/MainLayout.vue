<template>
  <transition
    appear
    enter-active-class="animated animate__fadeIn"
    leave-active-class="animated animate__fadeOut"
  >
    <q-layout view="hHh lpR fFf">
      <q-toolbar class="bg-green-5 text-white shadow-2">
        <!-- <q-btn flat label=""> <q-icon size="30px" name="home" /> </q-btn> -->
        <img
          class="w-36 md:w-32 lg:w-32 sm:w-16 q-ml-xl"
          src="../assets/logowhitenew.webp"
        />
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" align="center" shrink stretch>
          <q-tab name="tab1" label="Tab 1" />
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>

      <q-page-container>
        <div class="text-center"></div>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script setup></script>

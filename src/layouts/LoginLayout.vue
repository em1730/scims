<template>
  <q-layout view="hHh lpR fFf" class="select-none">
    <q-page-container>
      <!-- <transition
        appear
        enter-active-class="animated animate__fadeIn"
        leave-active-class="animated animate__fadeIn"
      >
        <div
          class="overflow-y-auto transition-all duration-300 bg-cover bg-center"
          style="background-image: url(src/assets/change_pwd.webp)"
        ></div>
      </transition> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

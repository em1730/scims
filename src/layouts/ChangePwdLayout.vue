<template>
  <q-layout view="hHh lpR fFf" class="select-none">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <!-- Wrapping only one DOM element, defined by QBtn -->
        <div
          class="overflow-y-auto transition-all duration-300 bg-cover bg-center"
          style="background-image: url(src/assets/change_pwd.webp)"
        >
          <router-view />
        </div>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

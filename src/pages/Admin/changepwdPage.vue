<template>
  <transition
    appear
    enter-active-class="animated animate__fadeIn"
    leave-active-class="animated animate__fadeOut"
  >
    <q-page padding>
      <div class="pt-20 grid place-items-center">
        <div class="pb-5">
          <img
            class="h-48 w-48 rounded-full border drop-shadow-2xl shadow-2xl"
            src="../../assets/scc-logo.ico"
            alt="Profile Picture"
          />
        </div>
        <div class="pb-10">
          <p class="text-center text-3xl">
            San Carlos Integrated Management System
          </p>
        </div>

        <div
          class="flex flex-wrap vertical:flex-col justify-center items-center pb-1 transition-all"
        >
          <input
            required
            id="changePassword"
            type="password"
            class="duration-300 shadow-xl rounded-full focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block appearance-none border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-lime-700 focus:outline-none focus:transition-shadow focus:ring-1 focus:ring-lime-700"
            placeholder="Input New Password"
            aria-label="Input New Password"
            aria-describedby="password-addon"
          />
        </div>
        <label
          for="floating_company"
          class="text-red-600 peer-focus:font-medium text-xs italic"
          >Note: This will be your password from now on.</label
        >
        <router-link to="/dashboard">
          <button
            name="submitPassword"
            id="submitPassword"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="duration-300 items-center justify-center flex bg-gray-800 px-2 py-2 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-105 hover:shadow-soft-xs active:opacity-85"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2 fill-current"
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
            Change Password
          </button>
        </router-link>
      </div>
    </q-page>
  </transition>
</template>

<script setup>
import JomisBtn from "components/button/JomisBtn.vue";
import DoctrackBtn from "components/button/DoctrackBtn.vue";
import SPBtn from "components/button/SPBtn.vue";
import AdminBtn from "components/button/AdminBtn.vue";
import CertClearanceBtn from "components/button/CertClearanceBtn.vue";
import SeniorBtn from "components/button/SeniorBtn.vue";
import GsdBtn from "components/button/GsdBtn.vue";
import LetBtn from "components/button/LetBtn.vue";
import ETurismoBtn from "components/button/ETurismoBtn.vue";
import HrisBtn from "components/button/HrisBtn.vue";
</script>

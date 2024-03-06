<template>
  <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header elevated class="q text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title -->
        </q-toolbar-title>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
        <!-- <q-input  v-bind="UserData.first_name"/> -->
        <q-btn-dropdown flat split label="" color="white" rounded>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="draw"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-list dense separator class="q-pa-sm">
        <q-item class="system">
          <img
            class="w-36 md:w-32 lg:w-32 sm:w-16 q-ml-xl"
            src="../assets/logowhitenew.webp"
          />
        </q-item>

        <q-separator inset dark />

        <q-item to="/dashboard" exact>
          <q-item-section class="q-my-sm" avatar>
            <q-icon size="30px" name="home" />
          </q-item-section>
          <q-item-section class="text-h6 text-white text-bold">
            Main Menu</q-item-section
          >
        </q-item>

        <q-separator inset dark />

        <q-item to="/home" exact>
          <q-item-section class="q-my-sm" avatar>
            <q-icon size="30px" name="dashboard" />
          </q-item-section>
          <q-item-section class="text-h6 text-white text-bold">
            Home</q-item-section
          >
        </q-item>

        <q-separator inset dark />

        <q-item to="/analytics" exact>
          <q-item-section class="q-my-sm" avatar>
            <q-icon size="30px" name="bar_chart" />
          </q-item-section>
          <q-item-section class="text-h6 text-white text-bold">
            Analytics</q-item-section
          >
        </q-item>

        <q-separator inset dark />

        <q-expansion-item
          class="text-h6 text-white text-bold"
          icon="account_box"
          label="Entities"
        >
          <q-separator inset dark />

          <q-list class="q-ml-lg">
            <q-item to="/individual" exact>
              <q-item-section class="q-my-xs" avatar>
                <q-icon size="30px" name="person" />
              </q-item-section>
              <q-item-section class="text-h6 text-white text-bold">
                Individual</q-item-section
              >
            </q-item>

            <q-separator inset dark />

            <q-item to="/juridical" exact>
              <q-item-section class="q-my-xs" avatar>
                <q-icon size="30px" name="apartment" />
              </q-item-section>
              <q-item-section class="text-h6 text-white text-bold">
                Juridical</q-item-section
              >
            </q-item>

            <q-separator inset dark />

            <q-item to="/transportation" exact>
              <q-item-section class="q-my-xs" avatar>
                <q-icon size="30px" name="pedal_bike" />
              </q-item-section>
              <q-item-section class="text-h6 text-white text-bold">
                Transportation</q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-separator inset dark />

        <q-expansion-item
          class="text-h6 text-white text-bold"
          icon="print"
          label="Reports"
        >
          <q-separator inset dark />

          <q-list class="q-ml-lg">
            <q-item to="/report_vamosid" exact>
              <q-item-section class="q-my-xs" avatar>
                <q-icon size="30px" name="remember_me" />
              </q-item-section>
              <q-item-section class="text-h6 text-white text-bold">
                Vamos ID</q-item-section
              >
            </q-item>

            <q-separator inset dark />

            <q-item to="/report_trace" exact>
              <q-item-section class="q-my-xs" avatar>
                <q-icon size="30px" name="content_paste_search" />
              </q-item-section>
              <q-item-section class="text-h6 text-white text-bold">
                Trace History</q-item-section
              >
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-separator inset dark />

        <q-item to="/about" exact>
          <q-item-section class="q-my-sm" avatar>
            <q-icon size="30px" name="info" />
          </q-item-section>
          <q-item-section class="text-h6 text-white text-bold">
            About</q-item-section
          >
        </q-item>

        <q-separator inset dark />
      </q-list>
    </q-drawer>

    <footer-layout> </footer-layout>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import FooterLayout from "./FooterLayout.vue";
import { UserData } from "../constants/global_constants";

console.log(UserData.first_name);

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  components: { FooterLayout },
};

// function toggleDarkMode() {
//   $q.dark.toggle();
// }
</script>

<style lang="scss">
.q,
.draw {
  background-color: $green-6;
}
.q-expansion-item__toggle-icon {
  color: white;
  size: 30px;
}

.q-icon {
  color: $green-10;
}
</style>

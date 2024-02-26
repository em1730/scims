<template>
  <div>
    <div class="text-caption">SELECT INDIVIDUAL</div>
    <q-input @update:model-value="searchVamosUser" dense v-model="selectIndividual" outlined style="width:127px"
      debounce="1500" :loading="isLoading">
      <div v-if="selectIndividual" class="custom-list z-top">
        <q-card>
          <q-list separator>
            <q-item v-if="!vamosUser?.length">
              No record found.
            </q-item>
            <template v-else>
              <q-item @click="handleSelect(user)" v-for="user in vamosUser" :key="user.id" clickable>
                <q-item-section avatar>
                  <q-icon>
                    <img :src="`https://vamosmobile.app/sccdrrmo/flutter/images/${user.photo}`">
                  </q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ user.fullname }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-card>
      </div>
    </q-input>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVamosDataStore } from 'stores/vamos-data'

const isLoading = ref(false)
const emits = defineEmits(['onSelect'])

const vamosData = useVamosDataStore();
const vamosUser = computed(() => vamosData.vamosUserData)
const searchVamosUser = async (keyword) => {
  isLoading.value = true
  const res = await vamosData.findVamosUserData(keyword)
  isLoading.value = false
}

const selectIndividual = ref('')

const handleSelect = (user) => {
  emits('onSelect', user)
  selectIndividual.value = ""
}
</script>

<style lang="scss" >
.custom-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: 400px;
  width: 500px;
  overflow-y: auto;

}

.individual-select {
  .q-field--outlined .q-field__control {
    border-radius: 12px;

  }
}
</style>

<script setup lang="ts">
import DashboardEntry from '../components/DashboardEntry.vue'
import { listEntries } from '@/stores/api';
const store = listEntries();

const entries_call = store.getEntries("0b3767fe-b227-47a1-ae07-2c4e85275b87");

// console.log("Entries", typeof(store.listEntries));

</script>

<template>
  <main class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome, Chert</p>
    <div class="entries">
        <DashboardEntry v-for="(value, key, index) in store.listEntries" :key="index" :emotion="`${value['emotions'][0]}`" :entry_text="`${value['body']}`"></DashboardEntry>
    </div>
  </main>


</template>

<style scoped>
.entries {
  overflow-x: hidden;
  width:100%;
}
</style>
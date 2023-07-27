<script setup>
import DashboardEntry from '../components/DashboardEntry.vue'
import DeletePopup from '../components/DeletePopup.vue'
import { listEntries } from '../stores/listEntries';
const store = listEntries();
const entries_call = store.getEntries("0b3767fe-b227-47a1-ae07-2c4e85275b87");

</script>

<script>
import { deleteEntries } from '../stores/deleteEntries';
export default {
  data: () => {
    return {
      showDelete: false,
      showEdit: false,
      deleteEntries: deleteEntries(),
      user_id: "0b3767fe-b227-47a1-ae07-2c4e85275b87",
      entry_id: ""
    }
  },
  methods: {
    toggleDeletePopup(entry_id){
      this.showDelete = !this.showDelete
      this.entry_id = entry_id
    },
    deleteEntry(){
      this.deleteEntries.deleteEntry(this.user_id,this.entry_id);
      this.toggleDeletePopup();
    }
  }
}
</script>

<template>
  <main class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome, Chert</p>
    <div class="entries">
        <DashboardEntry v-for="(value, key, index) in store.listEntries" :key="index" 
        v-on:show-delete-popup="toggleDeletePopup(key)" :emotion="`${value['emotions'][0]}`" :entry_text="`${value['body']}`" :entry_id="`${key}`"></DashboardEntry>
        <DeletePopup v-on:show-delete-popup="deleteEntry()" v-if="showDelete"></DeletePopup>
    </div>
  </main>


</template>

<style scoped>
.entries {
  overflow-x: hidden;
  width:100%;
}
</style>
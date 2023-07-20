<template>
    <div class="app">
      <Sidebar />

      <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">

:root {
  --sidebar-width: 300px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  cursor:pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
    display:flex;

    main {
      flex: 1 1 0;
      padding: 2rem;

      @media (max-width: 768px) {
          padding-left: 6rem;
      };
    };
}
</style>

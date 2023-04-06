<script>
import { RouterView } from 'vue-router'

import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
}
</script>

<template>
  <div class="flex">
    <div class="w-1/5 h-screen fixed">
      <Sidebar />
    </div>
    <div class="w-4/5 ml-auto mr-24">
      <RouterView />
    </div>
  </div>
</template>
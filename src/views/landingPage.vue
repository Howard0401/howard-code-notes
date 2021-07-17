<template>
  <div class="grid grid-cols-12 h-full">
    
    <div class="col-span-2 h-screen  bg-green-200">
      <Sidebar/>
    </div>
    <div class="col-span-10 h-screen  bg-green-400">
      <div class="col-span-12 h-20 bg-gray-300"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
export default defineComponent({
  components: {
    Sidebar
  },
  setup() {

    return  {
    }
  },
})
</script>

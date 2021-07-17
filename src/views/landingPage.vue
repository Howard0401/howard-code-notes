<template>
  <div class="grid grid-cols-12 h-full">
    
    <div class="col-span-2 h-screen bg-green-400">
      <Sidebar/>
    </div>
    <div class="col-span-10 h-screen  bg-green-400"
    >
      <div class="col-span-12 h-10 bg-gray-300 transition duration-100 transform"
          :class="[sidebar.sidebarState.isShink ? ' -ml-80 -lg:translate-x-80 lg:ease-in' : '-ml-52 -lg:translate-x-36 lg:ease-out']"
      ></div>
      <div class="col-span-3 w-80">
        <v-md-editor v-model="ttt" mode="preview" height="400px" width="400px" class=""></v-md-editor>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { sidebar } from '@/hooks/useSidebarState'
// import Markdown from 'vue3-markdown-it';
import ttt from '@/assets/ttt.md'
export default defineComponent({
  components: {
    Sidebar,
    // Markdown
  },
  setup() {
    return  {
      sidebar,
      text: '',
      ttt
    }
  },
})
</script>

<template>
  <div class="col-span-12 items-center transition duration-400 transform h-customContent lg:mb-12"
      :class="[sidebar.sidebarState.isShink ? 'lg:-ml-40 lg:-mr-36 lg:-translate-x-32 lg:ease-in' : 'lg:-mr-32 lg:-translate-x-32 lg:ease-out']"
  >
    <v-md-editor :include-level="[1, 2, 3, 4]" v-model="markdown" height="50rem"  class="text-left" ></v-md-editor>
    <button @click="onClickSwithEditOrPreview">ssss</button>
    
  </div> 
  <div class="col-span-12 ml-80">
    <Disqus />
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { sidebar } from '@/hooks/useSidebarState'
// import Markdown from 'vue3-markdown-it';
import markdown from '@/assets/ttt.md'
export default defineComponent({
  components: {
    // Sidebar,
    // Markdown
  },
  inheritAttrs: false,
  setup(props) {
    const swithcEdit = ref(false)
    const onClickSwithEditOrPreview = () => {
      swithcEdit.value = !swithcEdit.value
    }
    return  {
      sidebar,
      text: '',
      markdown,
      swithcEdit,
      onClickSwithEditOrPreview,
    }
  },
})
</script>

<style scoped>

</style>
<template>
<div class="col-span-12 items-center transition duration-400 transform h-customContent lg:mb-12"
      :class="[sidebar.sidebarState.isShink ? 'lg:-ml-40 lg:-mr-36 lg:-translate-x-32 lg:ease-in' : 'lg:-mr-32 lg:-translate-x-32 lg:ease-out']"
  >
      <div class="mt-10 h-customContent">
            <div
              class="flex items-center duration-200 mt-4 py-2 px-6 "
              :class="[]"
              @click="onClickBackend()"
            >
              <span  class="mx-4">JS 之於 Dynamo DB</span>
            </div>
      </div>
      
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import { sidebar } from '@/hooks/useSidebarState'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'backend',
  components: {
  },
  setup() {
    const router = useRouter()
    const onClickBackend = () => {
      router.push('/landingPage')
    }
    return {
      sidebar,
      onClickBackend
    }
  }
});
</script>

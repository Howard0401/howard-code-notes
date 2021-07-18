<template>
  <div class="grid grid-cols-12 h-full">
    <div class="stcky top-0 anyDevice:col-span-2 h-full bg-green-400">
      <Sidebar/>
    </div>
    <div class="col-span-12 anyDevice:col-span-10 h-full bg-green-400"
    >
      <div class="grid grid-cols-12"> 
        <div class="col-span-12 h-6 lg:h-10 bg-gray-300 transition duration-300 transform"
            :class="[sidebar.sidebarState.isShink ? ' -ml-80 lg:translate-x-30 lg:ease-in' : '-ml-52 lg:-translate-x-0 lg:ease-out']"
        >
          <div class="grid grid-cols-12"> 
            <div class="col-span-10"></div>
            <div class="col-span-2">
              <div class="ml-90 items-end lg:mt-2">
                123dfsfs
              </div>
             </div>  
          </div>
        </div>

      </div>

      <router-view :is="layout"/>
      <Disqus />
    </div>

  </div>

</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Sidebar from '@/components/Sidebar.vue'
import { sidebar } from '@/hooks/useSidebarState'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar
  },
  // components,
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(() => 
       {
        console.log("currentRoute.value", currentRoute.value)
        return `${currentRoute.value.meta.layout}`// || defaultLayout}-layout`
      }
    );

    return {
      sidebar,
      layout,
    };
  },
});
</script>

<style>
 html,body{
height:100%;
width:100%;
border:hidden;
overflow:hidden;
}

/* https://www.jianshu.com/p/005cdecaeaaa*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding:0px;
  margin:0px;
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  border:hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";


// const defaultLayout = "default";

// const components = {
//   ModalDialog,
// }

export default defineComponent({
  name: 'App',
  // components,
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout}`// || defaultLayout}-layout`
    );

    return {
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
  text-align: center;
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

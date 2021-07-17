import { reactive } from 'vue'



interface SidebarState {
  isShink: boolean
}
interface SidebarParam {
  sidebarState: SidebarState
}

class SidebarStateClass {
  sidebarState: SidebarState
  constructor(data: SidebarParam) {
    this.sidebarState = data.sidebarState
  }
  onClickShinkSidebar = () => {
    this.sidebarState.isShink = !this.sidebarState.isShink
  }
}

const sidebarState: SidebarState = reactive({
  isShink: false,
})

const sidebarParam = {
  sidebarState: sidebarState
}

export const sidebar = new SidebarStateClass(sidebarParam)

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<!--<div class="my-8">
 <div class="pb-6 md:pb-0 flex flex-col"><label for="name" class="input-label text-base mb-2">Your Username</label><div><label class="input-field inline-flex items-baseline border-none shadow-md bg-white p-4"><span class="flex-none text-dusty-blue-darker select-none leading-none">domain.com/</span><div class="flex-1 leading-none"><input id="handle" type="text" class="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker" name="handle" placeholder="jane"></div></label></div></div></div>-->
    <!-- <div v-if="loginState.IsUILoading"  wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black opacity-75 flex flex-col items-center justify-center">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
      <p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
    </div> -->
    <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      v-model="centerDialogVisible"
      width="30%"
      destroy-on-close
      center>
      <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>
      <strong>额外的内容</strong>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </template>

    </el-dialog> -->

   <div class="">
      <div  class="mt-100 bg-gray-200 rounded py-20  px-0 h-screen flex flex-col items-center justify-items-center ">
        <div>
            <h3 class="text-gray-700 text-3xl font-medium">Modal</h3>
            <button
              @click="open = true"
              class="mt-3 px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
            >
              Open Modal
            </button>

            <div
              :class="`modal ${
                !open && 'opacity-0 pointer-events-none'
              } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
            >
              <div
                @click="open = false"
                class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
              ></div>

              <div
                class="modal-container bg-white w-customModal h-80 -mt-80  mx-auto rounded shadow-lg z-50 overflow-y-auto"
              >
                <div
                  class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
                >
                  <!-- <svg
                    class="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >

                  </svg> -->
                  <span class="text-sm">(Esc)</span>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Modal Title</p>
                    <div class="modal-close cursor-pointer z-50" @click="open = false">
                      <svg
                        class="fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        />
                      </svg>
                    </div>
                  </div>

                  <!--Body-->
                  <p class="w-full bg-black">Modal content.</p>

                  <!--Footer-->
                  <div class="flex justify-end pt-2">
                    <button
                      @click="open = false"
                      class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                    >
                      Close
                    </button>
                    <button
                      @click="open = false"
                      class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                    >
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        
        
        
        <!-- User profile image -->
        <img class="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
        <form method="post" class="mt-8 mb-4">
          <div class="mb-4">
            <label for="userEmail" class="sr-only">Email address</label>
            <input  class="border-solid border border-gray-400 rounded px-2 py-3"  id="userEmail" placeholder="Email" required />
            <!-- v-model="loginState.Account" -->
          </div>
          <div class="mb-5">
            <label for="userEmail" class="sr-only">PinCode</label>
            <input  class="border-solid border border-gray-400 rounded px-2 py-3"  id="userPass" placeholder="PinCode" required />
          </div>
          <!-- v-model="loginState.Password" -->
          <button @click="onClickLoginBtn" class="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
          <div class="my-4">
            <a href="#" class="self-start justifyt-">Forgot the password?</a>
          </div>
        </form>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, watch, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
// import { ExclamationIcon } from '@heroicons/vue/outline

// Vuex
// import { useStore } from '@/store'

// import { LoginState } from '@/model/Login/Login'
// import { AccountInfo } from '@/model/Login/AccountInfo'

export default defineComponent({
  components: {
    // Dialog,
    // DialogOverlay,
    // DialogTitle,
    // TransitionChild,
    // TransitionRoot,
    // ExclamationIcon,
  },
  setup() {
    // const store = useStore()
    const open = ref(false);
    const route = useRoute() // for route params
    const router = useRouter()
    // const loginState: LoginState = reactive({
    //   Account: '',
    //   Password: '',
    //   IsValidUI: true,
    //   IsUILoading: false,
    // })

    // const onClickLoginBtn = async(e: { preventDefault: () => void }) => {
    //   e.preventDefault()
    //   if(loginState.IsUILoading === true) {
    //     return  
    //   }
    //   localStorage.removeItem('LOGIN_EMAIL')
    //   localStorage.setItem('LOGIN_EMAIL', loginState.Account)
    //   loginState.IsUILoading = true
    //   loginState.IsValidUI = true
    //   // console.log("onClickLoginBtn loginState.Password",loginState.Password)
    //   await store.dispatch('LOGIN_RESPONSE_DATA', {
    //     Account: loginState.Account,
    //     Password: loginState.Password,
    //   })
    //   // console.log('store.state.userloginData',store.state.userloginData)
    //   const loginParam: AccountInfo = JSON.parse(JSON.stringify(store.state.userloginData))
    //   console.log('loginParam',loginParam)
    //   if (loginParam.IsValid === true && loginParam.LoginId !== '' && loginParam.Type === 'r2d2') {
    //       loginState.IsUILoading = false
    //       router.push({ path: '/table' })
    //   } else {
    //       loginState.IsUILoading = false
    //       loginState.IsValidUI = false
    //   }
    // }

    // watch(loginState,(oldVal, newVal) => {
    //   console.log('old loginState',oldVal)
    //   console.log('new loginState', newVal)
    // })

    // const open = ref(true)

    return {
      open,
      // loginState,
      // onClickLoginBtn,
      // open,
      // centerDialogVisible: ref(false),
    }
  },
})
</script>
<style scoped>
.loader {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.modal {
  transition: opacity 0.25s ease;
}
</style>


<script>
import { RouterLink } from 'vue-router'
import { mapState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    computed: {
        ...mapState(useAppStore, ['isLogin']),

        memberEmail() {
            return localStorage.email
        }
    }
}
</script>

<template>
    <nav id="sidenav-main"
        class="absolute top-0 left-0 z-[1036] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-neutral-800 xl:data-[te-sidenav-hidden='false']:translate-x-0 sidenav-primary ps--active-y group/ps [overflow-anchor:none] [overflow-style:none] touch-none"
        data-te-sidenav-init="" data-te-sidenav-position="absolute" data-te-sidenav-mode-breakpoint-over="0"
        data-te-sidenav-mode-breakpoint-side="xl" data-te-sidenav-hidden="false" data-te-sidenav-mode="side"
        data-te-sidenav-content="#page-content" data-te-sidenav-accordion="true"
        style="width: 240px; height: 100vh; position: absolute; transition: all 0.3s linear 0s; transform: translateX(0%);">
        <RouterLink :to="{ name: 'home' }"
            class="mb-3 flex items-center justify-center rounded-md py-6 pr-3 text-lg font-medium outline-none dark:text-neutral-100"
            aria-current="page">
            <picture>
                <img src="https://cdn-icons-png.flaticon.com/512/1505/1505516.png" class="mr-2 h-[20px]" alt="logo">
            </picture>
            Gudang Tools
        </RouterLink>
        <RouterLink :to="{ name: 'login' }" v-if="!isLogin"
            class="bg-primary text-white text-xs uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button">
            Login
        </RouterLink>
        <p class="text-sm text-left ml-3 mb-2" v-if="isLogin">Welcome, {{ memberEmail }}</p>
        <RouterLink :to="{ name: 'logout' }" v-if="isLogin"
            class="bg-primary text-white text-xs uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button">
            Logout
        </RouterLink>
        <ul class="relative m-0 list-none px-[0.2rem] pb-80" data-te-sidenav-menu-ref="">
            <li class="relative">
                <a class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                    data-te-sidenav-link-ref="" data-te-collapse-init="" href="#sidenav-collapse-959032-0-0" role="button"
                    data-te-collapse-collapsed="" aria-expanded="false" tabindex="0">
                    <span
                        class="mr-4 [&amp;>svg]:h-3.5 [&amp;>svg]:w-3.5 [&amp;>svg]:text-gray-400 dark:[&amp;>svg]:text-gray-300">
                        <i class="fa-solid fa-shield-halved"></i>
                    </span>
                    <span>Security</span>
                    <span
                        class=" absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-gray-600 dark:[&amp;>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </span>
                </a>

                <ul class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                    data-te-sidenav-collapse-ref="" id="sidenav-collapse-959032-0-0" data-te-collapse-item="">

                    <li class="relative">
                        <RouterLink :to="{ name: 'password-checker' }"
                            class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                            data-te-sidenav-link-ref="" tabindex="0">
                            Check Password Leak</RouterLink>
                    </li>
                </ul>
            </li>

            <li class="relative">
                <a class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                    data-te-sidenav-link-ref="" data-te-collapse-init="" href="#sidenav-collapse-959032-0-1" role="button"
                    data-te-collapse-collapsed="" aria-expanded="false" tabindex="0">
                    <span
                        class="mr-4 [&amp;>svg]:h-3.5 [&amp;>svg]:w-3.5 [&amp;>svg]:text-gray-400 dark:[&amp;>svg]:text-gray-300">
                        <i class="fa-solid fa-briefcase"></i>
                    </span>
                    <span>Business</span>
                    <span
                        class=" absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&amp;>svg]:h-3 [&amp;>svg]:w-3 [&amp;>svg]:text-gray-600 dark:[&amp;>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </span>
                </a>
                <ul class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                    data-te-sidenav-collapse-ref="" id="sidenav-collapse-959032-0-1" data-te-collapse-item="">

                    <li>
                        <RouterLink :to="{ name: 'idx-assets-tracker' }"
                            class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                            data-te-sidenav-link-ref="" tabindex="0">
                            Track IDX Assets
                        </RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
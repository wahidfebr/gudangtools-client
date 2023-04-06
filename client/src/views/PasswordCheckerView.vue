<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    data() {
        return {
            form: {
                password: ""
            },
            showPassword: false,
        }
    },
    methods: {
        ...mapActions(useAppStore, ['passwordCheckerHandler']),

        toggleShowPassword() {
            this.showPassword = !this.showPassword
        }
    },
    computed: {
        ...mapState(useAppStore, ['passwordCheckerResult']),

        resultStyle() {
            switch (this.passwordCheckerResult.status) {
                case "safe":
                    return "text-green-600"
                case "danger":
                    return "text-red-600"
                default:
                    return ""
            }
        },

        inputType() {
            return this.showPassword ? "text" : "password"
        },

    }
}
</script>

<template>
    <h1 class="mb-0 text-3xl text-center font-semibold leading-normal">Password leak checker</h1>
    <h2 class="mb-5 text-xl text-center font-semibold leading-normal">Is your password still safe? check right now!</h2>
    <h4 class="mb-5 text-lg font-semibold leading-normal">Evaluate your password:</h4>
    <form @submit.prevent="passwordCheckerHandler(form)" class="mb-5">
        <div class="relative mb-6" data-te-input-wrapper-init="">
            <input :type="inputType" v-model="form.password"
                class="peer block min-h-[50px] w-full text-lg font-bold rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="password" placeholder="Type your password">
            <button @click="toggleShowPassword"
                class="absolute top-0 right-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-gray-500"
                type="button">
                <i class="fas fa-eye"></i>
            </button>
            <label for="password"
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                style="margin-left: 0px;">Type your password
            </label>
            <div class="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none"
                data-te-input-notch-ref="">
                <div class="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                    data-te-input-notch-leading-ref="" style="width: 9px;"></div>
                <div class="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                    data-te-input-notch-middle-ref="" style="width: 64.8px;"></div>
                <div class="pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
                    data-te-input-notch-trailing-ref=""></div>
            </div>
        </div>
        <button type="submit"
            class="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init="" data-te-ripple-color="light">
            Check
        </button>
    </form>
    <div class="mb-24">
        <h5 class="text-base font-semibold leading-normal">Password status: <span :class="resultStyle">{{
            passwordCheckerResult.message
        }}</span>
        </h5>
    </div>
    <div>
        <h4 class="mb-5 text-lg font-semibold leading-normal">Is it safe to type my real password here?</h4>
        <p class="text-justify" style="width: 500px;">Yes. This tool implements a k-Anonymity model that allows a password
            to be searched for by partial
            hash. This tools only allows the first 5 characters of a SHA-1 to be passed to
            the API. The result will be generated on the client side. No password plain or hashed sended to the API.</p>
    </div>
</template>
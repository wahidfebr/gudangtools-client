<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useAppStore } from '../stores/app'

export default {
    methods: {
        ...mapActions(useAppStore, ['fetchStocks']),
    },
    computed: {
        ...mapState(useAppStore, ['stocksData'])
    },
    created() {
    }
}
</script>

<template>
    <h1 class="mb-5 text-3xl text-center font-semibold leading-normal">My Assets</h1>
    <RouterLink :to="{ name: 'add-idx-assets' }"
        class="bg-primary text-white text-xs uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
        Add Stock</RouterLink>
</template>
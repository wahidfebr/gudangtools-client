<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useAppStore } from '../stores/app'

import AssetCard from "../components/AssetCard.vue"

export default {
    components: {
        AssetCard
    },
    methods: {
        ...mapActions(useAppStore, ['fetchAssets']),
    },
    computed: {
        ...mapState(useAppStore, ['assetsData'])
    },
    created() {
        this.fetchAssets()
    }
}
</script>

<template>
    <h1 class="mb-5 text-3xl text-center font-semibold leading-normal">My Assets</h1>
    <RouterLink :to="{ name: 'add-idx-assets' }"
        class="bg-primary text-white text-xs uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
        Add Stock</RouterLink>

    <div class="flex flex-wrap gap-5 mt-24">
        <AssetCard v-for="asset in assetsData" :key="asset.id" :asset="asset" />
    </div>
</template>
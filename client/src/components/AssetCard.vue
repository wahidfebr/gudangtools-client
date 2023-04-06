<script>

export default {
    props: ["asset"],
}
</script>

<template>
    <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img class="rounded-t-lg" :src="asset.Stock.logo" alt="stock logo" />
            <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {{ asset.Stock.ticker }}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {{ asset.Stock.name }}
                </p>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Total shares: {{ asset.shares }}
                </p>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Initial Value: Rp. {{ asset.initialPrice * asset.shares }}
                </p>
            </div>
        </div>
    </div>
</template>
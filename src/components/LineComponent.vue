<template>
    <div class="chart-line">

    </div>
</template>

<script>
    import VueCharts from 'vue-chartjs';

    export default {
        name: 'LineComponent',
        props: [
            'currentCurrencyHistory'
        ],
        data: function () {
            return {
                historyTime: [],
                historyPrice: [],
            }
        },
        mounted() {
            for (let currency of this.currentCurrencyHistory) {
                this.historyTime.push(currency.time);
                this.historyPrice.push(currency.close)
            }
        },

    }
</script>

<style scoped>


</style>
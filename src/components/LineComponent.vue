<template>
    <div class="chart-line">
        <div id="content">
            <div class="grafik-wrapper">
                <h3>{{currencyName}}</h3>
                <canvas ref="chart"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'LineComponent',
        props: [
            'currencyName',
            'currentCurrencyHistory'
        ],

        data: function () {
            return {
                prices:[],
                timeSets:[],
                currentHistory: this.currentCurrencyHistory,
            }
        },
        methods: {},
        created() {
            const LAST_UPDATES =  9;
            let historyTime = [];
            let historyPrice = [];
            for (let currency of this.currentHistory) {
                let ts = new Date(currency.time * 1000);
                historyTime.push(ts.toLocaleTimeString());
                historyPrice.push(currency.close)
            }
            let priceSet = Object.values(historyPrice);
            let setOfTime = Object.values(historyTime);

            this.prices = priceSet.slice(Math.max(priceSet.length - LAST_UPDATES, 1));
            this.timeSets = setOfTime.slice(Math.max(setOfTime.length - LAST_UPDATES, 1));
        },

        mounted() {
            const chart = this.$refs.chart;
            const ctx = chart.getContext("2d");
            let chartLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels:  this.timeSets,
                    datasets: [{
                        label: 'History',
                        data: this.prices,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            });
        },
    }
</script>

<style scoped>
    .chart-line {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }

    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    }
    .grafik-wrapper{
        background-color: #f4f4f4;
        color: #ffffff;
        padding-bottom: 20px;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, .5);
    }
    .grafik-wrapper h3{
        padding: 10px;
        background-color: #333;
    }
</style>
<template>
    <div class="chart-line">
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js';


    export default {
        name: 'LineComponent',
        props: [
            'currentCurrencyHistory'
        ],

        data: function () {
            return {
                historyTime: [],
                historyPrice: [],
                currentHistory: this.currentCurrencyHistory,
            }
        },
        methods:{


        },
        created() {

            for (let currency of this.currentHistory) {

                let ts = new Date( currency.time*1000);
                this.historyTime.push(ts.toLocaleString());
                this.historyPrice.push(currency.close)

            }
        },

        mounted() {
            const chart = this.$refs.chart;
            const ctx = chart.getContext("2d");

            let chartLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: 'History',
                        data: [12, 19, 3, 5, 2, 3],
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
                                beginAtZero: true
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
        margin-top: 60px;
    }

    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    }

</style>
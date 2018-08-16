<template>
    <div id="currency-graphic-wrapper">
        <line-component :currency-history = "currencyHistory"></line-component>
    </div>
</template>

<script>
    import axios from 'axios';
    import LineComponent from './LineComponent.vue'
    export default {
        name: "GraphicComponent",
        components: {
            LineComponent,

        },
        props: ["currency"],
        data: function () {
            return {
                currentCurrency: this.$route.params.currency,
                currencyHistory:[],
                errors:[],
            }
        },

        mounted() {
            let url = 'https://min-api.cryptocompare.com/data/histohour?fsym='+this.currentCurrency+'&tsym=USD&limit=60&aggregate=3&e=CCCAGG';
            axios.get(url)
                .then(response => {
//                    console.log(response.data.Data);
                    this.currencyHistory = response.data.Data
                }).catch(e => {
                this.errors.push(e)
            })
        },
        methods:{


        },
    }
</script>

<style scoped>

</style>
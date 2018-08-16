<template>
    <div class="ticket-wrapper">
        <div id="crypto-container" v-for="(value,key) in cryptos" >
                <ticket-component :name-of-currency="key" :value="value"></ticket-component>
        </div>
    </div>
</template>

<script>
    import TicketComponent from './TicketComponent';
    import axios from 'axios';
    export default {
        components: {
            TicketComponent,

        },
        name: 'MainComponent',
        data: function () {
            return {
                errors:[],
                cryptos:[]
            }
        },
        created()
        {
            let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,EOS,BCH,ETC,XRP,LTC,XLM,QTUM,TRX,ZEC,NEO,CET,BIX,ADA,BNB,BTM,XMR,VET,BTG,PST,UBTC,XTZ,PST,BNT&tsyms=USD';
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.cryptos = response.data
                }).catch(e => {
                this.errors.push(e)
            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ticket-wrapper {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
</style>

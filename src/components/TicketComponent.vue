<template>
    <div class="ticket-currency">
        <span class="name-of-currency">BTC</span>
        <span class="price-of-currency">6700.83$</span>
    </div>
</template>

<script>
    export default {
        name: "TicketComponent"
    }
</script>

<style scoped>
    .ticket-currency{
        margin-top: 20px;
        margin-right: 20px;
        flex-basis: 23%;
        width: 200px;
        height: 100px;
        background-color: #4b4b4b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        color: #cccccc;
        position: relative;
    }

    .name-of-currency{
        display: inline-flex;
        font-size: 20px;
        line-height: 25px;
    }

    .name-of-currency:before {
        content: '';
        width: 25px;
        height: 25px;
        background: url(../assets/btc.png) no-repeat center;
        background-size: contain;
        margin-right: 7px;
        display: inline-block;
    }
    .price-of-currency:before {
        content: '';
        display: block;
        height: 1px;
        margin: 10px 0;
        background-color: #ccc;
    }
    
    
</style>
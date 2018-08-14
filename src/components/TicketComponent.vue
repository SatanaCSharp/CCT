<template>
    <div class="ticket-currency">
        <span class="name-of-currency">{{nameOfCurrency}}</span>
        <span class="price-of-currency">{{value.USD}}$</span>
    </div>
</template>

<script>

    export default {
        name: "TicketComponent",
        props:["nameOfCurrency","value"],
        data:function () {
            return  {

            }
        },
        created(){
            console.log()
        }
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
        /*position: relative;*/
    }

    .name-of-currency{
        display: inline-flex;
        font-size: 20px;
        line-height: 25px;
    }
    .price-of-currency:before {
        content: '';
        display: block;
        height: 1px;
        margin: 10px 0;
        background-color: #ccc;
    }
    
    
</style>
<template>
<div>
    <router-link :to="{name:'GraphicComponent',params:{currency}}">
        <div class="ticket-currency">
            <span class="name-of-currency">{{currency}}</span>
            <span class="price-of-currency">{{value.USD}}$</span>
        </div>
    </router-link>
</div>

</template>

<script>
    import GraphicComponent from './GraphicComponent';
    export default {
        name: "TicketComponent",
        component:{
            GraphicComponent
        },
        props: ["nameOfCurrency", "value"],
        data: function () {
            return {
                currency: this.nameOfCurrency,
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .ticket-currency {
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

    }
    .ticket-currency:hover {
        background-color: #ccc;
        color:#4b4b4b;
        cursor: pointer;
    }

    .ticket-currency:hover {
        -webkit-animation-name: pulse;
        animation-name: pulse;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    @-webkit-keyframes pulse {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

    @keyframes pulse {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

    .name-of-currency {
        display: inline-flex;
        font-size: 20px;
        line-height: 25px;
    }
    a:-webkit-any-link {
       text-decoration: none;
    }

    .price-of-currency:before {
        content: '';
        display: block;
        height: 1px;
        margin: 10px 0;
        background-color: #ccc;
    }

    .ticket-currency:hover .price-of-currency:before {
        background-color: #4b4b4b;
    }

</style>
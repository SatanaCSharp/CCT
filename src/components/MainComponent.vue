<template>
    <div class="ticket-wrapper">
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>
        <ticket-component></ticket-component>

    </div>
</template>

<script>
    import TicketComponent from './TicketComponent'

    export default {
        components: {TicketComponent},
        name: '',

        data: function () {

        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ticket-wrapper{
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
</style>

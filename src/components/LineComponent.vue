<template>
    <div class="chart-line">
        <div v-for="(key,value) in currencyHistory">
            <span >{{key.time}}</span>----------
            <span>{{key.close}}</span>
        </div>
    </div>
</template>

<script>
    import VueCharts from 'vue-chartjs';
    export default {
     name:'LineComponent',
     props:[
         'currencyHistory'
     ],
        data:function () {
             return{
                 historyObject: this.currencyHistory,
                 historyTime: '',
                 historyPrice:[],
             }
        },

        mounted(){
            console.log('mounted: ');
            console.log(this.historyObject);

        },
        methods:{


        },

    }
</script>

<style scoped>


</style>
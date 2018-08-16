<template>
    <div>
        <div class="top-nav">
            <div class="logo">
                <i class="far fa-chart-bar"></i>
                <span class="logo-text">CCT</span>
            </div>
            <div class="links-wrapper">
                <a href="/">Home</a>
                <a href="#">Currencies</a>
                <a href="#">About</a>
                <div class="search-container">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import MainComponent from '@/components/MainComponent'

    export default {
        components: {MainComponent},
        name: 'App'
    }
</script>

<style scoped>
    .logo {
        display: inline-block;
        padding: 0 10px;
        margin-left: 15px;
        border: 5px solid #fff;
        color: #fff;
        background-image: linear-gradient(to bottom, #333333, #3f3f3f, #4b4b4b, #575757, #646464);
    }

    .logo i {
        font-size: 35px;
    }

    .top-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        background-color: #333;
        max-width: 1165px;
        margin: 0 auto 0;
    }

    .top-nav .links-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top-nav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 25px 25px;
        text-decoration: none;
        font-size: 17px;
    }

    .top-nav a:hover {
        background-color: #c7c7c7;
        color: #3f3f3f;
    }
    .top-nav .search-container {
        display: inline-block;
        float: right;
    }

    .top-nav input[type=text] {
        padding: 6px;
        font-size: 17px;
        border: none;
    }

    .top-nav .search-container button {
        float: right;
        padding: 6px 10px;
        margin-right: 16px;
        background: #575757;
        font-size: 17px;
        border: none;
        cursor: pointer;
        color: white;
    }

    .top-nav .search-container button:hover {
        background: #ccc;
    }
</style>

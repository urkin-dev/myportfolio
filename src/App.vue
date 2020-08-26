<template>
    <div id="app">
        <div class="tree">
        </div>
        <div id="navigation">
            <a data-menuanchor="Page1" class="navigation__item active" href="#Page1"></a>
            <a data-menuanchor="Page2" class="navigation__item" href="#Page2"></a>
            <a data-menuanchor="Page3" class="navigation__item" href="#Page3"></a>
            <a data-menuanchor="Page4" class="navigation__item" href="#Page4"></a>
        </div>
        <full-page :options="options" id="fullpage" ref="fullpage">
            <div class="section">
                <h1 class="main-title" style="text-align: center">Portfolio</h1>
            </div>
            <div class="section">
                <h1 style="text-align: center">Page 2</h1>
            </div>
            <div class="section">
                <h1 style="text-align: center">Page 3</h1>
            </div>
            <div class="section">
                <h1 style="text-align: center">Page 4</h1>
            </div>
        </full-page>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            options: {
                anchors: ['Page1', 'Page2', 'Page3', 'Page4'],
                menu: '#navigation',
                afterLoad: this.afterLoad
            }
        }
    },
    methods: {
        afterLoad(origin, destination, direction) {
            console.log(origin, destination, direction);
        }
    },
};
</script>

<style lang="scss">
@import './styles/styles.scss';

body {
    background-image: url('./assets/img/back.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% -30px;
}

.tree {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-image: url("./assets/img/tree.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center left;
}

#navigation {
    position: fixed;
    top: 50%;
    transform: translateY(-75px);
    left: 50px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-between;
}

.navigation__item {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    transition: transform .2s;
    border-radius: 50%;
}

#navigation .active {
    transform: scale(1.3);
}

</style>

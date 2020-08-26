<template>
    <div id="app">
        <div class="tree">
        </div>
        
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="scss">
body {
    padding: 0;
    margin: 0;
    background-image: url("./assets/img/back.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -30px;

    .tree {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 55%;
        width: 55%;
        height: 100vh;
        background-image: url("./assets/img/tree.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>

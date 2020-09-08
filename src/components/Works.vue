<template>
    <div class="works">
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
        </div>
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
        </div>
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My first work</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: `Works`
    }
</script>

<style lang="scss" scoped>
.works {
    width: 60%;
    height: 700px;
    margin-left: 7%;
    display: flex;
    justify-content: space-between;
    transform: translateX(-9999px);
    opacity: 0;
    transition: 3s;
}

.works__col {
    display: flex;
    flex-direction: column;
}

.works__col::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-1px);
    height: 300px;
    background-color: #fff;
    z-index: -1;
}

.second-work {
    margin-top: 30px;
}

.second-work::before {
    content: '';
    display: block;
    position: absolute;
    top: -32px;
    left: 50%;
    width: 2px;
    transform: translateX(-1px);
    height: 32px;
    background-color: #fff;
}

.work:first-child {
    margin-top: auto;
}

.work {
    background-color: #fff;
    width: 290px;
    height: 250px;
    border: 1px solid #3F3E43;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8px;
    text-decoration: none;
}

.work__img {
    display: block;
    width: 90%;
    height: 330px;
    background-color: #3F3E43;
}

.work__title {
    text-align: center;
    color: #000;
    font-size: 18px;
}
</style>
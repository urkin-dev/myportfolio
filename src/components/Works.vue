<template>
    <div class="works">
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My 1 work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My 2 work</p>
            </a>
        </div>
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My 3 work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My 4 work</p>
            </a>
        </div>
        <div class="works__col">
            <a href="#" class="work">
                <div class="work__img"></div>
                <p class="work__title">My 5 work</p>
            </a>
            <a href="#" class="work second-work">
                <div class="work__img"></div>
                <p class="work__title">My 6 work</p>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    transform: translateX(-13999px);
    transition: 3s;

    &__col {
        display: flex;
        flex-direction: column;
    }

    &__col::before {
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

        &__img {
            display: block;
            width: 90%;
            height: 330px;
            background-color: #3F3E43;
        }

        &__title {
            text-align: center;
            color: #000;
            font-size: 18px;
        }
    }
}

.second-work {
    margin-top: 30px;
}

.work::before {
    content: '';
    display: none;
    position: absolute;
    top: -32px;
    left: 50%;
    width: 2px;
    transform: translateX(-1px);
    height: 32px;
    background-color: #fff;
}

.second-work::before {
    display: block;
}

.work:first-child {
    margin-top: auto;
}

@media screen and (max-width: 1500px) {
    .works {
        width: 75%;
    }
}

@media screen and (max-width: 1290px) {
    .works {
        width: 85%;
        margin-left: 4%;
    }
}

@media screen and (max-width: 1080px) {
    .works {
        height: 100vh;
        margin: 0 auto;
        width: 70%;
        grid-template-columns: 1fr;
    }

    .works__col {
        flex-direction: row;
        justify-content: space-between;
        animation: none;
    }

    .works__col::before {
        display: none;
    }

    .work::before {
        display: block;
    }

    .work {
        animation: none;
        width: 250px;
        height: 210px;
    }

    .work:first-child,
    .second-work {
        margin-top: 10px;
    }
}

@media screen and (max-width: 600px) {
    .works {
        width: 90%;
    }

    .works__col {
        flex-wrap: wrap;
        justify-content: center;
    }

    .works__col:nth-child(3) {
        display: none;
    }
}

</style>
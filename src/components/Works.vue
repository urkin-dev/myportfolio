<template>
    <div class="works-wrapper">
        <div class="works">
            <a target="_blank" class="work" v-for="work in works" :key="work.id" :href="work.src">
                <div class="work__img">
                    <img :src="work.img" alt="work image">
                </div>
                <p class="work__title">{{work.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: `Works`,
        props: {
            works: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #fff;
    }

    .works-wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .works {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        width: 80%;
        row-gap: 10px;

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
                
                img {
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            &__title {
                text-align: center;
                color: #000;
                font-size: 18px;
            }
        }

        @media screen and (max-width: 790px) {
            .work {
                width: 220px;
                height: 200px;
            }
        }

        @media screen and (max-width: 640px) {
            .work {
                height: 120px;
                width: 100%;
                padding: 10px;
                border: 2px solid #3f3e43;

                &__img {
                    width: 100%;
                }

                &__title {
                    display: none;
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .works {
            width: 90%;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 790px) {
        .works {
            width: 70%;
        }
    }

    @media screen and (max-width: 640px) {
        .works {
            width: 60%;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
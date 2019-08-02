<template>
    <div class="students-wrapper">
        <div class="student-wrapper">
            <div class="image-wrapper">
                <img :src="data.pic" alt="student-img" class="image">
            </div>
            <div class="info-wrapper">  

            <button @click="isOpen = !isOpen"
                    :class="`student-btn ${isOpen ? 'student-btn-active' : 'student-btn'}`"></button>

                <div class="info-name">
                    {{data.firstName}} {{data.lastName}}
                </div>
                <div class="info-email">
                    <b>Email:</b> {{data.email}}
                </div>
                <div class="info-company">
                    <b>Company:</b> {{data.company}}
                </div>
                <div class="info-skill">
                    <b>Skill:</b> {{data.skill}}
                </div>
                <div class="info-average">
                    <b>Average:</b> {{average}} %
                </div>
                <transition name="animated" enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutLeft">
                    <div class="info-average-list"
                        v-if="isOpen">
                        <ul :key="index" 
                            v-for="(grade, index) in data.grades" 
                            >
                            <li><b>Test {{index + 1}}:</b> {{grade}}</li>
                        </ul>
                    </div>
                </transition>
                <div class="student-tag-wrapper">
                    <ul class="student-tag-list">
                        <li :key="index" 
                            v-for="(tag, index) in data.tag"
                            class="student-tag">
                            {{tag}}
                        </li>
                    </ul>
                    <input type="text"
                        placeholder="Add a tag"
                        @keyup.enter="addTag($event)"
                        class="student-tag-input">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StudensList',
    data() {
        return {
            isOpen: false,
        }
    },
    props: {
        data: Object,
    },
    computed: {
        average() {
            const avg = this.data.grades.reduce((a, b) => Number(a) + Number(b)) / this.data.grades.length;
            return avg.toFixed();
        },
    },
    methods: {
        addTag(event) {
            this.$store.dispatch('addTag', {
                id: this.data.id,
                value: event.target.value
            });
            event.target.value = '';
        },
    },
}
</script>

<style lang="scss">
    .student-wrapper {
        display: flex;
        padding: 40px 0;
        transition: all .5s ease;
    }

    .info {
        &-wrapper {
            text-align: left;
            margin-left: 20px;
        }

        &-name {
            font-size: 24px;
            font-weight: 600;

            @media only screen and (min-width: 768px) {
                font-size: 36px;
            }
        }

        &-email {
            margin: 10px 0;

            @media only screen and (min-width: 768px) {
                font-size: 20px;
            }
        }

        &-skill {
            margin: 10px 0;

            @media only screen and (min-width: 768px) {
                font-size: 20px;
            }
        }

        &-company {
            margin: 10px 0;

            @media only screen and (min-width: 768px) {
                font-size: 20px;
            }
        }

        &-average {
            margin: 10px 0;

            @media only screen and (min-width: 768px) {
                font-size: 20px;
            }
        }
    }

    .student-wrapper {
        position: relative;
    }

    .image {
        border: 1px solid lightgrey;
        border-radius: 50%;

        &-wrapper img {
            
            @media only screen and (min-width: 768px) {
                width: 100px;
            }
        }
    }

    .student-btn {
        position: absolute;
        top: 20px;
        right: 0px;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        padding: 0;
        transition: all .5s ease;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 4px;
            background: #000;
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 4px;
            height: 20px;
            background: #000;
        }

        &-active {
            transform: rotate(180deg);
            transition: all .5s ease;

            &:after {
                content: '';
                top: 30%;
                left: 20%;
                transform: rotate(90deg) translate(-50%, -50%);
                transition: all .5s ease;
                background: lightgrey;
            }
        }

        &-not-active {
            transform: rotate(180deg);
            transition: all .5s ease;

            &:after {
                content: '';
                top: 50%;
                left: 50%;
                transform: rotate(0deg) translate(-50%, -50%);
                transition: all .5s ease;
                background: #000;
            }
        }
    }

    .student-tag {
        padding: 10px 10px;
        border-radius: 5px;
        color: #fff;
        margin: 5px 5px;
        background: lightgrey;
        animation: scale .3s ease;

        &-list {
            display: flex;
            flex-wrap: wrap;
        }

        &-input {
            border-bottom: 1px solid lightgrey;
            border-left: none;
            border-right: none;
            border-top: none;
            font-size: 16px;
            padding: 5px 0;

            @media only screen and (min-width: 768px) {
                font-size: 22px;
            }
        }
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    @keyframes scale {
        0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
</style>

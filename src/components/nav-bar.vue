<template>
    <div>
        <div class="nav-bar" :class="{'nav-bar-fix': isFix}">
            <div v-show="leftArrow" class="nav-bar-icon" @click="leftClick">
                <i class="van-icon van-icon-arrow-left"></i>{{leftText}}
            </div>
            <div class="nav-bar-title">{{title}}</div>
        </div>
        <!--占位-->
        <div v-if="isFix" class="nav-bar-fix-box"></div>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        props: {
            isFix: {
                type: Boolean,
                default: false,
            },
            title: String,
            leftText: String,
            leftArrow: {
                type: Boolean,
                default: true,
            },
        },
        methods: {
            leftClick() {
                this.$emit('click-left')
            },
        },
    }
</script>

<style scoped lang="less">
    .nav-bar {
        display: flex;
        width: 100%;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
        .nav-bar-icon {
            flex-basis: 20%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            color: #1889f9;
        }
        .nav-bar-title {
            font-size: 32px;
            flex-basis: 60%;
            text-align: center;
        }
    }
    .nav-bar-fix {
        position: fixed;
    }
    .nav-bar-fix-box {
        height: 80px;
    }
</style>
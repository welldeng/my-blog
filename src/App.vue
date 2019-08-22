<template>
    <div id="app" style="max-width: 750px;">
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <van-tabbar route>
            <van-tabbar-item
                    replace
                    to="/user/detail"
                    icon="user-circle-o"
            >
                用户
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/user"
                    icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/blog/list"
                    icon="apps-o"
            >
                文章
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                active: '/user'
            }
        }
    }
</script>

<style scoped lang="less">
    .van-tabbar {
        border-top: 1px solid hsla(0,0%,59.2%,.1);
        height: 75px;
    }
</style>

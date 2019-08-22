<template>
    <div class="user-contain">
        <router-link class="user-info-box" tag="li" to="/user/detail">
            个人信息
        </router-link>
        <router-link class="user-info-box" tag="li" to="/blog/list">
            文章列表
        </router-link>
        <router-link class="user-info-box" tag="li" to="/blog/list">
            收藏网站
        </router-link>
        <router-link class="user-info-box" tag="li" to="/blog/list">
            前端书籍
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'User',
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .user-contain {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px 0;
        .user-info-box {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 80vw;
            height: 50vw;
            margin: 20px 0;
            background-image: url('~@/assets/img/pokemon-bg.jpg');
            background-size: 100% 100%;
            background-blend-mode: color;
            border-radius: 20px;
            box-shadow: 0 8px 12px #a5d1fe;

            li {
                width: 100%;
                height: 100%;
            }
        }
    }

</style>
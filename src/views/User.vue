<template>
    <div>
        <div class="user-info-box">
            <div class="avatar"><img src="../assets/img/avatar.jpg" alt="头像"></div>
            <div class="avatar-info">xxxxxxx</div>
        </div>
        <ul class="tab-box">
            <router-link tag="li" to="/user/detail">个人信息</router-link>
            <router-link tag="li" to="/blog/list">文章目录</router-link>
            <router-link tag="li" to="/blog/list">技术书籍</router-link>
            <router-link tag="li" to="/blog/list">收藏文章</router-link>
            <router-link tag="li" to="/blog/list">生活记录</router-link>
            <router-link tag="li" to="/blog/list">其他</router-link>
        </ul>
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
    .user-info-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 40vh;
        background-image: url('~@/assets/img/pokemon-bg.jpeg');
        background-size: 100% 100%;
        background-blend-mode: color;

        .avatar {
            width: 200px;
            height: 200px;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .avatar-info {
            width: 100%;
            text-align: center;
            font-size: 32px;
        }
    }

    .tab-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 60vh;

        li {
            width: 50%;
            height: 20vh;
            background-image: url('~@/assets/img/pikaqiu1.jpg');
            background-size: 100% 100%;
        }
    }
</style>
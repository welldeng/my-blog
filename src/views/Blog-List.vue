<template>
    <div class="blog-list-box">
        <nav-bar title="文章列表"
                 left-text="返回"
                 left-arrow
                 is-fix
                 @click-left="goBack">
        </nav-bar>
        <ul class="article-list">
            <li v-for="(item, index) in markdownList" :key="index" @click="getContent(item)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import markdowns from '../markdown'

    export default {
        name: "Blog-List",
        data() {
            return {
                markdownList: markdowns
            }
        },
        methods: {
            getContent(item) {
                this.$router.push(`/blog/content/${item.title}`)
            },
            goBack() {
                this.$router.push('/user')
            },
        },
    }
</script>

<style scoped lang="less">
    .article-list {
        background: url('~@/assets/img/pkm-bg.jpg') fixed;
        background-size: contain;
        min-height: 100vh;
        font-weight: 500;
        li {
            font-size: 24px;
            padding: 30px;
            border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
            background-color: rgba(255, 255, 255, 0.85);
        }
    }
</style>
<template>
    <div>
        <nav-bar title="文章内容"
                 left-text="返回"
                 left-arrow
                 is-fix
                 @click-left="goBack">
        </nav-bar>
        <div class="article-box">
            <h3 class="article-title">{{title}}</h3>
            <div v-html="content" class="article-body"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog-Content",
        data() {
            return {
                title: '',
                content: '',
            }
        },
        beforeRouteEnter(to, from, next) {
            next(async vm => {
                vm.title = to.params.url
                let res = await import(`../markdown/${to.params.url}.md`)
                vm.content = res.default
            })
        },
        methods: {
            goBack() {
                this.$router.push('/blog/list')
            }
        }
    }
</script>

<style scoped lang="less">
    .article-box {
        padding: 0 64px;
        margin-top: 32px;
        /*background-color: #f4f5f5;*/
    }
</style>

<style lang="less">
    .genFs(@x) {
        font-size: (7 - @x) * 8px;
        color: #333;
        line-height: 1.5;
        margin-top: 35px;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #ececec;
        font-weight: 500;
    }

    .article-title {
        font-size: 64px;
        margin-bottom: 32px;
        font-weight: 700;
        line-height: 1.5;
    }

    .article-body {
        background-color: #ffffff;
        line-height: 1.75;
        overflow-x: hidden;

        h1 {
            .genFs(1)
        }

        h2 {
            .genFs(2)
        }

        h3 {
            .genFs(3)
        }

        h4 {
            .genFs(4)
        }

        h5 {
            .genFs(5)
        }

        h6 {
            .genFs(6)
        }

        ul, ol {
            padding-left: 40px;
        }

        ul {

        }

        ol {
            list-style: decimal;

            li {
                padding-left: 16px;
            }
        }

        p {
            margin: 28px 0;
        }

        a {
            color: #0269c8;
            border-bottom: 1px solid #d1e9ff;
        }

        img {
            width: 100%;
        }

        pre {
            margin: 28px 0;
            position: relative;
            background-color: #f8f8f8;
        }

        pre > code {
            display: block;
            word-break: normal;
            overflow-x: auto;
            padding: 32px 16px;
            color: #333333;
        }

        code {
            background-color: #fff5f5;
            color: #ff502c;
            font-size: 28px;
            padding: 2px 10px;
        }

        blockquote {
            color: #666;
            padding: 1px 23px;
            margin: 22px 0;
            border-left: 4px solid #cbcbcb;
            background-color: #f8f8f8;
        }

         table {
            display: inline-block!important;
            font-size: 32px;
            width: auto;
            max-width: 100%;
            overflow: auto;
            border: 1px solid #f6f6f6
        }

         thead {
            background: #f6f6f6;
            color: #000;
            text-align: left
        }

         tr:nth-child(2n) {
            background-color: #fcfcfc
        }

         td, th {
            padding: 32px 20px;
            line-height: 64px
        }

         td {
            min-width: 10rem
        }
    }
</style>
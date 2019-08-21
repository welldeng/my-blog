<template>
    <div>
        <nav-bar title="文章列表"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack">
        </nav-bar>
        <div>个人信息</div>
        <div>个人blog，个人链接</div>
        <div>工作经历</div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'User-Detail',
        methods: {
            goBack() {
                this.$router.push('/user')
            }
        }
    }
</script>

<style scoped lang="less">

</style>
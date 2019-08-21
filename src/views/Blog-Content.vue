<template>
    <div>
        <nav-bar title="文章列表"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack">
        </nav-bar>
        <h3>{{title}}</h3>
        <div v-html="content"></div>
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

<style scoped>

</style>
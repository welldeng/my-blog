<template>
    <div>
        <div>Blog-Content</div>
        <div>{{content}}</div>
    </div>
</template>

<script>
    import md from '../markdown/理解__proto__和prototype.md'

    export default {
        name: "Blog-Content",
        data() {
            return {
                content: md,
            }
        },
    }
</script>

<style scoped>

</style>
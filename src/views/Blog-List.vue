<template>
    <div>
        <div>Blog-List</div>
        <ul>
            <li v-for="(item, index) in markdownList" :key="index">
                <h3>{{item.name}}</h3>
                <div>
                    {{item.content}}
                </div>
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
        }
    }
</script>

<style scoped>

</style>
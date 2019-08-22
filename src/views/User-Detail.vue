<template>
    <div>
        <nav-bar title="个人信息"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack">
        </nav-bar>
        <div class="user-info">
            <h3>基本资料</h3>
            <div class="user-info">
                <div class="user-info-avatar">
                    <img src="../assets/img/pikaqiu3.jpg" alt="头像图片">
                </div>
                <div class="user-info-detail">
                    <div>
                        <div class="user-info-detail-title">姓名</div>
                        <div class="user-info-detail-content">邓邓邓</div>
                    </div>
                    <div>
                        <div class="user-info-detail-title">年龄</div>
                        <div class="user-info-detail-content">26</div>
                    </div>
                    <div>
                        <div class="user-info-detail-title">毕业学校</div>
                        <div class="user-info-detail-content">广东工业大学</div>
                    </div>
                    <div>
                        <div class="user-info-detail-title">个人主页</div>
                        <div class="user-info-detail-content">
                            <a href="https://juejin.im/user/5b35a754e51d4558ac48a299" target="_blank">https://juejin.im/user/5b35a754e51d4558ac48a299</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-experience">
            <h3>工作</h3>
        </div>
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
    .user-info {
        font-size: 24px;
        h3 {
            padding: 20px 0;
            text-align: center;
            font-size: 28px;
            border-bottom: 1px solid #ececec;
        }
        .user-info {
            display: flex;
            .user-info-avatar {
                width: 40vw;
                height: 40vw;
                box-sizing: border-box;
                border-right: 1px solid #ececec;
                border-bottom: 1px solid #ececec;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .user-info-detail {
                > div {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 60vw;
                    height: 10vw;
                    box-sizing: border-box;
                    border-bottom: 1px solid #ececec;
                }
            }

            .user-info-detail-title {
                flex-shrink: 0;
                display: inline-flex;
                width: 120px;
                height: 100%;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                border-right: 1px solid #ececec;
            }

            .user-info-detail-content {
                padding: 0 10px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .user-experience {
        font-size: 24px;
        h3 {
            padding: 20px 0;
            text-align: center;
            font-size: 28px;
            border-bottom: 1px solid #ececec;
        }
    }
</style>
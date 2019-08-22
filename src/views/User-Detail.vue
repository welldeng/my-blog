<template>
    <div>
        <nav-bar title="个人信息"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack">
        </nav-bar>
        <div class="user-contain">
            <div class="user-info">
                <h3>基本资料</h3>
                <div class="user-info-box">
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
                            <div class="user-info-detail-content">广东**大学</div>
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
                <h3>工作经验</h3>
                <ul class="user-experience-ul">
                    <li>
                        <div class="work-time">
                            <span>xx公司</span>
                            <span>2018/05-2019/08</span>
                        </div>
                        <div class="work-duty">
                            前端开发工程师
                        </div>
                        <div class="work-description">
                            <div>工作描述：</div>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                        </div>
                        <div class="project-description">
                            <h4>xx项目</h4>
                            <h4>项目描述：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                            <h4>项目职责：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                        </div>
                    </li>
                    <li>
                        <div class="work-time">
                            <span>xx公司</span>
                            <span>2016/07-2018/05</span>
                        </div>
                        <div class="work-duty">
                            前端开发工程师
                        </div>
                        <div class="work-description">
                            <div>工作描述：</div>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                        </div>
                        <div class="project-description">
                            <h4>xx项目</h4>
                            <h4>项目描述：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                            <h4>项目职责：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                        </div>
                        <div class="project-description">
                            <h4>xx项目</h4>
                            <h4>项目描述：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                            <h4>项目职责：</h4>
                            <p>
                                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
                        </div>
                    </li>
                </ul>
            </div>
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
    .user-contain {
        background: url('~@/assets/img/pkm-bg2.jpg') fixed;
        background-size: contain;
        min-height: 100vh;
    }

    .user-info {
        font-size: 24px;
        background-color: rgba(255, 255, 255, 0.85);

        h3 {
            padding: 20px 0;
            text-align: center;
            font-size: 28px;
            border-bottom: 1px solid #ececec;
        }

        .user-info-box {
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
        font-size: 28px;
        word-break: break-word;
        background-color: rgba(255, 255, 255, 0.85);

        h3 {
            padding: 20px 0;
            text-align: center;
            font-size: 28px;
            border-bottom: 1px solid #ececec;
        }

        .user-experience-ul {

            li {
                padding: 30px 30px 0;
                border-bottom: 1px solid #ececec;
            }

            li > div {
                margin-bottom: 40px;
            }

            .work-time {
                display: flex;
                justify-content: space-between;
                font-weight: 500;
            }

            .work-duty {
                font-weight: 500;
            }

            .work-description {
                div {
                    font-weight: 500;
                    margin-bottom: 10px;
                }
            }

            .project-description {
                h4 {
                    margin-bottom: 10px;
                    font-weight: 500;
                }

                p {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
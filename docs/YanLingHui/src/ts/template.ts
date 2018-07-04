import * as $ from "jquery";

interface HeaderParam {
        url: string
        title: string | any
}
export const header = function (title: string) {
        return target => { target.title = title }
}
export class Template {
        constructor() { }
        public FOOTER: string = `
                <footer id="footer">
                        <div>Copyright © 延陵荟 All Rights Reserved</div>
                        <div>
                                <a href="">苏ICP备17075422号-1</a>
                        </div>
                </footer>
        `;
        Hometab() {
                return `
                <footer class="container-fluied flex">
                <div class="tab active"><a href="${ROUTER.index}" class="flex column"><i class="tabIcon"></i>首页</a></div>
                <div class="tab"><a href="${ROUTER.quest}" class="flex column"><i class="tabIcon"></i>任务大厅</a></div>
                <div class="tab"><a href="${ROUTER.expert}" class="flex column"><i class="tabIcon"></i>名医汇</a></div>
                <div class="tab"><a href="${ROUTER.rank}" class="flex column"><i class="tabIcon"></i>排行榜</a></div>
                <div class="tab"><a href="${ROUTER.personalCenter}" class="flex column"><i class="tabIcon"></i>我</a></div>
            </footer>
                       `
        };
        tabClick() {
                $(() => {
                        //底部状态切换
                        $(".tab").click(function () {
                                $(this).addClass("active").siblings().removeClass("active")
                        })


                })
        };
        /** 用于带有 返回导航的 头部标签 */
        headerWithUrl(obj: HeaderParam) {
                return `
                <header class="header1">
                <a id="pageBack" href="${obj.url}"><</a>
                <span>${obj.title}</span>
                </header>
                `
        }
        header
        /**
         *  after HTML document get ready then injection footer contents inside...
         */
        render(header?: string | null | undefined, footer?: string) {
                $(() => {
                        const body = $("body");
                        if (body != undefined) {
                                if (header)
                                        $(header).insertBefore(body.children().first());
                                if (footer)
                                        $(footer).insertAfter(body.children().last());   //no footer
                        }

                })
        }
        setTitle(title: string) {
                $(() => { $("title").html(title) })
        }
}
export const ROUTER = {
        ROOT: "../",
        /**首页 */
        index: './index.html',
        /**任务中心 */
        quest: './quest.html',
        /**专家-名医汇 */
        expert: './expert.html',
        /**专家-搜索条件组合  可以是医院 科室 */
        expertSearching: './experts_searching.html',
        /**专家介绍 */
        expertIntro: './expert_intro.html',

        /**排行榜 */
        rank: './rank.html',
        /**注册 */
        reg: './reg.html',
        /**找回密码第一步 */
        passwordFindStepOne: './password_find_step_1.html',
        /**找回密码第二步 */
        passwordFindStepTwo: './password_find_step_2.html',
        /**帐号管理 */
        profile: './profile.html',
        /**帐号管理-修改信息 */
        profileModify: './profile_modify.html',
        /**个人中心 */
        personalCenter: "./personal_center.html"
}




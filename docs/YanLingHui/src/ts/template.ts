import * as $ from "jquery";
/** header 组件参数 */
interface HeaderParam {
        url: string
        title: string | any
}

/**可为空或未定义的字符串 */
export type NullableString = string | null | undefined;  
/**tab 组件的跳转参数选项 */
export type tabItem = "index"|"quest"|"expert"|"rank"|"personalCenter";
/**存放通用模板和模板方法的抽象类 */
export abstract class Template { 
        protected static title;
        public homeTab(which:tabItem): string {
                return `
                <footer class="container-fluied flex indexFooter">
                <div class="tab ${which === "index"?"active":""}"><a href="${ROUTER.index}" class="flex column"><i class="tabIcon"></i>首页</a></div>
                <div class="tab ${which === "quest"?"active":""}"><a href="${ROUTER.quest}" class="flex column"><i class="tabIcon"></i>任务大厅</a></div>
                <div class="tab ${which === "expert"?"active":""}"><a href="${ROUTER.expert}" class="flex column"><i class="tabIcon"></i>名医汇</a></div>
                <div class="tab ${which === "rank"?"active":""}"><a href="${ROUTER.rank}" class="flex column"><i class="tabIcon"></i>排行榜</a></div>
                <div class="tab ${which === "personalCenter"?"active":""}"><a href="${ROUTER.personalCenter}" class="flex column"><i class="tabIcon"></i>我</a></div>
            </footer>
                       `
        };      
        /** 用于带有返回导航的头部标签模板 */
        public headerWithUrl(obj: HeaderParam): string {
                return `
                <header class="header1">
                <a id="pageBack" href="${obj.url}"><</a>
                <span>${obj.title}</span>
                </header>
                `
        }
         /** 用于没有返回导航的头部标签模板 */
        public headerNoUrl(title:string){
                return `
                <header class="header1">
                <span>${title}</span>
                </header>
                `
        }
        /**after HTML document get ready then inject both contents of header & footer inside...*/
        public render(header?: NullableString, footer?: NullableString): void {
                $(() => {
                        const body = $("body");
                        if (body != undefined) {
                                if (header)
                                        $(header).insertBefore(body.children().first());
                                if (footer) {
                                        $(footer).insertAfter(body.children().last());   //no footer
                                }
                        }

                })
        }
        /**设置html标题 */
        public setTitle(title: string): void {
                $(() => { $("title").html(title) })
        }
}
/** 路由的跳转页面 */
export const ROUTER = {
        ROOT: "../",
        /**首页 */
        index: './index.html',
        /**任务中心 */
        quest: './quest.html',
        /**专家-名医汇 */
        expert: './expert.html',
        /**专家-搜索条件组合  可以是医院 科室 */
        expertSearching: './expert_searching.html',
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




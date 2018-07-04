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
        tab(){
                return   `
                <footer class="container-fluied flex">
                        <div class="tab active"><a href="${ROUTER.index}" class="flex column"><i class="tabIcon"></i>首页</a></div>
                        <div class="tab"><a href="${ROUTER.quest}" class="flex column"><i class="tabIcon"></i>任务大厅</a></div>
                        <div class="tab"><a href="${ROUTER.experts}" class="flex column"><i class="tabIcon"></i>名医汇</a></div>
                        <div class="tab"><a href="${ROUTER.ranks}" class="flex column"><i class="tabIcon"></i>排行榜</a></div>
                        <div class="tab"><a href="${ROUTER.center}" class="flex column"><i class="tabIcon"></i>我</a></div>
                </footer>
                `
            };
            tabClick(){  //点击切换底部class
                        $(()=>{
                            //底部状态切换
                            $(".tab").click(function () {
                                $(this).addClass("active").siblings().removeClass("active")
                            })
                        })
            };
        headerWithUrl(obj: HeaderParam) {
                return `
                <header class="header1">
                <a id="pageBack" href="${obj.url}"><</a>
                <span>${obj.title}</span>
                </header>
                `
        }
        /**
         *  after HTML document get ready then injection footer contents inside...
         */
        render(header?: string|undefined|null, footer?: string) {
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
                $(() => {
                        try {
                                $("title").html(title)
                        } catch (error) {
                        }
                })
        }
}

export const ROUTER = {
        ROOT: "../",
        index: './index.html',
        quest: './quest.html',
        experts: './experts_list.html',
        ranks: './ranks.html',
        reg: './reg.html',
        passwordFindStepOne: './password_find_step_1.html',
        passwordFindStepTwo: './password_find_step_2.html',
        profile: './profile.html',
        center:"./personal_center.html"
}




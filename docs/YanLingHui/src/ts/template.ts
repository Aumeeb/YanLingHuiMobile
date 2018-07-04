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
        render(header?: string, footer?: string) {
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
                $(() => {$("title").html(title)})
        }
}
export const ROUTER = {
        ROOT: "../",
        index: './index.html',
        quest: './quest.html',
        expertsList: './experts_list.html',
        rank: './rank.html',
        reg: './reg.html',
        passwordFindStepOne: './password_find_step_1.html',
        passwordFindStepTwo: './password_find_step_2.html',
        profile: './profile.html',
}




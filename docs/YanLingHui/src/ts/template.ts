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
}




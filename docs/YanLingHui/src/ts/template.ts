import * as $ from "jquery";

export class Template {
        constructor() {
                this.HEADER= this.headerWithUrl("#");
        }
        public FOOTER: string = `
                <footer id="footer">
                        <div>Copyright © 延陵荟 All Rights Reserved</div>
                        <div>
                                <a href="">苏ICP备17075422号-1</a>
                        </div>
                </footer>
        `;
        public HEADER: string;
        headerWithUrl(url) {
                return `
                <header class="header1">
                <a id="pageBack" href="${url}"><</a>
                <span>帐号注册</span>
                </header>
                `
        }
        /**
         * // after HTML document get ready then injection footer contents inside...
         * @param header 
         * @param footer 
         */
        render(header?: string, footer?: string) {
                $(() => {
                        const body = $("body");
                        if (body != undefined) {
                                $(header).insertBefore(body.children().first());
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
export const urls = {
        index: './index.html',
        quest: './quest.html',
        your: './your.html',
        experts: './experts.html',
        ranks: './ranks.html',

}
export const DP = {
        /**html page title */
        title: "延陵荟"
}
export const Elements = {
        H_login_reg: "login_reg"
}





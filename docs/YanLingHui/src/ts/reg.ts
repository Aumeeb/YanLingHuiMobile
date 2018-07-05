import { Page } from "./page";
import { Template, ROUTER } from "./template";
import { Component } from "./utils/decorators";


@Component({styleUrls:["./css/reg.css"]})
class Reg extends Template  implements Page {
    htmlTitle: string;
    title: string;
    constructor() {
        super();
        this.title = "帐号注册";
        this.htmlTitle = this.title;
        this.render(this.headerWithUrl({ title: this.title, url: ROUTER.ROOT }));
        this.setTitle(this.htmlTitle);
    }
    
}
new Reg();
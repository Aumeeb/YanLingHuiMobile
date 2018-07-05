import { Page } from "./page";
import { Template, ROUTER } from "./template";
import { Component } from "./utils/decorators";


@Component({ styleUrls: ["./css/reg.css"] })
class Reg extends Template {
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: "帐号注册", url: ROUTER.ROOT }));
    }

}
new Reg;
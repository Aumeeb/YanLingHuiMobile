import { Page } from "./page";
import { Template, ROUTER } from "./template";




new class extends Template implements Page {
    htmlTitle: string;
    title: string;
    inputsName!: Array<string>;

    constructor() {
        super();

        this.title = "个人中心"
        this.inputsName = ["会员名", "头像", "姓名", "手机号", "身份证号", "支付宝帐号", "邮箱", "行业", "职位证明", "备注"];

        this.render(this.headerWithUrl({ title: this.title, url: ROUTER.profile }));

    }
}


import { Page } from "./page";
import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";



@Header("确认帐号")
class PassWordFindStepTwo extends Template {
    htmlTitle: string;
    static title: string

    constructor() {
        super();

        this.render(this.headerWithUrl({ title: PassWordFindStepTwo.title, url: ROUTER.passwordFindStepOne }), undefined);
        this.setTitle(this.htmlTitle);

    }

}
new PassWordFindStepTwo;
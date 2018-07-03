import { Page } from "./page";
import { Template, ROUTER } from "./template";
import { navigateTo } from "./tools";

const URL = ROUTER.passwordFindStepTwo;
const INDEX = ROUTER.ROOT;
class PassWordFindStepOne extends Template  implements Page {
    htmlTitle: string;
    title: string;
   
    constructor() {
        super();
        this.title = "确认帐号";
        this.htmlTitle = this.title;
        this.render(this.headerWithUrl({title:this.title,url:INDEX}),undefined);
        this.setTitle(this.htmlTitle);
        navigateTo("next",URL);
    }
}
new PassWordFindStepOne;



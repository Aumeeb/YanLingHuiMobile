
import { Template, ROUTER } from "./template";
import { navigateTo } from "./tools";
import { Header } from "./utils/decorators";

 
 @Header("确认帐号")
class PassWordFindStepOne extends Template   {
    htmlTitle: string;
    constructor() {
        super();

        this.render(this.headerWithUrl({title:PassWordFindStepOne.title,url:ROUTER.ROOT}));
        this.setTitle(this.htmlTitle);
        navigateTo("next",ROUTER.passwordFindStepTwo);
    }
}
new PassWordFindStepOne;



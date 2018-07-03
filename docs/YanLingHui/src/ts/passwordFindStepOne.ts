
import { Template, ROUTER, header } from "./template";
import { navigateTo } from "./tools";

 
 @header("确认帐号")
class PassWordFindStepOne extends Template   {
    htmlTitle: string;
    static title: string;
   
    constructor() {
        super();

        this.render(this.headerWithUrl({title:PassWordFindStepOne.title,url:ROUTER.ROOT}),undefined);
        this.setTitle(this.htmlTitle);
        navigateTo("next",ROUTER.passwordFindStepTwo);
    }
}
new PassWordFindStepOne;



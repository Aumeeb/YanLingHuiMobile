import { Page } from "./page";
import { Template, ROUTER } from "./template";
 

class PassWordFindStepTwo extends Template  implements Page {
    htmlTitle: string;
    title: string;
    constructor() {
        super();
        this.title = "确认帐号";
        this.htmlTitle = this.title;

        
        this.render(this.headerWithUrl({title:this.title,url:ROUTER.passwordFindStepOne}),undefined);
        this.setTitle(this.htmlTitle);

        
    }
    
}
new PassWordFindStepTwo;
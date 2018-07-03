import { Page } from "./page";
import { Template } from "./template";
import { navigateTo } from "./tools";


const URL = "./password_find_step_1.html";
class PassWordFindStepTwo extends Template  implements Page {
    htmlTitle: string;
    title: string;
    constructor() {
        super();
        this.title = "确认帐号";
        this.htmlTitle = this.title;

        
        this.render(this.headerWithUrl('./password_find_step_1.html'),undefined);
        this.setTitle(this.htmlTitle);

        
    }
    
}
new PassWordFindStepTwo;
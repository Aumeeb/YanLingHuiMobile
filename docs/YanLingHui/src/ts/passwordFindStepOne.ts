import { Page } from "./page";
import { Template } from "./template";
import { navigateTo } from "./tools";

const URL = "./password_find_step_2.html";
const INDEX = "../"
class PassWordFindStepOne extends Template  implements Page {
    htmlTitle: string;
    title: string;
   
    constructor() {
        super();
        this.title = "确认帐号";
        this.htmlTitle = this.title;
        this.render(this.headerWithUrl(INDEX),undefined);
        this.setTitle(this.htmlTitle);
        navigateTo("next",URL);
    }

    
}
new PassWordFindStepOne;



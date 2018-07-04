import { Page } from "./page";
import { Template, ROUTER, header } from "./template";

@header("新建任务")
class NewTask extends Template   {
    
    static title: string;
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: NewTask.title, url: ROUTER.ROOT }));
        
    }
    
}
new NewTask;
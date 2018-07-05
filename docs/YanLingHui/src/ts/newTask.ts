
import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";

@Header("新建任务")
class NewTask extends Template   {
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: NewTask.title, url: ROUTER.ROOT }));
        
    }
    
}
new NewTask;

import { Template, ROUTER,  } from "./template";
import { Component, Header } from "./utils/decorators";

@Component({
          styleUrls :["./css/expert.css"]
})
@Header("新建任务")
class Expert extends Template   {
    
    static title: string;
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: Expert.title, url: ROUTER.expert }));
        
    }
    
}
new Expert;
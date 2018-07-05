
import { Template } from "./template";
import { Component, Header } from "./utils/decorators";

@Component({ styleUrls: ["./css/expert.css"] })
@Header("名医汇")
class Expert extends Template {
    constructor() {
        super();
        this.render(this.headerNoUrl(Expert.title));
    }
}
new Expert;

 
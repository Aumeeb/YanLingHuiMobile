import * as $ from "jquery";
import { Template, ROUTER } from "./template";
import { Component, Header } from "./utils/decorators";
import { navigateTo } from "./utils/tools";

@Component({ styleUrls: ["./css/expert_intro.css","./css/index.css"] })
@Header("普京")
class ExpertIntro extends Template {
    constructor() {
        super();
        this.render(this.headerWithUrl({title:ExpertIntro.title,url:ROUTER.expert}), this.homeTab("expert"));
 
    }
  
}
new ExpertIntro;


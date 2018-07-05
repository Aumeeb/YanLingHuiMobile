
import * as $ from "jquery";
import { Template } from "./template";
import { Component, Header } from "./utils/decorators";

@Component({ styleUrls: ["./css/expert.css","./css/index.css"] })
@Header("名医汇")
class Expert extends Template {
    constructor() {
        super();
        this.render(this.headerNoUrl(Expert.title),this.homeTab());
        this.changeCategoryFontColor();
    }
    private changeCategoryFontColor() {
        $(()=>{
            $(".expertCategroy span").click((ev:JQuery.Event<HTMLElement>)=> {                
                $(ev.target).css("color","orange");
            })
        })
    }
}
new Expert;


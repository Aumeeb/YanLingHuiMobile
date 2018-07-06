import {Template,ROUTER} from "./template"
class Tem extends Template{
    constructor(){
        super();
        this.render(this.headerWithUrl({title:"个人中心",url:ROUTER.index}));
        this.render(null,this.homeTab("5"))
    }
};
new Tem()
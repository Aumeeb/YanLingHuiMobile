import {Template,ROUTER} from "./template"
class PersonalCenter extends Template{
    constructor(){
        super();
        this.render(this.headerWithUrl({title:"个人中心",url:ROUTER.index}));
        this.render(null,this.homeTab("personalCenter"))
    }
};
new PersonalCenter()
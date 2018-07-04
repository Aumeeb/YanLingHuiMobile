import { Template } from "./template";
class  Tab extends Template{
  constructor(){
    super();
    this.render(null,this.tab());
    this.tabClick()
  }
}
new Tab();
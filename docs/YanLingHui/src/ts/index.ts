import {Template} from "./template"
class Tab extends Template{
  constructor(){
    super();
    this.render(null,this.Hometab());
  }
};
new Tab();
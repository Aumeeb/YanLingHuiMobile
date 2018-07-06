import { Template } from "./template"
import { Component } from "./utils/decorators";

//  @Component({styleUrls:["./css/index.css","./css/swiper.min.css"]})
class Tab extends Template {
  constructor() {
    super();
    this.render(null, this.homeTab("index"));
  }
};
new Tab();

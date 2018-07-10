import { Template } from "./template"
import { Component } from "./utils/decorators";
import * as $ from "jquery";

//  @Component({styleUrls:["./css/index.css","./css/swiper.min.css"]})
class Tab extends Template {
  constructor() {
    super();
    this.render(null, this.homeTab("index"));
  }
};
new Tab();
//医生轮播图
$(() => {
  let slider_doc = $(".honer-Doc");//slider 大容器
  let slider = $(".honer-Doc>div");//slider item
  let next = $(".next");//nrxt button
  let pre = $(".pre");//pre button
  let i = 0; //index
  next.click(() => {
    //显示两个，每次滚动一条 首尾不滚动 maxIndex=slider.length-2
    i >= ((slider.length) - 2) ? i = 0 : i++;
    let x = i * 55;//移动百分比
    slider_doc.css({
      transform: `translateX(-${x}%)`
    })
  })
  pre.click(() => {
    i <= 0 ? i = ((slider.length) - 2) : i--;
    let x = i * 55;//移动百分比
    slider_doc.css({
      transform: `translateX(-${x}%)`
    })
  })
})




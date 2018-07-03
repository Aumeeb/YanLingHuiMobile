import { Page } from "./page";
import { hello } from "./init";


class Index implements Page {
  htmlTitle: string;
  title: string;
  constructor() {
    this.title = "中国";
    //    hello("hello index111");
  }
}



new Index();
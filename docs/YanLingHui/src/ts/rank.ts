import { Template, ROUTER, header } from "./template";

@header("排行榜")
class Rank extends Template {
    htmlTitle: string;
    static title: string;

    constructor() {
        super();

        this.render(this.headerWithUrl({ title: Rank.title, url: ROUTER.ROOT }), undefined);
        this.setTitle(this.htmlTitle);
    }
}
new Rank;

import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";
@Header("账号管理")
class manageAccount extends Template {
    htmlTitle: string;
    constructor() {
        super();

        this.render(this.headerWithUrl({ title: manageAccount.title, url: ROUTER.index }), null);
        this.setTitle(this.htmlTitle);
    }
}
new manageAccount;
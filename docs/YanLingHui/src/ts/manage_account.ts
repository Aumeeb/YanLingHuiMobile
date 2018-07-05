import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";
@Header("账号管理")
class Manage_account extends Template {
    htmlTitle: string;
    static title: string;

    constructor() {
        super();

        this.render(this.headerWithUrl({ title: Manage_account.title, url: ROUTER.index }), null);
        this.setTitle(this.htmlTitle);
    }
}
new Manage_account;
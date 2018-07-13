import { Template, ROUTER } from "./template"
class TaskDetails extends Template {
    constructor() {
        super();
        this.render(this.headerWithUrl({ title: "任务详情", url: ROUTER.quest }), null)
    }
}
new TaskDetails;


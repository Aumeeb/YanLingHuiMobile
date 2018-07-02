import { hello } from "./init";
var Profile = /** @class */ (function () {
    function Profile() {
        this.title = "个人中心";
        this.inputsName = [
            "会员名", "头像",
            "姓名", "手机号",
            "身份证号", "支付宝帐号",
            "邮箱", "行业",
            "职位证明", "备注",
        ];
    }
    return Profile;
}());
hello();

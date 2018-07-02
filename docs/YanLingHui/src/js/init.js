"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = require("./template");
/**initalize your mobile project and set defualt parameters for it.  */
function InitPage() {
    try {
        $("title").html(template_1.DP.title);
    }
    catch (error) {
    }
}
exports.InitPage = InitPage;
function navigateTo(url) {
    location.href = url;
}
exports.navigateTo = navigateTo;
/**delete Any HTMLElement you want by ID */
function remove(eleID) {
    $(function () { $("#" + eleID).remove(); });
}
exports.remove = remove;
// after HTML document get ready then injection footer contents inside...
$(function () {
    var body = $("body");
    if (body != undefined) {
        $(template_1.header).insertBefore(body.children().first());
        $(template_1.AppFooter).insertAfter(body.children().last()); //no footer
    }
    InitPage();
});

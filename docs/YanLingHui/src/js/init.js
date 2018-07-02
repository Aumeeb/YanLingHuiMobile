import { header, AppFooter, DP } from "./template";
/**initalize your mobile project and set defualt parameters for it.  */
export function InitPage() {
    try {
        $("title").html(DP.title);
    }
    catch (error) {
    }
}
export function hello() {
    alert(1);
}
export function navigateTo(url) {
    location.href = url;
}
/**delete Any HTMLElement you want by ID */
export function remove(eleID) {
    $(function () { $("#" + eleID).remove(); });
}
// after HTML document get ready then injection footer contents inside...
$(function () {
    var body = $("body");
    if (body != undefined) {
        $(header).insertBefore(body.children().first());
        $(AppFooter).insertAfter(body.children().last()); //no footer
    }
    InitPage();
});

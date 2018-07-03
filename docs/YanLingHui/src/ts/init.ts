import { header, AppFooter, DP } from "./template";
import * as $ from "jquery";

/**initalize your mobile project and set defualt parameters for it.  */
export function InitPage() {
        try {
                $("title").html(DP.title)
        } catch (error) {
        }
}
export function hello(str: string) {
        alert(str);
}
export function navigateTo(url: string) {
        location.href = url;
}

/**delete Any HTMLElement you want by ID */
export function remove(eleID: string) {
        $(() => { $(`#${eleID}`).remove(); })
}

// after HTML document get ready then injection footer contents inside...
$(() => {
        const body = $("body");
        if (body != undefined) {
                $(header).insertBefore(body.children().first());
                $(AppFooter).insertAfter(body.children().last());   //no footer
        }
        InitPage();
})


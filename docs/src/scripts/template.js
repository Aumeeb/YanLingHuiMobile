//footer template for each mobile page
const footer = `
<footer id="footer">
        <div>Copyright © 延陵荟 All Rights Reserved</div>
        <div>
                <a href="">苏ICP备17075422号-1</a>
        </div>
</footer>
`;

const nav = `
<ul>
        <li><a href="./index.html">首页</a></li>
        <li><a href="./missionCenter.html">任务大厅</a></li>
        <li><a href="./expertGroup.html">名医汇</a></li>
        <li><a href="./rank.html">排行榜</a></li>
        <li><a href="./profile.html">个人中心</a></li>
</ul>
`
//header template for each mobile page
const header = `
<header id="header">
        ${nav}
        <div>
                <img src="./images/logo.png" alt="">
                <div>延陵荟互助系统</div>
                <div id="login_reg"><a href="./login.html">登录</a>&nbsp;<span>|</span>&nbsp;<a href="./register.html">注册</a></div>
        </div>
</header>
`;

const DP = {
        /**html page title */
        title: "延陵荟"
}
const Elements = {
        H_login_reg: "login_reg"
}
/**initalize your mobile project and set defualt parameters for it.  */
function InitPage() {
        try {
                $("title").html(DP.title)

        } catch (error) {

        }
}
/**delete Any HTMLElement you want by ID */
function remove(eleID) {
        $(() => { $(`#${eleID}`).remove(); })
}
// after HTML document get ready then injection footer contents inside...
$(() => {
        const body = $("body");
        if (body != undefined) {
                $(header).insertBefore(body.children().first());
                $(footer).insertAfter(body.children().last());
        }

        InitPage();
})




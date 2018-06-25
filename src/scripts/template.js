//footer template for each mobile page
const footer = `
<footer>
                <div>Copyright © 延陵荟 All Rights Reserved</div>
                <div>
                        <a href="">苏ICP备17075422号-1</a>
                </div>
        </footer>
`;

//header template for each mobile page
const header = `
<header>
                <ul>
                        <li>首页</li>
                        <li>任务大厅</li>
                        <li>名医汇</li>
                        <li>排行榜</li>
                        <li>个人中心</li>
                </ul>
                <div>
                        <img src="./images/logo.png" alt="">
                        <div>延陵荟互助系统</div>
                        <div>登录 | 注册</div>
                </div>
        </header>
`
// after HTML document get ready then injection footer contents inside...

$(() => {
    const body = $("body");
    if (body != undefined) {
        $(header).insertBefore(body.children().first());
        $(footer).insertAfter(body.children().last());
        
    }
})




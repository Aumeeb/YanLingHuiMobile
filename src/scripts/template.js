//footer template for each mobile page
const footer = `
<footer id="footer">
                <div>Copyright © 延陵荟 All Rights Reserved</div>
                <div>
                        <a href="">苏ICP备17075422号-1</a>
                </div>
        </footer>
`;

//header template for each mobile page
const header = `
<header id="header">
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
                        <div><a href="./login.html">登录</a>&nbsp;<span>|</span>&nbsp;<a href="./register.html">注册</a></div>
                </div>
        </header>
`;


const banner=
`

`
// after HTML document get ready then injection footer contents inside...

$(() => {
    const body = $("body");
    if (body != undefined) {
        $(header).insertBefore(body.children().first());
        $(footer).insertAfter(body.children().last());
        
    }
})




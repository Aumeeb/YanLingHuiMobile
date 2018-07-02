//footer template for each mobile page
export const footer = `
<footer id="footer">
        <div>Copyright © 延陵荟 All Rights Reserved</div>
        <div>
                <a href="">苏ICP备17075422号-1</a>
        </div>
</footer>
`;

export const urls = {
        index: './index.html',
        quest: './quest.html',
        your: './your.html',
        experts: './experts.html',
        ranks: './ranks.html',

}

export const AppFooter = `
<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="${urls.index}" onClick="navigateTo('${urls.index}');">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="${urls.quest}" onClick="navigateTo('${urls.quest}');">
			<span class="mui-icon mui-icon-flag"></span>
			<span class="mui-tab-label">任务大厅</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.experts}');">
			<span class="mui-icon mui-icon-person"></span>
			<span class="mui-tab-label">名医汇</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.ranks}');">
			<span class="mui-icon mui-icon-star"></span>
			<span class="mui-tab-label">排行榜</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.your}');">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">个人中心</span>
		</a>
	</nav>
`;


export const nav = `
<ul>
        <li><a href="./index.html">首页</a></li>
        <li><a href="./missionCenter.html">任务大厅</a></li>
        <li><a href="./expertGroup.html">名医汇</a></li>
        <li><a href="./rank.html">排行榜</a></li>
        <li><a href="./profile.html">个人中心</a></li>
</ul>
`
//header template for each mobile page
export const header = `
<header id="header">
        <div>
                <img src="./images/logo.png" alt="">
                <div>延陵荟互助系统</div>
                <div id="login_reg"><a href="./login.html">登录</a>&nbsp;<span>|</span>&nbsp;<a href="./register.html">注册</a></div>
        </div>
</header>
`;

export const DP = {
        /**html page title */
        title: "延陵荟"
}
export const Elements = {
        H_login_reg: "login_reg"
}





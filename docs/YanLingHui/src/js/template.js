"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//footer template for each mobile page
exports.footer = "\n<footer id=\"footer\">\n        <div>Copyright \u00A9 \u5EF6\u9675\u835F All Rights Reserved</div>\n        <div>\n                <a href=\"\">\u82CFICP\u590717075422\u53F7-1</a>\n        </div>\n</footer>\n";
exports.urls = {
    index: './index.html',
    quest: './quest.html',
    your: './your.html',
    experts: './experts.html',
    ranks: './ranks.html',
};
exports.AppFooter = "\n<nav class=\"mui-bar mui-bar-tab\">\n\t\t<a class=\"mui-tab-item mui-active\" href=\"" + exports.urls.index + "\" onClick=\"navigateTo('" + exports.urls.index + "');\">\n\t\t\t<span class=\"mui-icon mui-icon-home\"></span>\n\t\t\t<span class=\"mui-tab-label\">\u9996\u9875</span>\n\t\t</a>\n\t\t<a class=\"mui-tab-item\" href=\"" + exports.urls.quest + "\" onClick=\"navigateTo('" + exports.urls.quest + "');\">\n\t\t\t<span class=\"mui-icon mui-icon-flag\"></span>\n\t\t\t<span class=\"mui-tab-label\">\u4EFB\u52A1\u5927\u5385</span>\n\t\t</a>\n\t\t<a class=\"mui-tab-item\" href=\"" + exports.urls.experts + "\" onClick=\"navigateTo('" + exports.urls.experts + "');\">\n\t\t\t<span class=\"mui-icon mui-icon-person\"></span>\n\t\t\t<span class=\"mui-tab-label\">\u540D\u533B\u6C47</span>\n\t\t</a>\n\t\t<a class=\"mui-tab-item\" href=\"" + exports.urls.experts + "\" onClick=\"navigateTo('" + exports.urls.ranks + "');\">\n\t\t\t<span class=\"mui-icon mui-icon-star\"></span>\n\t\t\t<span class=\"mui-tab-label\">\u6392\u884C\u699C</span>\n\t\t</a>\n\t\t<a class=\"mui-tab-item\" href=\"" + exports.urls.experts + "\" onClick=\"navigateTo('" + exports.urls.your + "');\">\n\t\t\t<span class=\"mui-icon mui-icon-gear\"></span>\n\t\t\t<span class=\"mui-tab-label\">\u4E2A\u4EBA\u4E2D\u5FC3</span>\n\t\t</a>\n\t</nav>\n";
exports.nav = "\n<ul>\n        <li><a href=\"./index.html\">\u9996\u9875</a></li>\n        <li><a href=\"./missionCenter.html\">\u4EFB\u52A1\u5927\u5385</a></li>\n        <li><a href=\"./expertGroup.html\">\u540D\u533B\u6C47</a></li>\n        <li><a href=\"./rank.html\">\u6392\u884C\u699C</a></li>\n        <li><a href=\"./profile.html\">\u4E2A\u4EBA\u4E2D\u5FC3</a></li>\n</ul>\n";
//header template for each mobile page
exports.header = "\n<header id=\"header\">\n        <div>\n                <img src=\"./images/logo.png\" alt=\"\">\n                <div>\u5EF6\u9675\u835F\u4E92\u52A9\u7CFB\u7EDF</div>\n                <div id=\"login_reg\"><a href=\"./login.html\">\u767B\u5F55</a>&nbsp;<span>|</span>&nbsp;<a href=\"./register.html\">\u6CE8\u518C</a></div>\n        </div>\n</header>\n";
exports.DP = {
    /**html page title */
    title: "延陵荟"
};
exports.Elements = {
    H_login_reg: "login_reg"
};

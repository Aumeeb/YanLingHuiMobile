"use strict";
exports.__esModule = true;
exports.dev = {
    outerIP: '117.62.230.235',
    innerIP: '127.0.0.1',
    port: '2222',
    outputFolder: 'build'
};
exports.RelativePath = './YanLingHui/src/js';
exports.Router = [
    { key: "index", value: "./YanLingHui/src/ts/index.ts" },
    { key: "profile", value: "./YanLingHui/src/ts/profile.ts" },
    { key: "login", value: "./YanLingHui/src/ts/login.ts" }
];
exports.Router2 = {
    "index": "./YanLingHui/src/ts/index.ts",
    "profile": "./YanLingHui/src/ts/profile.ts",
    "login": "./YanLingHui/src/ts/login.ts",
    "reg": "./YanLingHui/src/ts/reg.ts",
    "passwordFindStepOne": "./YanLingHui/src/ts/passwordFindStepOne.ts",
    "passwordFindStepTwo": "./YanLingHui/src/ts/passwordFindStepTwo.ts"
};
function relativeRoute(routes) {
    var array = [];
    routes.forEach(function (item) {
        var emptyObj = Object.create(null);
        var key = item.key;
        var val = item.value;
        emptyObj[key] = val;
        array.push({ emptyObj: emptyObj });
    });
    return array;
}
exports.relativeRoute = relativeRoute;

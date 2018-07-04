export var dev = {
    outerIP: '117.62.230.235',
    innerIP: '127.0.0.1',
    port: '2222',
    outputFolder: 'build'
};
export var RelativePath = './YanLingHui/src/js';
export var Router = {
    "index": "./YanLingHui/src/ts/index.ts",
    "profile": "./YanLingHui/src/ts/profile.ts",
    "login": "./YanLingHui/src/ts/login.ts",
    "reg": "./YanLingHui/src/ts/reg.ts",
    "rank": "./YanLingHui/src/ts/rank.ts",
    "newTask": "./YanLingHui/src/ts/newTask.ts",
    "experts": "./YanLingHui/src/ts/experts.ts",
    "passwordFindStepOne": "./YanLingHui/src/ts/passwordFindStepOne.ts",
    "passwordFindStepTwo": "./YanLingHui/src/ts/passwordFindStepTwo.ts"
};
export function relativeRoute(routes) {
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

interface DevOption {
    /**外网IP */
    outerIP: string;
    /**内网IP */
    innerIP: string;
    /**端口号 */
    port: string;
    /**文件的输出的文件夹 */
    outputFolder: string
}


export const dev: DevOption = {
    outerIP: '117.62.230.235',
    innerIP: '127.0.0.1',
    port: '2222',
    outputFolder: 'build'
}

export const RelativePath: string = './YanLingHui/src/js';


interface Route {
    key: string, value: string
}

export const Router = {

    "index": "./YanLingHui/src/ts/index.ts",
    "profile": "./YanLingHui/src/ts/profile.ts",
    "login": "./YanLingHui/src/ts/login.ts",
    "reg": "./YanLingHui/src/ts/reg.ts",
    "rank": "./YanLingHui/src/ts/rank.ts",
    "newTask": "./YanLingHui/src/ts/newTask.ts",
    "expert": "./YanLingHui/src/ts/expert.ts",
    "expertSearching": "./YanLingHui/src/ts/expertSearching.ts",
    "expertIntro": "./YanLingHui/src/ts/expertIntro.ts",
    "passwordFindStepOne": "./YanLingHui/src/ts/passwordFindStepOne.ts",
    "passwordFindStepTwo": "./YanLingHui/src/ts/passwordFindStepTwo.ts",

     
    // "./server/devOption": "./YanLingHui/src/ts/server/devOption.ts",   //服务器内容不打包


}
export function relativeRoute(routes: Route[]) {
    var array = [];

    routes.forEach(item => {
        let emptyObj = Object.create(null);

        let key = item.key;
        let val = item.value;
        emptyObj[key] = val;
        array.push({ emptyObj });
    })
    return array;
}



import webpack from "webpack";

import * as path from "path";
import { dev } from "./YanLingHui/src/ts/server/devOption";


 
const config: webpack.Configuration = {
    // devtool: 'source-map',
    entry: ['./YanLingHui/src/ts/profile.ts'],

    output: {
        path: path.resolve(__dirname, dev.outputFolder), //获取当前路径
        filename: 'bundle.js', //文件名
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js']
    },

    module: {
        preLoaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ],
        rules:[]
    }
};

export default config;


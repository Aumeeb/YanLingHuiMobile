"use strict";
exports.__esModule = true;
var path = require("path");
var devOption_1 = require("./YanLingHui/src/ts/server/devOption");
var config = {
    devtool: 'source-map',
    entry: devOption_1.Router,
    output: {
        path: path.resolve(__dirname, devOption_1.RelativePath),
        filename: "[name].js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};
exports["default"] = config;

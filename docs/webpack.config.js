"use strict";
exports.__esModule = true;
var path = require("path");
var config = {
    devtool: 'source-map',
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname, dev.outputFolder),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ]
    }
};
exports["default"] = config;

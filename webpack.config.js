'use strict';

const path = require('path');

const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );


module.exports = env => {
    const build = env && env.build;
    const prod = env && env.prod;
    const config = {
        mode: prod ? 'production' : 'development',
        target: 'node',
        externals: [nodeExternals()],
        entry: {
            server: `./app/server.js`
        },
        output: {
            path: path.resolve(__dirname, './build'),
            libraryTarget: "commonjs",
            filename: `server.js`,
        },
        plugins: [
            new NodemonPlugin({
                script: './index.js'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules|bower_components/,
                    loader: 'babel-loader',
                    query: {}
                }
            ]
        }
    };

    if (build && prod) {
        config.plugins.push(new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }));
        config.plugins.push(new MinifyPlugin());
    } else if (!build) {
        config.watch = true;
        config.watchOptions = {
            aggregateTimeout: 300,
            poll: 1000
        };
    }
    return config;
};
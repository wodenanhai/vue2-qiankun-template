const {name} = require('./package');
const webpack = require("webpack");
module.exports = {
    transpileDependencies: true,
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        port: 8082,
        headers: {
            // 开发模式, 允许跨域配置
            'Access-Control-Allow-Origin': '*',
        }
    },
    configureWebpack: {
        output: {
            // spa必需把子应用打包成 umd 库格式
            library: `${name}`,
            libraryTarget: 'umd',
            chunkLoadingGlobal: `webpackJsonp_${name}`,
        }
    }
}

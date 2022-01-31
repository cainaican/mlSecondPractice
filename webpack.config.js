const HtmlWebpackPligin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPligin({
            template: './src/index.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }

}
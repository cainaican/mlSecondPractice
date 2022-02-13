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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options:{
                    outputPath: '/images/',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.pug$/,
                use: "pug-loader"
            }, 
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }

}
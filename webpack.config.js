const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'Source','index.tsx'),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_module/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_module/
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'Deploy'),
        filename: "main.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'Deploy'),
        port: 9000,
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebpackPlugin(
        {
            template: path.join(__dirname, 'index.html'), 
            file: 'index.html', 
            inject: 'body'
        })]
};
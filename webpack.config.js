const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'source/reactjs','Index.tsx'),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
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
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    output: {
        path: path.resolve(__dirname, 'deploy/reactjs'),
        filename: "main.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'deploy/reactjs'),
        port: 9000,
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebpackPlugin(
        {
            template: path.join(__dirname, 'Index.html'), 
            file: 'Index.html', 
            inject: 'body'
        })]
};
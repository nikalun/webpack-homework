const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV;
const isDev = env !== 'production';

let plugins = [
    new MiniCssExtractPlugin({
        filename: isDev ? 'common.css' : '[name].css'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })
];

let rules = [
    {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react'],
                plugins: ['syntax-dynamic-import']
            }
        }
    },
    {
        test: /\.css/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
        ]
    }
];

let output = {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    publicPath: ''
};

let optimization = {};

if (!isDev) {

    plugins = [
        ...plugins,
        new CleanWebpackPlugin(path.resolve(__dirname, 'build'), {}),
    ];

    optimization = {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}

let config = {
    entry: './src/index.js',
    optimization: optimization,
    output: output,
    externals : {
        react: 'React'
    },
    module: {
        rules: rules
    },
    plugins: plugins
};


module.exports = config;

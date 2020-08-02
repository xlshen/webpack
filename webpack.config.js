const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const lessVars = require('./src/styles/theme.js');

module.exports = {
  // 入口文件配置
  entry: {
    //   button: path.resolve(__dirname, 'src/components/Button/index.tsx'),
    //   alert: path.resolve(__dirname, 'src/components/Alert/index.tsx'),
    homestyler: path.resolve(__dirname, 'src/lib.js')
  },
  // 输出文件配置
  output: {
    // hash默认20位
    filename: '[name].js',
    // 输出文件路径
    path: path.resolve(__dirname, './dist'),
    // 文件发布地址
    library: 'named',
    libraryTarget: 'umd'
  },
  // 模块处理配置
  resolve: {
    // ES5 || ES6先用哪部分代码处理
    mainFields: ['jsnext:main', 'browser', 'main'],
    // 文件后缀配置
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    // 第三方依赖模块查找路径
    // 当安装的第三方模块都放在项目根目录./node_modules时，可以指明存放第三方模块的绝对路径，以减少默认搜索时间
    modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, 'node_modules')],
  },
  // 模块加载配置
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.jsx?$/,

        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: lessVars,
                javascriptEnabled: true,
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 30KB 以下的文件采用 url-loader
            limit: 1024 * 30,
            // 否则采用 file-loader，默认值就是 file-loader
            fallback: 'file-loader',
            name: 'files/[name].[ext]'

          }
        }]
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  // 插件配置
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  // 无需webpack构建打包输出
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  // webpack如何寻找loader
  // 默认配置
  // 该配置常用于加载本地loader
  devtool: 'source-map',
  mode: 'development',
};

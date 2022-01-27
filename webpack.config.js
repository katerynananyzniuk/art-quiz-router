const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    'bundle' :'./index.js',
    'bundle-home' : './views/home.js',
    'bundle-categories' : './views/categories.js',
    'bundle-question' : './views/question.js',
    'bundle-settings' : './views/settings.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@modules': path.resolve(__dirname, 'src/modules'),
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}
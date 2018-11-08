module.exports = {
    entry: './src/index.js',
    output: {
        path: --dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, // CHECK: is this a regex?
            loader: 'babel-loader'
        }]
    }
};
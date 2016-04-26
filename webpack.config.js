var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var atImport = require('postcss-import');

var PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public')
};

process.env.BUILD_DIR = PATHS.build;

module.exports = {

    context: PATHS.src,
    entry: {
        app: [
            'babel-polyfill',
            './index.jsx'
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: PATHS.src
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.src
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                include: PATHS.src
            },
            {
                test: /\.json$/,
                loaders: ['json'],
                include: PATHS.src
            }
        ]
    },

    postcss: function(webpack) {
        return [ atImport({ addDependencyTo: webpack }), precss, autoprefixer ];
    }
};

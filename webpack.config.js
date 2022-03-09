const path = require('path');

module.exports = {
    output: {
        chunkFilename: 'js/[name].bundle.js',
        publicPath: '/',
    },

    resolve: {
        alias: {
            '@': path.resolve('./resources/js'),
            '~': path.resolve('./resources/scss'),
            '@resources': path.resolve('./resources')
        },
    }
};

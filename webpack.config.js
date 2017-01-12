var webpack  = require('webpack');
module.exports = {
    entry: './www/js/main',
    output: {
        path: 'www/dist',
        filename: 'main.bundle.js'
    },
    watch: true
};
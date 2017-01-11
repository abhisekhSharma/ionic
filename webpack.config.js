var path = require('path');
module.exports = {
    entry: './www/js/main',
    output: {
        path: 'www/dist',
        filename: 'main.bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            lib: 'www/lib',
            angular: 'www/lib/angular/angular',
            angularMocks: 'www/lib/angular-mocks',
            modules: 'www/modules',
            enrollmentModule: 'www/modules/enrollment'
        },
        extensions: ['', '.js', '.jsx']
    },
    watch: true
};
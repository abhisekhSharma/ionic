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
            app: 'www/js/app',
            angular: 'www/lib/angular/angular',
            angularMocks: 'www/lib/angular-mocks',
            uiRouter: 'www/lib/angular-ui-router/release/angular-ui-router',
            modules: 'www/modules',
            enrollmentModule: 'www/modules/enrollment'
        },
        extensions: ['', '.js', '.jsx']
    },
    watch: true
};
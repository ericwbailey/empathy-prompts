const SOURCE_DIR = './source';
const BUILD_DIR = './.build';
const TEST_DIR = './.test';
const DEPLOY_DIR = './docs';
const DOCUMENTATION_DIR = './documentation';
const VENDOR_DIR = './node_modules';

const IMG_FILES = '.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}';


module.exports = {
    browsersync: {
        basedir: {
            build: BUILD_DIR,
            test: TEST_DIR
        },
        index: 'index.html',
        watch: {
            build: BUILD_DIR + '/**/*.html',
            test: TEST_DIR + '/**/*.html'
        }
    },
    clean: {
        build: {
            root: BUILD_DIR + '/**',
            images: BUILD_DIR + '/**/*' + IMG_FILES,
            scripts: BUILD_DIR + '/main.js',
            static: BUILD_DIR + '/static/**/*',
            styles: BUILD_DIR + '/main.css'
        },
        deploy: {
            root: DEPLOY_DIR + '/**',
            images: DEPLOY_DIR + '/**/*' + IMG_FILES,
            scripts: DEPLOY_DIR + '/main.js',
            static: DEPLOY_DIR + '/static/**/*',
            styles: DEPLOY_DIR + '/main.css'
        },
        documentation: {
            root: DOCUMENTATION_DIR + '/**',
            styles: DOCUMENTATION_DIR + '/styles/**',
        },
        screenshots: './screenshots/',
        test: {
            root: TEST_DIR + '/**',
            images: TEST_DIR + '/**/*' + IMG_FILES,
            scripts: TEST_DIR + '/main.js',
            static: TEST_DIR + '/static/**/*',
            styles: TEST_DIR + '/main.css'
        }
    },
    documentation: {
        sassdoc: {
            source: SOURCE_DIR + '/**/*.scss',
            dest: DOCUMENTATION_DIR + '/styles'
        }
    },
    errata: {
        source: [
            SOURCE_DIR + '/browserconfig.xml',
            SOURCE_DIR + '/CNAME',
            SOURCE_DIR + '/content.json',
            SOURCE_DIR + '/crossdomain.xml',
            SOURCE_DIR + '/humans.txt',
            SOURCE_DIR + '/manifest.json',
            SOURCE_DIR + '/robots.txt'
        ],
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: DEPLOY_DIR
    },
    images: {
        source: [
            SOURCE_DIR + '/**/*' + IMG_FILES,
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*',
            '!' + SOURCE_DIR + '/**/icon-*.svg'
        ],
        watch: [
            SOURCE_DIR + '/**/*' + IMG_FILES,
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*',
            '!' + SOURCE_DIR + '/**/icon-*.svg'
        ],
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: {
            source: TEST_DIR + '/**/*',
            dest: DEPLOY_DIR
        }
    },
    lint: {
        scripts: [
            SOURCE_DIR + '/*.js',
            '!' + SOURCE_DIR + '/vendor/**/*.js'
        ],
        styles: [
            SOURCE_DIR + '/**/*.scss',
            '!' + SOURCE_DIR + '/base/_reset.scss',
            '!' + SOURCE_DIR + '/vendor/**/*'
        ],
        pages: SOURCE_DIR + '/**/*.hbs'
    },
    pages: {
        source: SOURCE_DIR + '/*.hbs',
        partials: SOURCE_DIR + '/**/*.hbs',
        content: SOURCE_DIR + '/content.json',
        watch: [
            SOURCE_DIR + '/**/*.hbs',
            SOURCE_DIR + '/content.json',
        ],
        build: BUILD_DIR,
        test: {
            source: BUILD_DIR + '/*.html',
            dest: TEST_DIR,
        },
        deploy: {
            source: TEST_DIR + '/*.html',
            dest: DEPLOY_DIR
        }
    },
    responsify: {
        source: {
            jpgs: SOURCE_DIR + '/**/*-fullsize.{jpg,jpeg}',
            pngs: SOURCE_DIR + '/**/*-fullsize.png'
        }
    },
    sitemap: {
        build: {
            source: BUILD_DIR + '/*.html',
            dest: BUILD_DIR
        },
        test: {
            source: BUILD_DIR + '/sitemap.xml',
            dest: TEST_DIR
        },
        deploy: {
            source: BUILD_DIR + '/sitemap.xml',
            dest: DEPLOY_DIR
        }
    },
    screenshots: {
        source: DEPLOY_DIR + '/*.html',
        dest: './screenshots/'
    },
    scripts: {
        vendor: {
            shoestring: VENDOR_DIR + '/shoestring/dist/shoestring.js'
        },
        source: SOURCE_DIR + '/**/*.js',
        watch: SOURCE_DIR + '/**/*.js',
        build: BUILD_DIR,
        test: {
            source: BUILD_DIR + '/main.js',
            dest: TEST_DIR
        },
        deploy: {
            source: TEST_DIR + '/*.js',
            dest: DEPLOY_DIR
        }
    },
    sprites: {
        source: [
            SOURCE_DIR + '/**/icon-*.svg',
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*'
        ],
        dest: SOURCE_DIR + '/elements/'
    },
    static: {
        source: SOURCE_DIR + '/static/**/*',
        build: BUILD_DIR + '/static/',
        test: TEST_DIR + '/static/',
        deploy: {
            source: TEST_DIR + '/static/**/*',
            dest: DEPLOY_DIR + '/static/'
        }
    },
    styles: {
        source: SOURCE_DIR + '/main.scss',
        watch: SOURCE_DIR + '/**/*.scss',
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: {
            source: TEST_DIR + '/main.css',
            dest: DEPLOY_DIR
        }
    }
};

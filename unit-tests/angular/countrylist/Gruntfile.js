module.exports = function(grunt) {

    var JSfiles = ['js/*.js'];

    // Project configuration.
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        appConfig: grunt.file.readJSON('package.json'), // app.json



        html2js: {
            // options: {
            //     base: 'VersionedResources'
            // },
            main: {
                src: ['js/**/*.html'],
                dest: 'js/config/templates.js'
            }
        },

        jshint: {
            all: JSfiles,
            options: { // http://www.jshint.com/docs/options/
                globalstrict: false, // removes all 'use strict' errors
                curly: true, // requires you to always put curly braces around blocks in loops and conditionals
                eqeqeq: true, // prohibits the use of == and != in favor of === and !==
                freeze: true, // prohibits overwriting prototypes of native objects such as Array, Date and so on
                indent: 4, // enforces specific tab width for your code
                latedef: true, // prohibits the use of a variable before it was defined
                quotmark: 'single', // enforces to use 'single' or 'double' quotes
                maxdepth: 4, // lets you control how nested do you want your blocks to be
                maxlen: 200, // lets you set the maximum length of a line
                eqnull: true, // option suppresses warnings about == null comparisons
                browser: true, // defines globals exposed by modern browsers
                globals: {
                    jQuery: true // defines globals exposed by the jQuery JavaScript library
                }
            }
        },

        eslint: {
            all: {
                options: { // https://github.com/eslint/eslint/blob/master/docs/rules/README.md
                    config: 'eslint.json',
                    rulesDir: './'
                },
                src: JSfiles
            }
        },

        plato: {
            unittesting: {
                files: {
                    'reports': JSfiles
                }
            }
        },

        karma: {
            unit: {
                configFile: 'tests/config/karma.conf.js'
            },
            e2e: {
                configFile: 'tests/config/e2e.js'
            }
        },

        watch: {
            js: {
                files: JSfiles,
                tasks: ['jshint', 'eslint']
            }
        }

    });


    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('eslint-grunt');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-html2js');


    // Default task
    grunt.registerTask('default', ['less']);
    grunt.registerTask('js', ['jshint', 'eslint']);
    grunt.registerTask('tests', ['karma:unit']);

};

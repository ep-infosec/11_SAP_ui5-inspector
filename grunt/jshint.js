'use strict';

/**
 * Make sure code styles are up to par and there are no obvious mistakes.
 * @param {Object} grunt
 * @param {Object} config
 */
module.exports = function (grunt, config) {
    return {
        options: {
            node: true,
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        scripts: {
            files: {
                src: ['<%= app %>/scripts/**/*.js']
            }
        },
        karma: {
            files: {
                src: ['<%= tests %>/**/*.js', '!<%= tests %>/reports/**/*.*']
            }
        },
        gruntfiles: {
            files: {
                src: ['Gruntfile.js', '<%= grunt %>/*.js']
            }
        }
    };
};

Grunt-CSSpec
============

Grunt adapter for CSSpec test compilation.

    npm install grunt-csspec --save-dev

For CSSpec see: https://www.npmjs.com/package/csspec and https://github.com/cjkula/csspec

Sample Grunt configuration:

    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      csspec: {
        dev: {
          files: {
            'test-suite.sass' : 'test-suite.csspec'
          }
        }
      },

      sass: {
        dev: {
          ...
          files: {
            ...
            'test-suite.css' : 'test-suite.sass'
          }
        }
      },

      watch: {
        sass: {
          files: [
            'app/sass/{,*/}*.{scss,sass}'
          ],
          tasks: ['sass:dev']
        },
        csspec: {
          files: [
            'css-tests/*.csspec'
          ],
          tasks: ['csspec:dev', 'sass:dev']
        }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csspec');

Note that SASS compilation is not currently bundled into the preprocessor and so needs to be run after the csspec task to generate the test stylesheet.

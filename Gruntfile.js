module.exports = function (grunt) {
  "use strict";
  // CONFIGURE GRUNT ===========================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  // css min  ------------------------------------
    cssmin: {
      build: {
        files: {
          'dist/main.min.css': 'src/main.css'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/main.min.js': ['src/ms.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
    }
  });
  // REGISTER TASKS ============================================================
  grunt.registerTask('default', ['cssmin', 'uglify']);

  // LOAD GRUNT PLUGINS ========================================================
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
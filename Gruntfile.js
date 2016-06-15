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

  });
  // REGISTER TASKS ============================================================
  // grunt.registerTask('default', ['cssmin', 'uglify']);
  grunt.registerTask('default', ['cssmin']);
  // LOAD GRUNT PLUGINS ========================================================
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
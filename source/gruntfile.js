module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'views/js/main.js',
        dest: 'dist/views/js/main.min.js',
      }
    },
    cssmin: {
        minify: {
          files: {
            'dist/views/css/style.min.css': ['views/css/style.css'],
            'dist/views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css']
          }
        }
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};

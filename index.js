var csspec = require('csspec');

module.exports = function(grunt) {
  grunt.registerMultiTask('csspec', 'Preprocess CSSpec to SASS', function() {
    var files = grunt.config('csspec').dev.files;
    for(dest in files) {
      csspec.preprocessFile(files[dest], dest);
    }
  });
};

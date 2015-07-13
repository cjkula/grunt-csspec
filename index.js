var csspec = require('csspec');

module.exports = function(grunt) {
  grunt.registerMultiTask('csspec', 'Preprocess CSSpec to SASS', function() {
    var files = grunt.config('csspec').dev.files,
        sourcePath, 
        destPath;

    for(dest in files) {
      destPath   = process.cwd() + '/' + dest;
      sourcePath = process.cwd() + '/' + files[dest];
      csspec.preprocessFile(destPath, destPath);
    }

  });
};



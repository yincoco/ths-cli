var gitDownload = require('download-git-repo');
console.log(11111);
gitDownload('vuejs/vue#master', 'test/tmp', function (err) {
    console.log(err ? 'Error' : 'Success')
    console.log(err);
  })
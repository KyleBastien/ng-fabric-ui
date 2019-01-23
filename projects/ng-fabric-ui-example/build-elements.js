const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-fabric-ui-example/runtime.js',
    './dist/ng-fabric-ui-example/polyfills.js',
    './dist/ng-fabric-ui-example/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ng-fabric-ui-elements.js');
})();

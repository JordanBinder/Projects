const path require('path'); // node assumes this is built in module.
// code like require('./path') will make Node.js look for this file within the scope of the directory
let pathObj = path.parse(__filename);

const LOG = require('./logger')

LOG('message');
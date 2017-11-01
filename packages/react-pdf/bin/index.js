const os = require('os');
const nbind = require('nbind');

const nodeVersion = process.version.match(/^v(\d+)/)[1];
const isRHEL = /el7/.test(os.release());
const ret = nbind.init(__dirname + '/' + nodeVersion + (isRHEL ? '-rhel' : ''));

module.exports = require('./entry-common')(ret.bind, ret.lib);

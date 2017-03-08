/* global window */
var Logger = require('../../logger');
var log = new Logger.Log();

var dagreD3 =require('dagre-d3');
//log.debug('setting up dagre-d3');

if (!dagreD3) {
  dagreD3 = window.dagreD3;
}

module.exports = dagreD3;

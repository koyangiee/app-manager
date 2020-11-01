const { context } = require('think-cache');
const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.ctx.body = "Hello World!"
  }
};

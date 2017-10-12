"use strict";
const Homey = require('homey');

class flowbackup extends Homey.App {
	onInit() {
		this.log('init flowbackup')
	}
}
module.exports = flowbackup;

// module.exports.init = function(){};

"use strict";

const btc = require("./coins/btc.js");
const knf = require("./coins/knf.js");

module.exports = {
	"BTC": btc,
	"KNF": knf,

	"coins":["BTC", "KNF"]
};
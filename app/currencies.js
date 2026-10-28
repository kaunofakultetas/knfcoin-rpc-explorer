const coins = require("./coins.js");
const config = require("./config.js");

// the main native unit comes from the active coin (e.g. "btc" -> BTC, "knf" -> KNF)
const defaultCurrencyUnit = coins[config.coin].defaultCurrencyUnit;
const defaultCurrencyId = defaultCurrencyUnit.name.toLowerCase();

global.currencyTypes = {
	[defaultCurrencyId]: {
		id: defaultCurrencyId,
		type:"native",
		name:defaultCurrencyUnit.name,
		multiplier:defaultCurrencyUnit.multiplier,
		default:true,
		decimalPlaces:defaultCurrencyUnit.decimalPlaces
	},
	"sat": {
		id: "sat",
		type:"native",
		name:"sat",
		multiplier:100000000,
		decimalPlaces:0
	},
	"usd": {
		id: "usd",
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		decimalPlaces:2,
		symbol:"$"
	},
	"eur": {
		id: "eur",
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		decimalPlaces:2,
		symbol:"€"
	},
	"gbp": {
		id: "gbp",
		type:"exchanged",
		name:"GBP",
		multiplier:"gbp",
		decimalPlaces:2,
		symbol:"£"
	},
};

global.currencySymbols = {
	"btc": "₿",
	"usd": "$",
	"eur": "€",
	"gbp": "£"
};
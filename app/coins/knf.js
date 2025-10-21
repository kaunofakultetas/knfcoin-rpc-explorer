"use strict";

const Decimal = require("decimal.js");
const Decimal8 = Decimal.clone({ precision:8, rounding:8 });

const blockRewardEras = [ new Decimal8(50) ];
for (let i = 1; i < 34; i++) {
	let previous = blockRewardEras[i - 1];
	blockRewardEras.push(new Decimal8(previous).dividedBy(2));
}

const currencyUnits = [
	{
		type:"native",
		name:"KNF",
		multiplier:1,
		default:true,
		values:["", "knf", "KNF"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mKNF",
		multiplier:1000,
		values:["mknf"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	}
];

module.exports = {
	name:"KNF Coin",
	ticker:"KNF",
	logoUrlsByNetwork:{
		"main":"./img/network-mainnet/logo.svg",
		"test":"./img/network-testnet/logo.svg",
		"regtest":"./img/network-regtest/logo.svg"
	},
	coinIconUrlsByNetwork:{
		"main":"./img/network-mainnet/coin-icon.svg",
		"test":"./img/network-testnet/coin-icon.svg",
		"regtest":"./img/network-regtest/coin-icon.svg"
	},
	coinColorsByNetwork: {
		"main": "#1daf00",
		"test": "#1daf00",
		"regtest": "#777"
	},
	siteTitlesByNetwork: {
		"main":"KNF Coin Explorer",
		"test":"KNF Testnet Explorer",
		"regtest":"KNF Regtest Explorer"
	},
	demoSiteUrlsByNetwork: {
		"main": "",
		"test": ""
	},
	knownTransactionsByNetwork: {
		main: "",
		test: "",
		regtest: ""
	},
	miningPoolsConfigUrls:[],
	maxBlockWeight: 4000000,
	maxBlockSize: 1000000,
	minTxBytes: 166,
	minTxWeight: 166 * 4,
	difficultyAdjustmentBlockCount: 72, // (3 hours * 60 min) / 2.5 min per block = 72 blocks for mainnet
	maxSupplyByNetwork: {
		"main": new Decimal(84000000),
		"test": new Decimal(84000000),
		"regtest": new Decimal(84000000)
	},
	targetBlockTimeSeconds: 150,  // 2.5 minutes
	targetBlockTimeMinutes: 2.5,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"KNF":currencyUnits[0], "mKNF":currencyUnits[1], "sat":currencyUnits[2]},
	baseCurrencyUnit:currencyUnits[2],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	
	halvingBlockIntervalsByNetwork: {
		"main": 840000,
		"test": 840000,
		"regtest": 150
	},

	terminalHalvingCountByNetwork: {
		"main": 32,
		"test": 32,
		"regtest": 32
	},

	coinSupplyCheckpointsByNetwork: {
		"main": [ 0, new Decimal(0) ],
		"test": [ 0, new Decimal(0) ],
		"regtest": [ 0, new Decimal(0) ]
	},

	utxoSetCheckpointsByNetwork: {},
	
	genesisBlockHashesByNetwork:{
		"main":	"8099b90883632e7d02c47ee23d9a02b980c61285d67289bd935e4c1b8f73d5ea",
		"test":	"8099b90883632e7d02c47ee23d9a02b980c61285d67289bd935e4c1b8f73d5ea",
		"regtest": "3b1373a37308f3bb4cbd5c8529f4ddabfe927143da31cfeb7e355dd0feeba1e8"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":	"690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
		"test":	"690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
		"regtest": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6"
	},
	genesisCoinbaseTransactionsByNetwork:{
        "main": {
            "txid": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "hash": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "version": 1,
            "size": 263,
            "vsize": 263,
            "weight": 1052,
            "locktime": 0,
            "vin": [
                {
                    "coinbase": "04ffff001d01042f5655204b4e46202d2046696e746563682053747564696ac5b32050726f6772616d612028323032352d30392d323029",
                    "sequence": 4294967295
                }
            ],
            "vout": [
                {
                    "value": 50.00000000,
                    "n": 0,
                    "scriptPubKey": {
                        "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
                        "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
                        "type": "pubkey"
                    }
                }
            ],
            "blockhash": "8099b90883632e7d02c47ee23d9a02b980c61285d67289bd935e4c1b8f73d5ea",
            "confirmations": 1024,
            "time": 1759089786,
            "blocktime": 1759089786
        },
        "test": {
            "txid": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "hash": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "version": 1,
            "size": 263,
            "vsize": 263,
            "weight": 1052,
            "locktime": 0,
            "vin": [
                {
                    "coinbase": "04ffff001d01042f5655204b4e46202d2046696e746563682053747564696ac5b32050726f6772616d612028323032352d30392d323029",
                    "sequence": 4294967295
                }
            ],
            "vout": [
                {
                    "value": 50.00000000,
                    "n": 0,
                    "scriptPubKey": {
                        "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
                        "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
                        "type": "pubkey"
                    }
                }
            ],
            "blockhash": "8099b90883632e7d02c47ee23d9a02b980c61285d67289bd935e4c1b8f73d5ea",
            "confirmations": 1024,
            "time": 1759089786,
            "blocktime": 1759089786
        },
        "regtest": {
            "txid": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "hash": "690fb8eafb6871d4720b9fa75fffa4a5aac438d80794100e8f6acbcb0b8f6fe6",
            "version": 1,
            "size": 263,
            "vsize": 263,
            "weight": 1052,
            "locktime": 0,
            "vin": [
                {
                    "coinbase": "04ffff001d01042f5655204b4e46202d2046696e746563682053747564696ac5b32050726f6772616d612028323032352d30392d323029",
                    "sequence": 4294967295
                }
            ],
            "vout": [
                {
                    "value": 50.00000000,
                    "n": 0,
                    "scriptPubKey": {
                        "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
                        "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
                        "type": "pubkey"
                    }
                }
            ],
            "blockhash": "3b1373a37308f3bb4cbd5c8529f4ddabfe927143da31cfeb7e355dd0feeba1e8",
            "confirmations": 0,
            "time": 1759089786,
            "blocktime": 1759089786
        }
    },
	genesisBlockStatsByNetwork:{},
	testData: {},
	genesisCoinbaseOutputAddressScripthash:"",
	historicalData: [],
	blockRewardFunction:function(blockHeight, chain) {
		let halvingBlockInterval = (chain == "regtest" ? 150 : 840000);
		let index = Math.floor(blockHeight / halvingBlockInterval);

		return blockRewardEras[index];
	}
};
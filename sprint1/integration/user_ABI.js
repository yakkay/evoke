module.exports.users = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_mission",
				"type": "uint256"
			}
		],
		"name": "approveMission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "createUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "mission",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"name": "set_mission_score",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "points",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "sunbird_id",
				"type": "string"
			}
		],
		"name": "set_skill_points",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "mission",
				"type": "uint256"
			}
		],
		"name": "get_mission_score",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "sunbird_id",
				"type": "string"
			}
		],
		"name": "get_skill_points",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "skill_points",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			}
		],
		"name": "getUserAccount",
		"outputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "mail",
				"type": "string"
			}
		],
		"name": "getUserMissions",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_missions",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
export default [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "passengers",
      "outputs": [
        {
          "name": "isCheckedIn",
          "type": "bool"
        },
        {
          "name": "checkedInTspKey",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "startTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "endTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "transporter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "passenger",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "isCheckedOut",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "isPaid",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "TripCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "tripIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "startTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "endTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "transporter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "passenger",
          "type": "address"
        }
      ],
      "name": "CheckedOut",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "tripIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "transporterAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "passengerAddress",
          "type": "address"
        }
      ],
      "name": "TripPriceSet",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "passengerAddress",
          "type": "address"
        }
      ],
      "name": "getPassenger",
      "outputs": [
        {
          "components": [
            {
              "name": "isCheckedIn",
              "type": "bool"
            },
            {
              "name": "checkedInTspKey",
              "type": "address"
            },
            {
              "components": [
                {
                  "name": "startTimestamp",
                  "type": "uint256"
                },
                {
                  "name": "endTimestamp",
                  "type": "uint256"
                },
                {
                  "name": "isJourneyStart",
                  "type": "bool"
                },
                {
                  "name": "isJourneyEnd",
                  "type": "bool"
                },
                {
                  "name": "journeyId",
                  "type": "uint256"
                },
                {
                  "name": "transporter",
                  "type": "address"
                },
                {
                  "name": "passenger",
                  "type": "address"
                },
                {
                  "name": "isCheckedOut",
                  "type": "bool"
                },
                {
                  "name": "isPaid",
                  "type": "bool"
                },
                {
                  "name": "price",
                  "type": "uint256"
                }
              ],
              "name": "trips",
              "type": "tuple[]"
            }
          ],
          "name": "",
          "type": "tuple"
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
          "name": "passengerAddress",
          "type": "address"
        },
        {
          "name": "tripIndex",
          "type": "uint256"
        }
      ],
      "name": "getTrips",
      "outputs": [
        {
          "components": [
            {
              "name": "startTimestamp",
              "type": "uint256"
            },
            {
              "name": "endTimestamp",
              "type": "uint256"
            },
            {
              "name": "isJourneyStart",
              "type": "bool"
            },
            {
              "name": "isJourneyEnd",
              "type": "bool"
            },
            {
              "name": "journeyId",
              "type": "uint256"
            },
            {
              "name": "transporter",
              "type": "address"
            },
            {
              "name": "passenger",
              "type": "address"
            },
            {
              "name": "isCheckedOut",
              "type": "bool"
            },
            {
              "name": "isPaid",
              "type": "bool"
            },
            {
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "",
          "type": "tuple"
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
          "name": "passengerAddress",
          "type": "address"
        }
      ],
      "name": "getTrips",
      "outputs": [
        {
          "components": [
            {
              "name": "startTimestamp",
              "type": "uint256"
            },
            {
              "name": "endTimestamp",
              "type": "uint256"
            },
            {
              "name": "isJourneyStart",
              "type": "bool"
            },
            {
              "name": "isJourneyEnd",
              "type": "bool"
            },
            {
              "name": "journeyId",
              "type": "uint256"
            },
            {
              "name": "transporter",
              "type": "address"
            },
            {
              "name": "passenger",
              "type": "address"
            },
            {
              "name": "isCheckedOut",
              "type": "bool"
            },
            {
              "name": "isPaid",
              "type": "bool"
            },
            {
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "transporterAddress",
          "type": "address"
        },
        {
          "name": "isJourneyStart",
          "type": "bool"
        }
      ],
      "name": "checkIn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "isJourneyEnd",
          "type": "bool"
        }
      ],
      "name": "checkOut",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "passengerAddress",
          "type": "address"
        },
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "tripStartTimestamp",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tripIndex",
          "type": "uint256"
        }
      ],
      "name": "payForTrip",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "transporterAddress",
          "type": "address"
        },
        {
          "name": "percentage",
          "type": "uint256"
        }
      ],
      "name": "sponsor",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]

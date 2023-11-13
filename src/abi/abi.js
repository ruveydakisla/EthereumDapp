export const KiralamaKontrati = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "mulkAdres",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "kiraBaslangicTarihi",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "kiraBitisTarihi",
        "type": "uint256"
      }
    ],
    "name": "KiralamaOlusturuldu",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "mulkAdres",
        "type": "address"
      }
    ],
    "name": "KiralamaSonlandirildi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      }
    ],
    "name": "YeniKiraciEklendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "mulkAdres",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      }
    ],
    "name": "YeniMulkEklendi",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "kiracilar",
    "outputs": [
      {
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "adresBilgisi",
        "type": "string"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "kiralamalar",
    "outputs": [
      {
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "mulkAdres",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "kiraBaslangicTarihi",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kiraBitisTArihi",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "mulkler",
    "outputs": [
      {
        "internalType": "address",
        "name": "sahipAdres",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "adresBilgisi",
        "type": "string"
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
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "adresBilgisi",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      }
    ],
    "name": "KiraciEkle",
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
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "adresBilgisi",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "sahipAdres",
        "type": "address"
      }
    ],
    "name": "MulkEkle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "kiraciAdres",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "mulkAdres",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "kiralamaBaslangicTarihi",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kiralamaBitisTarihi",
        "type": "uint256"
      }
    ],
    "name": "KiralamaOlustur",
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
        "name": "kiraIndeks",
        "type": "uint256"
      }
    ],
    "name": "KiralamaSonlandir",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
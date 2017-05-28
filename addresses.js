const bitcoin = require('bitcoinjs-lib')
const testnet = bitcoin.networks.testnet

// Create new random addres and a provate key
const keyPair = bitcoin.ECPair
  .makeRandom({network:testnet})

  console.log("address:", keyPair.getAddress())
  console.log("WIF:", keyPair.toWIF())

// From WIF

const bitcoin =  require('bitcoinjs-lib')
const testnet = bitcoin.networks.testnet
const keyPair = bitcoin.ECPair
  .fromWIF(
    // WIF - Wallet Import Format
    'cMzYUBFdpkzYLTiU5BKtWKoMcjYD6CmHdcmsY93g3ym3CjKiLNq1'
    , testnet
  )

const tx = new bitcoin.TransactionBuilder(testnet)
tx.addInput(
  // tx ID of the tx that spend to this address
  '88bedd4c17a0e6e99d1fa6591499dab83b3d041fa4a2bcb1fee39cb048218b69'
  , 1
)


// address to send to, amount (satoshis)
tx.addOutput('miGG3y91ANHh4eAzbekvDiBQb9Xirgv55Z', 100000000 - 500)
tx.sign(0, keyPair)
console.log(tx.build().toHex())

// push it to https://tbtc.blockr.io/tx/push
// 83f5b43ff30944e85818bbb50c29680df7210439a6d507f2175fbd8f6bcc367a

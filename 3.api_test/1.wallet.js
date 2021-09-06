const { ethers } = require('ethers')

// 1. 创建钱包
// const wallet1 = ethers.Wallet.createRandom()
// console.log("privateKey", wallet1.privateKey) // 私钥
// console.log("address", wallet1.address)
// console.log("mnemonic", wallet1.mnemonic)


// 2. 从私钥加载钱包
// const wallet2 = new ethers.Wallet('0xfc8698103a77d211ff1bc1850dc57e951c223aaacd0bda29c4d35807a5b3ec02')
// console.log("address", wallet2.address) //0xDe722A7C886a371BBB8d5A862F3d7aa65575E690


// 3. 从 json 加载钱包
// let data = {
//   id: "fb1280c0-d646-4e40-9550-7026b1be504a",
//   address: "88a5c2d9919e46f883eb62f7b8dd9d0cc45bc290",
//   Crypto: {
//     kdfparams: {
//       dklen: 32,
//       p: 1,
//       salt: "bbfa53547e3e3bfcc9786a2cbef8504a5031d82734ecef02153e29daeed658fd",
//       r: 8,
//       n: 262144
//     },
//     kdf: "scrypt",
//     ciphertext: "10adcc8bcaf49474c6710460e0dc974331f71ee4c7baa7314b4a23d25fd6c406",
//     mac: "1cf53b5ae8d75f8c037b453e7c3c61b010225d916768a6b145adf5cf9cb3a703",
//     cipher: "aes-128-ctr",
//     cipherparams: {
//       iv: "1dcdf13e49cea706994ed38804f6d171"
//     }
//   },
//   "version": 3
// }

// let json = JSON.stringify(data)
// let password = "foo"

// ethers.Wallet.fromEncryptedJson(json, password).then(function (wallet) {
//   console.log("Address: " + wallet.address) // 0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290"
// })

// 4. 从助记词 加载钱包
// const wallet3 = ethers.Wallet.fromMnemonic("business blue cluster sleep monkey walnut gospel differ session bench dinosaur much", "m/44'/60'/0'/0/0")
// console.log(wallet3.privateKey) // 0x03cbd49ef47ce1ea6e8366473822185b0c039175f20ec8866c1538068fcc00c7

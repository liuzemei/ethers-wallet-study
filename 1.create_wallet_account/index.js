const ethers = require('ethers')


const privateKey = ethers.utils.randomBytes(32)
const wallet = new ethers.Wallet(privateKey)

console.log("账号地址为：", wallet.address)
console.log("账号地址为：", wallet.privateKey)




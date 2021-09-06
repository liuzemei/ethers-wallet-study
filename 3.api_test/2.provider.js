const { ethers } = require('ethers')



// 1. 连接默认的 provider homesteam rinkeby ropsten kovan goerli
// 如果不是连接自己运行的以太坊街店，这是推荐的方法
// const provider = ethers.getDefaultProvider("ropsten")
// console.log(provider)


// 2. 连接 web3.js 兼容的api
// const provider = new ethers.providers.Web3Provider()

// 3. 连接 etherscan blockchain web 服务的 api
// const etherscanProvider = new ethers.providers.EtherscanProvider()

// 查询当前的以太坊价格
// etherscanProvider.getEtherPrice().then(console.log)
// 查询一笔转账的交易详情
// let address = '0xb2682160c482eB985EC9F3e364eEc0a904C44C23'
// let startBlock = 3135808
// let endBlock = 5091477
// etherscanProvider.getHistory(address, startBlock, endBlock).then(console.log)

// 4. 连接 INFURA 提供的以太坊节点
// const provider = new ethers.providers.InfuraProvider()

// 5. 连接 指定 的 rpc 节点
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")
// 5.1 查询网络信息
// provider.getNetwork().then(console.log)
// 5.2 查询账户余额
// provider.getBalance("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266").then(balance => console.log(ethers.utils.formatEther(balance)))
// 5.3 查询交易数量
// provider.getTransactionCount("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266").then(console.log)
// 5.4 查询最新区块号
// provider.getBlockNumber().then(console.log)
// 5.5 查询当前 gas 价格
// provider.getGasPrice().then(gas => console.log(ethers.utils.formatEther(gas)))
// 5.6 查询 block 信息 (传入 block 的hash 或者 number)
// provider.getBlock(30).then(block => console.log(block))
// 5.7 查询交易 (传入 transactionHash)
// provider.getTransaction("0x163344880c3e2a730eca1ae3d0196e5c586f60dc5cf81565fb712905e35ec0e8").then(console.log)
// 5.8 查询交易收据 (传入 transactionHash)
// provider.getTransactionReceipt("0x163344880c3e2a730eca1ae3d0196e5c586f60dc5cf81565fb712905e35ec0e8").then(console.log)


// const wallet2 = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider)
// wallet2.getBalance().then(console.log)


// 6. 连接 JSON-RPC API 节点
// let path = "/var/run/parity.ipc";
// let ipcProvider = new ethers.providers.IpcProvider(path);



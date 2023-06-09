require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "goerli",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [ACCOUNT_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    solidity: "0.8.18",
}

// https://eth-ropsten.alchemyapi.io/v2/MlVexXI2EcQFhnEB7IxHlVpil8kDwZtG

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/MlVexXI2EcQFhnEB7IxHlVpil8kDwZtG",
      accounts: [
        "476b46cb22f1e8922c2749fce780076c81ad0fa13cb792cbd41e7a67aa6f014c",
      ],
    },
  },
};

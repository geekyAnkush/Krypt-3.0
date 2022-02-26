// https://eth-ropsten.alchemyapi.io/v2/MlVexXI2EcQFhnEB7IxHlVpil8kDwZtG

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/MlVexXI2EcQFhnEB7IxHlVpil8kDwZtG",
      accounts: [process.env.REACT_APP_KEY],
    },
  },
};

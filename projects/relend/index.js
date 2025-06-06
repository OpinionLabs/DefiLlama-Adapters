const { getCuratorExport } = require("../helper/curators");

// we config vault addresses, we don't use vault owner addresses like other curators
// because RelendNetwork co-curator with B Protocol on some vaults
// these vault owners are B Protocol addresses, so we can't use the vault owner configs
const configs = {
  methodology: 'Count all assets are deposited in all vaults curated by Relend Network.',
  blockchains: {
    ethereum: {
      morpho: [
        '0x0F359FD18BDa75e9c49bC027E7da59a4b01BF32a',
        '0xB9C9158aB81f90996cAD891fFbAdfBaad733c8C6',
      ],
    },
    base: {
      morpho: [
        '0x70F796946eD919E4Bc6cD506F8dACC45E4539771',
      ],
    },
    swellchain: {
      euler: [
        '0xc5976e0356f0A3Ce8307fF08C88bB05933F88761',
      ],
    },
  }
}

module.exports = getCuratorExport(configs)

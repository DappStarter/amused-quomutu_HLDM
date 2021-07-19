require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reward stick unit install photo equal gate'; 
let testAccounts = [
"0xbabb44fc2ea4215aaea38ef69a0651a392553ba29164edbd9bd103f7c327883d",
"0x4e92cef60ac26651ef1548fdee699d3ba65a11a9f5f2b5c7bfc75495b93d6955",
"0x15539db6c10ee2ed9e359bdb9ed590dd162a71ea2a963b89bc65e208016649c2",
"0x97e1deb3521df6eab033ea4967842421af66fe3dad0524a5ea4d3bb8dd89a6a8",
"0x6b02484efcb15e796b10920928088d60bdca316913ba537024ed674e84785a93",
"0x741bd5c62fd3127af71eda418b0d129151a409d827b26e84634c47d38afa2f00",
"0x4389ef82eeb67ffc7b546c11a2c581ab66f302d701362c983ec09fd819ddf4ce",
"0xc1f79466c3f48f11c9b93e4d19088f3a1b75690198caba1caf6985a5256e758b",
"0x8c3f0736ec7bb3c35859d3643cdaf3fff52dc400c05b6e57b42d7b05d5a42bd7",
"0x5c2daa415083009229ecae5d83e43e86a4c6eb84dcc39729105abc8b0f6d96dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



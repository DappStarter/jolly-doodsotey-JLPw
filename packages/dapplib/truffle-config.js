require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stone dash rural mobile hunt permit furnace gas'; 
let testAccounts = [
"0xf367896a4640d06e3a2c43e39a6658b0616508884dc4f84378bfc1b8a5568f29",
"0x61c19432280bed3913c03a8a023f4cea452b30fdc0a679d6698fe2be75bc69ad",
"0x7b3ba51b72d62939ef13ed7def33f264fba62e25791caafc02a0a6534f30f3a9",
"0xab7084efb3241a338743736d309a200d781137d0c7c60d50744cdfa8b4b326db",
"0xc4fec4120ff574cc8a9d7516850287fddfa49e71a09e55dc80f92b19647f1f57",
"0xdb0d08ffe269b4fa6ce8054d1ec4f82377dffb07528fcd2797c91f55ce0ba90a",
"0x5d6a71b087aa3e7b94f8f28bd1f46f8cf0f0969243872a5301bfd9b580cf6dda",
"0xb6daf6feb7c9189fa0b5d9afc8e1069352ab71275652caeada978ca009788f82",
"0x79a829a84567c5b2078eedf022a9cc3e5c129650b644832c022064cb7e849e22",
"0xf3f42ded89b8a68acce6c9f452cc6c489d3c49aaed79f2a628b0f2778bd976f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


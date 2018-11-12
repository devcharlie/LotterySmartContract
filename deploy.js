const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'danger twice debate finger card sun key genre embody erase stamp payment',
    'https://rinkeby.infura.io/v3/d734110aaa8e479280a08f85b8485b3d'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to dpeloy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data : bytecode})
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to: ' + result.options.address);
};
deploy();
# examplethorify

npm install

node_modules/.bin/ts-node index.ts

## src/GenerateAccount.ts 
This file leverages 'thor-model-kit' to generate private key, from which, public key and address can be derived. For more details, you can refer to https://github.com/vechain/thor-model-kit.

## src/deployContract.ts
This file leverages 'thorify', a VeChain version web3, to deploy transaction. For more details, please refer to https://github.com/vechain/thorify. However, 'thorify' is limited to send only one clause inside of each transaction. For sending multi-clause transactions, 'thor-model-kit' and 'Sync' toolkits can be utilized. 


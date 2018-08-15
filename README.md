# examplethorify

npm install


## src/GenerateAccount.ts 
* Running Command: node_modules/.bin/ts-node src/GenerateAccount.ts
* This file leverages [thor-model-kit](https://github.com/vechain/thor-model-kit) to generate private key, from which, public key and address can be derived. For more details, you can refer to https://github.com/vechain/thor-model-kit.

## src/deployContract.ts
* Running Command: node_modules/.bin/ts-node src/deployContract.ts
* This file leverages [thorify](https://github.com/vechain/thorify), a VeChain version web3, to deploy transaction. For more details, please refer to https://github.com/vechain/thorify. However, 'thorify' is limited to send only one clause inside of each transaction. For sending multi-clause transactions, [thor-model-kit](https://github.com/vechain/thor-model-kit) and [Sync](https://github.com/vechain/thor-sync/releases) toolkits can be utilized. 


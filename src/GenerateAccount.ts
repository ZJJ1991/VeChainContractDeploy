'use strict';

import { thorify} from "thorify";
import { Address, Bytes32, BigInt, blake2b256, keccak256, Secp256k1, Transaction } from 'thor-model-kit'
import { userInfo } from "os";
import { origin } from "../config"
const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();
thorify(web3, "http://127.0.0.1:8669");

let privKey = Secp256k1.generatePrivateKey()
console.log("private key: ", privKey.toString())
let pubKey = Secp256k1.derivePublicKey(privKey)
console.log("public key: ", pubKey.toString())
let resultOfCreateAcc = web3.eth.accounts.privateKeyToAccount(privKey.toString());
console.log("resultOfCreateAcc: ", resultOfCreateAcc)

web3.eth.personal.unlockAccount(origin.fromAddress, origin.priKey, 600).then((response:any) => {
    console.log("res of unlock ", response);
}).catch((error:any) => {
    console.log(error);
});
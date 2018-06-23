'use strict';

import { thorify} from "thorify";
import { Address, Bytes32, BigInt, blake2b256, keccak256, Secp256k1, Transaction } from 'thor-model-kit'
import { userInfo } from "os";
import { origin } from "../config"
const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();
thorify(web3, "http://127.0.0.1:8669");

// let privKey = Secp256k1.generatePrivateKey()
// console.log("private key: ", privKey)
// let pubKey = Secp256k1.derivePublicKey(privKey)
// console.log("public key: ", pubKey)
// let addr = Secp256k1.deriveAddress(pubKey)
// console.log("address: ", addr)
// let resultOfCreateAcc = web3.eth.accounts.create(privKey.toString());
// console.log("resultOfCreateAcc: ", resultOfCreateAcc)

web3.eth.personal.unlockAccount("0x5131329a5AE18E8195401c93d99Cae8A6Ae16275", "0x767ce9fd0f40c1758bf1d2b19e0517c51694fb141acf1c8353de79b3b6b0d166", 600).then((response:any) => {
    console.log("res of unlock ", response);
}).catch((error:any) => {
    console.log(error);
});
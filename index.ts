'use strict';

import {thorify} from "thorify";
import { Address, Bytes32, BigInt, blake2b256, keccak256, Secp256k1, Transaction } from 'thor-model-kit'
import { userInfo } from "os";
const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();
thorify(web3, "http://localhost:8669");

let privKey = Secp256k1.generatePrivateKey()
console.log("private key: ", privKey)
let pubKey = Secp256k1.derivePublicKey(privKey)
console.log("public key: ", pubKey)
let addr = Secp256k1.deriveAddress(pubKey)
console.log("address: ", addr)
let resultOfCreateAcc = web3.eth.accounts.create(privKey.toString());
console.log("resultOfCreateAcc: ", resultOfCreateAcc)

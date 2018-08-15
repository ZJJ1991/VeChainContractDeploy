'use strict';

import { thorify} from "thorify";
import { Address, Bytes32, BigInt, blake2b256, keccak256, Secp256k1, Transaction } from 'thor-model-kit'
import { userInfo } from "os";
import { origin } from "../config"


let privKey = Secp256k1.generatePrivateKey()
console.log("private key: ", privKey.toString())
let pubKey = Secp256k1.derivePublicKey(privKey)
console.log("public key: ", pubKey.toString())
let addr = Secp256k1.deriveAddress(pubKey)
console.log("Address: ", addr.toString())

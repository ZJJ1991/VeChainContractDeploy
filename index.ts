'use strict';

import { thorify} from "thorify";
import { origin } from "./config"

const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();
thorify(web3, "http://localhost:8669");


web3.eth.getBalance(origin.fromAddress).then(function(result : any){
    console.log("balance is: ", result)
})


// 0xB50345e5Cfae79B5ffe73Cfe5c5674D9838AD805
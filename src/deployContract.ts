'use strict'

import { thorifyWeb3 } from "./thorifyWeb3";
import fs = require('fs');
import path = require('path');
import { origin } from "../config"
const ThorifyWeb3 = thorifyWeb3();
const web3 = ThorifyWeb3.thorifyAdapter("http://localhost:8669")
import { thorify } from "thorify";

web3.eth.accounts.wallet.add(origin.priKey)
web3.eth.getBalance(origin.fromAddress).then(function(result : any){
    console.log("balance is: ", result)
})


const deploy = async () => {
    // JSON.parse(greeterABI)
    var contract = new web3.eth.Contract(origin.contractABI, origin.contractAddress, {
        from: origin.fromAddress,
        data: origin.contractCode
    })

    contract.deploy({
        arguments: ["ni hao"],
    })
    .send({
        from: origin.fromAddress,
        gasPrice: '31000000000',
        gas: "1500000"
    })
    .on('error', function(error : any){ console.log("contract deploy error", error) })
    .on('transactionHash', function(transactionHash : any){ console.log("contract deploy transaction hash", transactionHash) })
    .on('receipt', function(receipt : any){
       console.log("contract receipt", receipt) // contains the new contract address
    })
    .on('confirmation', function(confirmationNumber : any, receipt : any){ console.log("contract deploy confirmation", confirmationNumber) })
    .then(function(newContractInstance : any){
        console.log("contract Instance: ", newContractInstance.options.address) // instance with the new contract address
    });

}

try {
    deploy();
} catch (e) {
    console.log('error:', e)
}
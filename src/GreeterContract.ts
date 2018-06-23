'use strict'

import { thorifyWeb3 } from "./thorifyWeb3";
import fs = require('fs');
import path = require('path');
import { origin } from "../config"
// const ThorifyWeb3 = thorifyWeb3();
// const web3 = ThorifyWeb3.thorifyAdapter("http://localhost:8669")
// import { thorify } from "thorify";
const thorify = require("thorify").thorify;
const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();
thorify(web3, "http://localhost:8669");
// web3.eth.getBlock("latest").then(function(res: any){console.log("latest block", res)} );

web3.eth.accounts.wallet.add(origin.Address)
web3.eth.getBalance(origin.Address).then(function(result : any){
    console.log("balance is: ", result)
})
let greeterABI = fs.readFileSync(path.join(__dirname, './contracts/Greeter.abi'), {
    encoding: 'utf-8'
});
web3.eth.accounts.wallet.add(origin.Address)
web3.eth.personal.unlockAccount(origin.Address, "0x1ea68dca82e43d2d1b5a50fc15b943ae6f3edbaf9f051a75d3a045d23512dd4e", 600).then((response:any) => {
		console.log("res of unlock ", response);
	}).catch((error:any) => {
		console.log(error);
	});
const deploy = async () => {

    // JSON.parse(greeterABI)
    var contract = new web3.eth.Contract(origin.contractABI, origin.contractAddress, {
        from: origin.Address,
        gas: '4700000',
        data: origin.contractCode
    })

    // console.log("contract ins:", contract)
    contract.deploy({
        // data: origin.contractCode,
        arguments: ["ni hao"],
    })
    .send({
        from: origin.Address,
        gasPrice: '30000000000000',
        gas: "15000"
    })
    .on('error', function(error : any){ console.log("contract deploy error", error) })
    .on('transactionHash', function(transactionHash : any){ console.log("contract deploy transaction hash") })
    .on('receipt', function(receipt : any){
       console.log(receipt.contractAddress) // contains the new contract address
    })
    .on('confirmation', function(confirmationNumber : any, receipt : any){ console.log("contract deploy confirmation") })
    .then(function(newContractInstance : any){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });

    // let contractIns = await web3.eth.sendTransaction({
    //     from: origin.Address,
    //     to: null,
    //     data: origin.contractCode
    // })
    // console.log("contract instance: ", contractIns)

}

try {
    deploy();
} catch (e) {
    console.log('error:', e)
}
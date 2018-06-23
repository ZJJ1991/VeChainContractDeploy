'use strict';

const thorify = require("thorify").thorify;
const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();



const thorifyAdapter = function(port: string){
 
    thorify(web3, port);
    return web3
}

export const thorifyWeb3 = function(){
    return {
        thorifyAdapter
    };
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sushiXSwapChainIds = exports.sushiXSwapAbi = exports.sushiXSwapAddress = exports.isSushiXSwapChainId = exports.sushiXSwapExports = void 0;
exports.sushiXSwapExports = { "1": { "address": "0x011E52E4E40CF9498c79273329E8827b21E2e581", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "10": { "address": "0x8B396ddF906D552b2F98a8E7d743DD58Cd0d920f", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "56": { "address": "0x7A4af156379f512DE147ed3b96393047226d923F", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "137": { "address": "0xd08b5f3e89F1e2d6b067e0A0cbdb094e6e41E77c", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "250": { "address": "0xD045d27c1f7e7f770a807B0a85d8e3F852e0F2BE", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "42161": { "address": "0x53b08DbD70327b7Ba3B7886Fc9987BC985d27262", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] }, "43114": { "address": "0x2c8C987C4777AB740d20Cb581f5d381BE95A4A4a", "abi": [{ "inputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "_bentoBox", "type": "address" }, { "internalType": "contract IStargateRouter", "name": "_stargateRouter", "type": "address" }, { "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "bytes32", "name": "_pairCodeHash", "type": "bytes32" }, { "internalType": "contract IStargateWidget", "name": "_stargateWidget", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "NotStargateRouter", "type": "error" }, { "inputs": [], "name": "TooLittleReceived", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "failed", "type": "bool" }], "name": "StargateSushiXSwapDst", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "srcContext", "type": "bytes32" }], "name": "StargateSushiXSwapSrc", "type": "event" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "approveToStargateRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "bentoBox", "outputs": [{ "internalType": "contract IBentoBoxMinimal", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8[]", "name": "actions", "type": "uint8[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }, { "internalType": "bytes[]", "name": "datas", "type": "bytes[]" }], "name": "cook", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "_dstChainId", "type": "uint16" }, { "internalType": "uint8", "name": "_functionType", "type": "uint8" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_gas", "type": "uint256" }, { "internalType": "uint256", "name": "_dustAmount", "type": "uint256" }, { "internalType": "bytes", "name": "_payload", "type": "bytes" }], "name": "getFee", "outputs": [{ "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pairCodeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }, { "internalType": "bytes", "name": "", "type": "bytes" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "amountLD", "type": "uint256" }, { "internalType": "bytes", "name": "payload", "type": "bytes" }], "name": "sgReceive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stargateRouter", "outputs": [{ "internalType": "contract IStargateRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stargateWidget", "outputs": [{ "internalType": "contract IStargateWidget", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }] } };
const isSushiXSwapChainId = (chainId) => chainId in exports.sushiXSwapExports;
exports.isSushiXSwapChainId = isSushiXSwapChainId;
exports.sushiXSwapAddress = Object.fromEntries(Object.entries(exports.sushiXSwapExports).map(([chainId, data]) => [parseInt(chainId), data.address]));
exports.sushiXSwapAbi = Object.fromEntries(Object.entries(exports.sushiXSwapExports).map(([chainId, data]) => [parseInt(chainId), data.abi]));
exports.sushiXSwapChainIds = Object.keys(exports.sushiXSwapExports).map(chainId => parseInt(chainId));

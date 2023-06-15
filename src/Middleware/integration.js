
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import abi from "./abi.json"

const contractAddress = "0xeeCdcBdA70fF74D3b8B3117aDb6FBf3f6038F880";

export async function connectWallet() {
	try {
        const Provider = await detectEthereumProvider();

		if (Provider) {
            console.log(Provider,"<<<<<<<<");
            const provider = new ethers.providers.Web3Provider(Provider, "any");
			await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			return { success: true, provider };
		} else {
			return { success: false, msg: "Please install Metamask wallet!" };
		}
	} catch (err) {
		return { success: false, msg: "Trouble connecting wallet!" };
	}
}

export async function initializeCall(value){
    try {
        const Provider = await detectEthereumProvider();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	    await delay(500);
        const provider = new ethers.providers.Web3Provider(Provider, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		let tx = await contract.initialize(value);
		await tx.wait();
		return true;
	} catch (err) {
		return false;
	}
}

export async function resetCall(){
    try {
        const Provider = await detectEthereumProvider();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	    await delay(500);
        const provider = new ethers.providers.Web3Provider(Provider, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		let tx = await contract.reset();
		await tx.wait();
		return true;
	} catch (err) {
		return false;
	}
}

export async function createMatchCall(value1,value2){
    try {
        const Provider = await detectEthereumProvider();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	    await delay(500);
        const provider = new ethers.providers.Web3Provider(Provider, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		let tx = await contract.createMatch(value1,value2);
		await tx.wait();
		return true;
	} catch (err) {
		return false;
	}
}

export async function updateMatchResultCall(value1,value2,value3){
    try {
        const Provider = await detectEthereumProvider();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	    await delay(500);
        const provider = new ethers.providers.Web3Provider(Provider, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		let tx = await contract.updateMatchResult(value1,value2,value3);
		await tx.wait();
		return true;
	} catch (err) {
		return false;
	}
}

export async function MatchDataCall(){
    try {
        const Provider = await detectEthereumProvider();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	    await delay(500);
        const provider = new ethers.providers.Web3Provider(Provider, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		let data = await contract.getBracketState();
		return data;
	} catch (err) {
		return false;
	}
}

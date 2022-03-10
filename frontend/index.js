async function main() {
    const { ethers } = require("ethers");
    let provider = await new ethers.providers.JsonRpcProvider();
    const signer = await provider.getSigner();

    let address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


    // The Contract interface
    let abi = [
        "event ValueChanged(address indexed author, string oldValue, string newValue)",
        "constructor(string value)",
        "function getValue() view returns (string value)",
        "function setValue(string value)"
    ];

    // The address from the above deployment example
    let contractAddress = address;
    let contract = await new ethers.Contract(contractAddress, abi, provider);
    let currentValue = await contract.getValue();
    console.log(currentValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

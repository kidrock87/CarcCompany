async function main() {
    const { ethers } = require("ethers");
    let provider = await ethers.getDefaultProvider('ropsten');
    //const signer = await provider.getSigner();

    let address = "0x12dE38d9eCC8964ee37adBbdeBa73439C83f3252";


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
    console.log("sssss: ", currentValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

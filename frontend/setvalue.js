async function main() {

      let provider = await ethers.getDefaultProvider('ropsten');
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



    let privateKey = 'adbc67c9113bc9adcff812f97a0e2da3331ba6b654ac8d45cc08319168a8cd0f';
    let wallet = new ethers.Wallet(privateKey, provider);

    // Create a new instance of the Contract with a Signer, which allows
    // update methods
    let contractWithSigner = contract.connect(wallet);
    // ... OR ...
    // let contractWithSigner = new Contract(contractAddress, abi, wallet)

    // Set a new Value, which returns the transaction
    let tx = await contractWithSigner.setValue("I like turtles1111111111111.");

    // See: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
    console.log(tx.hash);
    // "0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364"

    // The operation is NOT complete yet; we must wait until it is mined
    await tx.wait();

    // Call the Contract's getValue() method again
    let newValue = await contract.getValue();

    console.log("sssssssss: ",newValue);
    // "I like turtles."
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

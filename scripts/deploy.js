async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
/*
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  const ModelFactory = await ethers.getContractFactory("ModelFactory");
  const modelfactory = await ModelFactory.deploy();
*/



  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simplestorage = await SimpleStorage.deploy();

  console.log("simplestorage address:", simplestorage.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

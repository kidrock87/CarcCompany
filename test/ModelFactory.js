const { expect } = require("chai");
describe("Models contract", function () {
  let Model;
  let hardhatToken;
  let owner1;

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    ModelFactory = await ethers.getContractFactory("ModelFactory");
    [owner,models] = await ethers.getSigners();

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens once its transaction has been
    // mined.
    hardhatToken = await ModelFactory.deploy();

  })

  describe("Deployment", function () {
    it("1Should set the right owner", async function () {
      // Expect receives a value, and wraps it in an Assertion object. These
      // objects have a lot of utility methods to assert values
      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });
  })
})

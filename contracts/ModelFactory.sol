pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract ModelFactory is Ownable{

  event NewModel(uint ModelId, string name, uint dna);

  struct Model {
        uint ModelId;
        string name;
        uint price;
  }
  using Counters for Counters.Counter;
  Counters.Counter private ModelId;

  Model[] public models;
//when user buy car
  mapping(address => Model) Orders;

  constructor() public {
    _createModel("Opel", 9000);
    _createModel("Orel", 6000);
  }

  function _createModel(string memory _name, uint _price) private onlyOwner{
        ModelId.increment();
        uint Model_Id = ModelId.current();

        models.push(Model(Model_Id, _name, _price));
        emit  NewModel(Model_Id, _name, _price);
  }

  //get info about car by ModelId
  function getModel(uint _ModelId) public view returns(Model memory) {
    return models[_ModelId];
  }
}

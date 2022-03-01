pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ModelFactory is Ownable{

  event NewModel(uint ModelId, string name, uint dna);

  struct Model {
        uint ModelId;
        string name;
        uint price;
  }
  uint public ModelCount;
  Model[] public models;
//when user buy car
  mapping(address => Model) Orders;

  constructor() public {
    ModelCount = 0;
  }
//meta is Now() from front when car creation start
  function _createModel(string memory _meta ,uint _price, string memory _name) private onlyOwner{
        uint Model_Id = uint(keccak256(abi.encodePacked(_meta)));
        NewModel(Model_Id, _name, _price);
  }



  function getModels() public view returns (Model[] memory){
      Model[] memory id = new Model[](ModelCount);
      for (uint i = 0; i < ModelCount; i++) {
          Model storage model = models[i];
          id[i] = model;
      }
      return id;
  }
  //get info about car by ModelId
  function getModel(uint _ModelId) public view returns(Model memory) {
    return models[_ModelId];
  }
  //function _getModelInfo(){

  //}
}

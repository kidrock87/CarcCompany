pragma solidity ^0.7.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract ModelFactory is Ownable{

  event NewModel(uint ModelId, string name, uint dna);

  struct Model {
        uint ModelId;
        string name;
        uint price;
  }

  Model[] public models;
//when user buy car
  mapping(address => Model) Orders;

//meta is Now() from front when car creation start
  function _createModel(string _meta ,uint _price,string _name) external onlyOwner{
        uint ModelId = keccak256(_meta);
        models.push(Model(ModelId, _name, _dna));
        NewModel(ModelId, _name, _dna);
    }
  //get info about models
  function getModels() public view returns (uint[] memory) {
    return models;
  }
  //get info about car by ModelId
  function _getModelInfo(){

  }
}

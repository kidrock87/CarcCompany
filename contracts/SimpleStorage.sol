pragma solidity ^0.8.0;
contract SimpleStorage {

    event ValueChanged(address indexed author, string oldValue, string newValue);

    string _value;

    constructor() public {
      setValue("Opel");
    }

    function getValue() view public returns (string memory _value) {
        return _value;
    }

    function setValue(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }
}

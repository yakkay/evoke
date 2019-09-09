pragma solidity ^0.5.1;

contract storeValue {
    string value = "Default value: Hello world";
    
    function setValue(string memory newValue)public {
        value = newValue;
    }
    
    function getValue()public view returns(string memory _value){
        return value;
    }
}
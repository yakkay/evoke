pragma solidity ^0.5.1;

contract storeValue {
string value;
    constructor()public{
        value = "Default value";
    }
    
    function setValue(string memory newValue)public {
        value = newValue;
    }
    
    function getValue()public view returns(string memory){
        return value;
    }
}
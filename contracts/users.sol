pragma solidity ^0.5.1;

contract bc_api{
    mapping (uint256 => address)users;
    function setUser(uint256 id, address user)public{
        users[id] = user;
    }
    function gesUser(uint256 id)public view returns(address user){
        user = users[id];
        return user;
    }
}
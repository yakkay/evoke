pragma solidity ^0.5.1;

contract Users{
    struct user {
        address account;
        uint[] missions;
    }
    mapping (string => user) users;
    address Bob;

    constructor()public {
        Bob = msg.sender;
    }

    function setUser(string memory mail,address _account,uint _mission)public{
        require(msg.sender == Bob, "You are not Bob");
        users[mail].account = _account;
        users[mail].missions.push(_mission);
    }

    function getUser(string memory mail)public view returns(address _account,uint[] memory _mission){
        _account = users[mail].account;
        _mission = users[mail].missions;
        return (_account,_mission);
    }
}
pragma solidity ^0.5.1;

contract Users{
    struct user {
        address account;
        uint[] missions;
        bool active;
    }
    mapping (string => user) users;
    address Bob;

    constructor()public {
        Bob = msg.sender;
    }

    function setUser(string memory mail,address _account)public returns(bool success){
        require(msg.sender == Bob, "You are not Bob");
        users[mail].account = _account;
        users[mail].active = true;
        return true;
    }

    function approveMission(string memory mail,uint _mission)public returns(bool success){
        require(msg.sender == Bob, "You are not Bob");
        require(users[mail].active,"User does not exist or is not active");
        users[mail].missions.push(_mission);
        return true;
    }

    function getUser(string memory mail)public view returns(address _account,uint[] memory _mission){
        _account = users[mail].account;
        _mission = users[mail].missions;
        return (_account,_mission);
    }
}
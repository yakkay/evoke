pragma solidity ^0.5.1;

contract Users{
    struct user {
        address account;
        uint[] completed_missions;
        bool active;
    }
    mapping (string => user) users;
    address Bob;

    constructor()public {
        Bob = msg.sender;
    }

    function createUser(string memory mail,address _account)public{
        require(msg.sender == Bob, "You are not Bob");
        users[mail].account = _account;
        users[mail].active = true;
    }

    function setUser(string memory mail,bool status)public {
        require(msg.sender == Bob,"you are not Bob");
        users[mail].active = status;
    }

    function approveMission(string memory mail,uint _mission)public {
        require(msg.sender == Bob, "You are not Bob");
        require(users[mail].active,"User does not exist or is not active");
        users[mail].completed_missions.push(_mission);
    }

    function getUserAccount(string memory mail)public view returns(address _account){
        _account = users[mail].account;
        return _account;
    }

    function getUserMissions(string memory mail)public view returns(uint[] memory _missions){
        _missions = users[mail].completed_missions;
        return _missions;
    }
}
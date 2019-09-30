pragma solidity ^0.5.1;

contract Users{
    struct user {
        address account;
        uint skill_points;
        uint[] completed_missions;
        bool active;
        mapping(uint => uint)mission_score;
    }
    mapping (string => user) users;
    address Bob;

    constructor()public {
        Bob = msg.sender;
    }

    function createUser(string memory sunbird_id,address _account)public{
        //require(msg.sender == Bob, "You are not Bob");
        users[sunbird_id].account = _account;
        users[sunbird_id].active = true;
    }

    function setUser(string memory sunbird_id,bool status)public {
        //require(msg.sender == Bob,"you are not Bob");
        users[sunbird_id].active = status;
    }

    function approveMission(string memory sunbird_id,uint _mission)public {
        //require(msg.sender == Bob, "You are not Bob");
        //require(users[mail].active,"User does not exist or is not active");
        users[sunbird_id].completed_missions.push(_mission);
    }

    function getUserAccount(string memory sunbird_id)public view returns(address _account){
        _account = users[sunbird_id].account;
        return _account;
    }

    function getUserMissions(string memory sunbird_id)public view returns(uint[] memory _missions){
        _missions = users[sunbird_id].completed_missions;
        return _missions;
    }

    function set_mission_score(string memory sunbird_id,uint mission,uint score)public {
	//require(msg.sender == Bob, "You are not Bob");
	users[sunbird_id].mission_score[mission] = score;
    }

    function get_mission_score(string memory sunbird_id,uint mission)public view returns(uint score){
    	score = users[sunbird_id].mission_score[mission];
	    return score;
    }

    function set_skill_points( string memory sunbird_id, uint points)public {
        //require(msg.sender == Bob, "Your are not Bob");
        users[sunbird_id].skill_points = points;
    }

    function get_skill_points(string memory sunbird_id)public view returns(uint skill_points){
        skill_points = users[sunbird_id].skill_points;
        return skill_points;
    }
}

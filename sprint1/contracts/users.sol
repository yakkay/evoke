pragma solidity ^0.5.1;

contract Users{
    struct user {
        string sunbird_id;
        uint skill_points;
        uint[] completed_missions;
        bool active;
        mapping(uint => uint)mission_score;
    }
    mapping (address => user) users;
    address Bob;

    constructor()public {
        Bob = msg.sender;
    }

    function createUser(string memory sunbird_id,address account)public{
        //require(msg.sender == Bob, "You are not Bob");
        users[account].sunbird_id = sunbird_id;
        users[account].active = true;
    }

    function setUser(address account,bool status)public {
        //require(msg.sender == Bob,"you are not Bob");
        users[account].active = status;
    }

    function approveMission(address account,uint _mission)public {
        //require(msg.sender == Bob, "You are not Bob");
        //require(users[mail].active,"User does not exist or is not active");
        users[account].completed_missions.push(_mission);
    }

    function getUserId(address account)public view returns(string memory id){
        id = users[account].sunbird_id;
        return id;
    }

    function getUserMissions(address account)public view returns(uint[] memory missions){
        missions = users[account].completed_missions;
        return missions;
    }

    function set_mission_score(address account,uint mission,uint score)public {
	//require(msg.sender == Bob, "You are not Bob");
	users[account].mission_score[mission] = score;
    }

    function get_mission_score(address account,uint mission)public view returns(uint score){
    	score = users[account].mission_score[mission];
	    return score;
    }

    function set_skill_points(address account, uint points)public {
        //require(msg.sender == Bob, "Your are not Bob");
        users[account].skill_points = points;
    }

    function get_skill_points(address account)public view returns(uint skill_points){
        skill_points = users[account].skill_points;
        return skill_points;
    }
}

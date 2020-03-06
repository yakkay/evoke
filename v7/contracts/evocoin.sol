pragma solidity >=0.4.22 <0.7.0;

contract ERC20 {
    mapping(uint256 =>mapping(uint256 => uint256))Mission_score_reward;

    string public constant Name = "Evocoin";
    string public constant Symbol = "EVC";
    uint8 public constant Decimals = 2;//two decimals: 0.001 EVC could be equivalent to 1 cent of USD$
    uint256 TotalSupply;
    address Owner;

    event Approval(address indexed from, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Pay_reward(address indexed player, uint256 value);

    mapping(address => uint256) balance;
    mapping(address => mapping (address => uint256)) allowed;

    using SafeMath for uint256;


   constructor(uint256 total) public {
        if(total>0){TotalSupply = total;}
        else{TotalSupply = 100000;}
        balance[msg.sender] = TotalSupply;
        Owner = msg.sender;
    }

    function name() public pure returns(string memory){
        return Name;
    }

    function symbol() public pure returns(string memory){
        return Symbol;
    }

    function decimals()public pure returns(uint8){
        return Decimals;
    }

    function totalSupply() public view returns (uint256) {
    return TotalSupply;
    }

    function balanceOf(address user) public view returns (uint256) {
        return balance[user];
    }

    function transfer(address to, uint256 value)public payable returns (bool success) {
        require(value <= balance[msg.sender],"You don't have enough founds");
        balance[msg.sender] = balance[msg.sender].sub(value);
        balance[to] = balance[to].add(value);
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value)public returns (bool) {
        require(value <= balance[from],"The founds are not enough");
        require(value <= allowed[from][msg.sender],"You exceeded the allowed value");
        balance[from] = balance[from].sub(value);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(value);
        balance[to] = balance[to].add(value);
        emit Transfer(from,to,value);
        return true;
    }

    function approve(address spender, uint256 value) public returns (bool) {
        allowed[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint) {
        return allowed[owner][spender];
    }

    function pay_mission_score_user(uint256 mission_id,uint256 score, address user)public returns(bool){
        require(msg.sender == Owner,"only the owner can pay");
        require(Mission_score_reward[mission_id][score] <= balance[msg.sender],"You don't have enough founds");
        uint256 reward = Mission_score_reward[mission_id][score];
        if(score == 1 && reward == 0){reward = 1;}
        if(score == 2 && reward == 0){reward = 2;}
        balance[msg.sender] = balance[msg.sender].sub(reward);
        balance[user] = balance[user].add(reward);
        emit Pay_reward(user,reward);
        return true;
    }

    function set_mission_score_reward(uint256 mission_id,uint256 score, uint reward)public returns(bool){
        Mission_score_reward[mission_id][score] = reward;
        return true;
    }
    function get_mission_score_reward(uint256 mission_id,uint256 score)public view returns(uint256){
        uint256 reward = Mission_score_reward[mission_id][score];
        if(score == 1 && reward == 0){reward = 1;}
        if(score == 2 && reward == 0){reward = 2;}
        return reward;
    }
}

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
      assert(b <= a);
      return a - b;
    }
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
      uint256 c = a + b;
      assert(c >= a);
      return c;
    }
}

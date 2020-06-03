pragma solidity >=0.4.22 <0.7.0;
contract ERC20 {
    string public constant Name = "Evocoin";
    string public constant Symbol = "EVC";
    uint8 public constant Decimals = 2;//two decimals: 0.001 EVC could be equivalent to 1 cent of USD$
    uint256 TotalSupply;
    uint256 TotalRedeemed;
    address Owner;
    mapping(address => uint256) balance;
    mapping(address => uint256) redeemed;
    mapping(address => mapping (address => uint256)) allowed;
    event Transfer(address indexed from, address indexed to, uint256 value);
    using SafeMath for uint256;


   constructor(uint256 total) public {
        if(total>0){TotalSupply = total;}
        else{TotalSupply = 880000000;}
        Owner = msg.sender;
        balance[Owner] = TotalSupply;
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

    function redeemedOf(address user) public view returns (uint256) {
        return redeemed[user];
    }

    function transfer(address to, uint256 value)public payable returns (bool success) {
        require(value <= balance[msg.sender],"You don't have enough founds");
        balance[msg.sender] = balance[msg.sender].sub(value);
        balance[to] = balance[to].add(value);
        emit Transfer(msg.sender, to, value);
        if (msg.sender != Owner){
            redeemed[msg.sender] = redeemed[msg.sender].add(value);
            TotalRedeemed = TotalRedeemed.add(value);
        }
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
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint) {
        return allowed[owner][spender];
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

pragma solidity ^0.5.1;

contract ERC20 {

    string public constant _name = "Ruby";
    string public constant _symbol = "RUBY";
    uint8 public constant _decimals = 18;
    uint256 _totalSupply;

    event Approval(address indexed from, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    mapping(address => uint256) balance;
    mapping(address => mapping (address => uint256)) allowed;

    using SafeMath for uint256;


   constructor(uint256 total) public {
        if(total>0){_totalSupply = total;}else{_totalSupply = 1000000000000000000;}
        balance[msg.sender] = _totalSupply;
    }

    function name() public pure returns(string memory){
        return _name;
    }

    function symbol() public pure returns(string memory){
        return _symbol;
    }

    function decimals()public pure returns(uint8){
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
    return _totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint) {
        return balance[_owner];
    }

    function transfer(address _to, uint value)public payable returns (bool success) {
        require(value <= balance[msg.sender],"You don't have enough founds");
        balance[msg.sender] = balance[msg.sender].sub(value);
        balance[_to] = balance[_to].add(value);
        emit Transfer(msg.sender, _to, value);
        return true;
    }

    function transferFrom(address _from, address _to, uint _value)public returns (bool) {
        require(_value <= balance[_from],"The founds are not enough");
        require(_value <= allowed[_from][msg.sender],"You exceeded the allowed value");
        balance[_from] = balance[_from].sub(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        balance[_to] = balance[_to].add(_value);
        emit Transfer(_from,_to,_value);
        return true;
    }

    function approve(address _spender, uint _value) public returns (bool) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint) {
        return allowed[_owner][_spender];
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

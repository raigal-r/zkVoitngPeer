// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
//import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract PeerUSDC is ERC20 {
    constructor() ERC20("PeerUSDC", "PUSDC") {}

    function _afterTokenTransfer(address from, address to, uint256 amount) internal override(ERC20) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20) {
        super._burn(account, amount);
    }

    function mint(uint256 amount, address receiver) public {
        _mint(receiver, amount);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {IPaymaster, ExecutionResult, PAYMASTER_VALIDATION_SUCCESS_MAGIC} 
from  "@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IPaymaster.sol";
import {IPaymasterFlow} from  "@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IPaymasterFlow.sol";
import {TransactionHelper, Transaction} from "@matterlabs/zksync-contracts/l2/system-contracts/libraries/TransactionHelper.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";

import "@matterlabs/zksync-contracts/l2/system-contracts/Constants.sol";

contract VotingPaymasterWithLimit is IPaymaster, Ownable {

    mapping(uint256 => uint256) public proposalsFees;
    address public USDCdAPIProxy;
    address public ETHdAPIProxy;
    address public governer;

    modifier onlyBootloader() {
        require(
            msg.sender == BOOTLOADER_FORMAL_ADDRESS,
            "Only bootloader can call this method"
        );
        // Continue execution if called from the bootloader.
        _;
    }

    constructor(address _governer) {
        governer = _governer;
    }

    function setDapiProxy(address _USDCproxy, address _ETHproxy) 
    public onlyOwner {
        USDCdAPIProxy = _USDCproxy;
        ETHdAPIProxy = _ETHproxy;
    }

    function readDapi(address _dapiProxy) public view returns (uint256) {
        (int224 value, ) = IProxy(_dapiProxy).read();
        uint256 price = uint224(value);
        return price;
    }

    function validateAndPayForPaymasterTransaction(
        bytes32,
        bytes32,
        Transaction calldata _transaction
    )
        external
        payable
        onlyBootloader
        returns (bytes4 magic, bytes memory context)
    {
        // By default we consider the transaction as accepted.
        magic = PAYMASTER_VALIDATION_SUCCESS_MAGIC;
        require(
            _transaction.paymasterInput.length >= 4,
            "The standard paymaster input must be at least 4 bytes long"
        );

        bytes4 paymasterInputSelector = bytes4(
            _transaction.paymasterInput[0:4]
        );
        if (paymasterInputSelector == IPaymasterFlow.general.selector) {

            address target = address(uint160(_transaction.to));

            require(
                target == governer,
                "Transaction are subsidized only for our governer" 
            );
            
            // use API3 to get USDC and ETH prices in USD
            uint256 ETHUSDCPrice = readDapi(ETHdAPIProxy);
            uint256 USDCUSDPrice = readDapi(USDCdAPIProxy);

            // calculate the required Eth
            uint256 requiredETH = _transaction.gasLimit *
                _transaction.maxFeePerGas;

            // calculate Eth fees amount in USDC
            uint256 requiredERC20 = (requiredETH * ETHUSDCPrice)/USDCUSDPrice;

            // get proposolId from transaction data
            uint256 proposalId;
            bytes memory transactionInput = _transaction.data;
            assembly {
                proposalId := mload(add(transactionInput, 36))
            }
            
            // check if the total susidized fees for this proposal didn't reach the limit
            // we allow only a specific amount from DAO treasury
            require(
                proposalsFees[proposalId] + requiredERC20 <= 10000000000000000000000000,
                "Total Subsidized fees limit is reached"
            );

            proposalsFees[proposalId] = proposalsFees[proposalId] + requiredERC20;

            // The bootloader never returns any data, so it can safely be ignored here.
            (bool success, ) = payable(BOOTLOADER_FORMAL_ADDRESS).call{
                value: requiredETH
            }("");
            require(
                success,
                "Failed to transfer tx fee to the bootloader. Paymaster balance might not be enough."
            );
        } else {
            revert("Unsupported paymaster flow");
        }
    }

    function postTransaction(
        bytes calldata _context,
        Transaction calldata _transaction,
        bytes32,
        bytes32,
        ExecutionResult _txResult,
        uint256 _maxRefundedGas
    ) external payable override onlyBootloader {
    }

    receive() external payable {}
}
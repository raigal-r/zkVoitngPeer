# zkVoitngPeer
ETH Barcelona Hackathon

# Paymaster and API3 on ZkSync
We have implemented a Paymaster system to cover the transaction fees associated with voting on governance proposals. This approach aims to democratize and incentivize voting by allowing users to vote without having to pay transaction fees. The Paymaster is funded either from the DAO treasury or from another designated address.

To ensure sustainability, we have set a limit on the sponsored transaction fees. For example, we may cover transaction fees up to a maximum of $100 USD per proposal. To calculate the total amount of transaction fees incurred for each proposal, we have integrated with the API3 service. This allows us to accurately determine the fees associated with each proposal and ensure the Paymaster remains within the predefined limits. you can find more technical details here
[contracts](smartcontracts/README.md) 

# Challenges
## Timestamp on L2
We encountered several challenges while implementing our voting system. One significant issue we faced was related to the usage of block.timestamp for defining the start and end of the voting period. Initially, we expected the timestamps to be in the Unix timestamp format, as commonly used on Layer 1 (L1) blockchains.

However, the block.timestamp value on ZkSync seems to have a different format or representation. This inconsistency caused compatibility issues and resulted in incorrect time calculations for the start and end of the voting period. As a result, the system was unable to accurately determine the voting duration.
## 

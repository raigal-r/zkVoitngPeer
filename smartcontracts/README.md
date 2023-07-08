# Turorial

1. `yarn install`  
2. `yarn hardhat deploy-zksync --script deploy/deploy-governor.ts`
3. copy/paste the `GOVERNOR_ADDRESS` in `deploy/deploy-master-with-limit.ts`
4. run this to deploy the paymaster `yarn hardhat deploy-zksync --script deploy/deploy-master-with-limit.ts`
5. crate a proposal quickly with this command `yarn hardhat deploy-zksync --script deploy/create-proposal.ts`
6. use the proposalId to cast vote using this command `yarn hardhat deploy-zksync --script deploy/cast-vote-with-paymaster-limit.ts`
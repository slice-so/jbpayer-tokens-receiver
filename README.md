# JB Project Payer Extension – Tokens Receiver

This repo contains extensions of `JBETHERC20ProjectPayer` which which makes it possible for JB treasuries to integrate with Slice, and more in general to receive ERC721 and ERC1155 tokens.

`JBETHERC20ProjectPayerTokensReceiver` includes logic to:

- Receive ERC1155 and ERC721 tokens
- Transfer ERC1155, ERC721 and ERC20 tokens received (OnlyOwner)

This basically turns the contract into a **NFT vault for JB treasuries**, while allowing projects to use [Slice protocol](https://slice.so) and **split payments or sell anything fully on-chain via decentralized stores**.

> The contract can be deployed directly, via a `JBETHERC20ProjectPayerERC1155ReceiverDeployer` contract, or via a clone factory `JBETHERC20ProjectPayerTokensReceiverCloneDeployer` (cheapest method).

## Usage

1. Deploy or clone contract
2. Send ERC1155 or ERC721 tokens to it
3. Contract owner (ideally also JB project owner) can send them out of contract to a desired address

### Usage with Slice

This contract is able to receive `Slices` (ERC1155 tokens) and receive income from a slicer. It acts as a bridge contract between the Slice protocol and a JB treasury.

- Slices can be sent either during [slicer creation](https://slice.so/slice) or via token transfer
- Earnings from a slicer can be withdrawn by going to its page on Slice.so and releasing the due amount from the `See owners` section

## Deployment - Immutable clones

These extensions can be deployed by running `scripts/clone.ts`, or using the interface provided by Slice at [slice.so/jbpayer](https://slice.so/jbpayer) (on Rinkeby, [testnet.slice.so/jbpayer](https://testnet.slice.so/jbpayer))

> [Immutable clones](https://docs.openzeppelin.com/contracts/4.x/api/proxy#Clones) allow to reduce deployment cost of `project payer` by ~80-85%.

### Contracts

The following contracts can be found in `contracts/clone`:

- `JBETHERC20ProjectPayerClone`: Clone implementation of original `JBETHERC20ProjectPayer`
- `JBETHERC20ProjectPayerERC1155ReceiverClone`: Clone implementation of `JBETHERC20ProjectPayerERC1155Receiver`
- `JBETHERC20ProjectPayerERC1155ReceiverCloneDeployer`: Factory contract to deploy and initialize `JBETHERC20ProjectPayerERC1155ReceiverClone` clones.
- `JBETHERC20ProjectPayerTokensReceiverClone`: Clone implementation of `JBETHERC20ProjectPayerTokensReceiver`
- `JBETHERC20ProjectPayerTokensReceiverCloneDeployer`: Factory contract to deploy and initialize `JBETHERC20ProjectPayerTokensReceiverClone` clones.

#### ERC1155 Receiver

`JBETHERC20ProjectPayerERC1155Receiver` contracts contains the same logic, just without support for ERC721 tokens.

### Deployed addresses

- Rinkeby Clone Factory: `0x3991cb7d214Ffb94ad792a45D329d2bCF977961B`
- Ethereum Mainnet Clone Factory: `0x76dad5968ab456b5a36698a252b30488a1a4f767`

> See full list of addresses in [addresses.json](https://github.com/slice-so/jbpayer-tokens-receiver/blob/master/addresses.json)

## Scripts

- `deploy`: Deploys instance of `JBETHERC20ProjectPayerTokensReceiver`
- `deployFactory`: Deploys instance of `JBETHERC20ProjectPayerTokensReceiverCloneDeployer` or `JBETHERC20ProjectPayerTokensReceiverDeployer` (default is clone factory)
- `clone`: Deploys [immutable clone proxy]() of `JBETHERC20ProjectPayerTokensReceiverClone`, via factory contract
- `transferERC20`: Script to test ERC20 transfers from jb-payer contract
- `transferERC1155`: Script to test ERC1155 transfers from jb-payer contract

## Examples

- Example clone implementation contract: [0xa258299345ea4490A0323035249fE33198283789](https://rinkeby.etherscan.io/address/0xa258299345ea4490a0323035249fe33198283789)
- [This JB V2 treasury on Rinkeby](https://rinkeby.juicebox.money/#/v2/p/4236) has used the contract above to direct income from Slice directly into the treasury, upon withdraw. (Note: tx don't appear in the _activity_ section as `addToBalance` is used instead of `pay`. See this [transaction on Etherscan](https://rinkeby.etherscan.io/tx/0x048c7579cd6bd7943b93c965c5e8b04c5e5ddf3852812991fb7ecea276513355) for more details)
- See all relevant Rinkeby and mainnet deployments in [addresses.json](https://github.com/slice-so/jbpayer-tokens-receiver/blob/master/addresses.json)

## Caveats

- Slice mints SLX tokens to slicer owners, so the jb-payer contract also ends up holding an amount of SLX when used with Slice protocol. The `_transferERC20To` function was added to allow the contract owner to transfer these tokens out of the contract.

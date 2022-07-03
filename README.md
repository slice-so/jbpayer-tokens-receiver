# JB Project Payer Extension – Tokens Receiver

This repo contains extensions of `JBETHERC20ProjectPayer` which allow JB treasuries to directly use Slice, and more in general to receive ERC721 and ERC1155 tokens.

`JBETHERC20ProjectPayerTokensReceiver` includes logic to:

- Receive ERC1155 and ERC721 tokens
- Transfer ERC1155, ERC721 and ERC20 tokens received (OnlyOwner)

This basically turns the contract into a **NFT vault for JB treasuries**, and allows projects to integrate with [Slice protocol](https://slice.so) and **split payments or sell anything fully on-chain via decentralized stores**.

> The contract can be deployed directly, via a `JBETHERC20ProjectPayerERC1155ReceiverDeployer` contract, or via a clone factory `JBETHERC20ProjectPayerTokensReceiverCloneDeployer` (cheapest method).

## Deployment - Immutable clones

[Immutable clones](https://docs.openzeppelin.com/contracts/4.x/api/proxy#Clones) allow to reduce deployment cost of `project payer` by ~80-85%. The following contracts can be found in `contracts/clone`:

- `JBETHERC20ProjectPayerClone`: Clone implementation of original `JBETHERC20ProjectPayer`
- `JBETHERC20ProjectPayerERC1155ReceiverClone`: Clone implementation of `JBETHERC20ProjectPayerERC1155Receiver`
- `JBETHERC20ProjectPayerERC1155ReceiverCloneDeployer`: Factory contract to deploy and initialize `JBETHERC20ProjectPayerERC1155ReceiverClone` clones.
- `JBETHERC20ProjectPayerTokensReceiverClone`: Clone implementation of `JBETHERC20ProjectPayerTokensReceiver`
- `JBETHERC20ProjectPayerTokensReceiverCloneDeployer`: Factory contract to deploy and initialize `JBETHERC20ProjectPayerTokensReceiverClone` clones.

### ERC1155 Receiver

`JBETHERC20ProjectPayerERC1155Receiver` contracts contains the same logic, just without support for ERC721 tokens.

## Scripts

- `deploy`: Deploys instance of `JBETHERC20ProjectPayerTokensReceiver`
- `deployFactory`: Deploys instance of `JBETHERC20ProjectPayerTokensReceiverCloneDeployer` or `JBETHERC20ProjectPayerTokensReceiverDeployer` (default is clone factory)
- `clone`: Deploys [immutable clone proxy]() of `JBETHERC20ProjectPayerTokensReceiverClone`, via factory contract
- `transferERC20`: Script to test ERC20 transfers from jb-payer contract
- `transferERC1155`: Script to test ERC1155 transfers from jb-payer contract

## Examples

- Example clone implementation contract: [0xa258299345ea4490A0323035249fE33198283789](https://rinkeby.etherscan.io/address/0xa258299345ea4490a0323035249fe33198283789)
- [This JB V2 treasury on Rinkeby](https://rinkeby.juicebox.money/#/v2/p/4236) shows how the contract above was used to direct income from Slice directly into the treasury, upon withdraw.
- See all relevant Rinkeby and mainnet deployments in [addresses.json](https://github.com/slice-so/jbpayer-tokens-receiver/blob/master/addresses.json)

## Caveats

- Slice mints SLX tokens to slicer owners, so the jb-payer contract also ends up holding an amount of SLX when used with Slice protocol. The `_transferERC20To` function was added to allow the contract owner to transfer these tokens out of the contract.

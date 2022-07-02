# JBPayer ERC1155Receiver

This repo contains extensions of `JBETHERC20ProjectPayer` to allow JB treasuries to directly use Slice, and more in general to allow usage with tokens.

`JBETHERC20ProjectPayerERC1155Receiver` includes logic to:

- Receive ERC1155 tokens
- Transfer ERC1155 and ERC20 tokens received (OnlyOwner)

The contract can be deployed directly or via a `JBETHERC20ProjectPayerERC1155ReceiverDeployer` contract.

## Clones

Immutable clones allow to reduce deployment cost of `project payer` by ~80-85%. The following contracts can be found in `contracts/clone`:

- `JBETHERC20ProjectPayerClone`: Clone implementation of original `JBETHERC20ProjectPayer`
- `JBETHERC20ProjectPayerERC1155ReceiverClone`: Clone implementation of `JBETHERC20ProjectPayerERC1155Receiver`
- `JBETHERC20ProjectPayerERC1155ReceiverCloneDeployer`: Factory contract to deploy and initialize `JBETHERC20ProjectPayerERC1155ReceiverClone` clones.

## Tokens Receiver

`JBETHERC20ProjectPayerTokensReceiver` can also receive and transfer ERC721, which basically turns the contract into a NFT vault for JB treasuries.

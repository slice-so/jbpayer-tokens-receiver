import { ethers } from "hardhat"
import addresses from "../addresses.json"

const env = "testnet" // tesntet OR mainnet

// Constructor variables
const _defaultProjectId = 4236
const _defaultBeneficiary = ethers.constants.AddressZero
const _defaultPreferClaimedTokens = true
const _defaultMemo = "Sent from Slice"
const _defaultMetadata = [] as any
const _directory = addresses[env].JBDirectory
const _owner = "0xAe009d532328FF09e09E5d506aB5BBeC3c25c0FF"

async function main() {
  // AddToBalance preferred to avoid ERC20 being minted to Slice {fundsModule}
  const _defaultPreferAddToBalance =
    _defaultBeneficiary == ethers.constants.AddressZero

  console.log("deploying")

  const CONTRACT = await ethers.getContractFactory(
    "JBETHERC20ProjectPayerTokensReceiver"
  )
  const contract = await CONTRACT.deploy(
    _defaultProjectId,
    _defaultBeneficiary,
    _defaultPreferClaimedTokens,
    _defaultMemo,
    _defaultMetadata,
    _defaultPreferAddToBalance,
    _directory,
    _owner
  )
  await contract.deployed()

  console.log("Contract deployed successfully! Address: " + contract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

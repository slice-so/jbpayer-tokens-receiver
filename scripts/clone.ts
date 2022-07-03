import { ethers } from "hardhat"
import { JBETHERC20ProjectPayerTokensReceiverCloneDeployer } from "../typechain-types/JBETHERC20ProjectPayerTokensReceiverCloneDeployer"
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

  console.log("Cloning")

  const deployFactory = (await ethers.getContractAt(
    "JBETHERC20ProjectPayerTokensReceiverCloneDeployer",
    addresses[env].DeployCloneFactory
  )) as JBETHERC20ProjectPayerTokensReceiverCloneDeployer

  const cloneTx = await deployFactory.cloneProjectPayer(
    _defaultProjectId,
    _defaultBeneficiary,
    _defaultPreferClaimedTokens,
    _defaultMemo,
    _defaultMetadata,
    _defaultPreferAddToBalance,
    _directory,
    _owner
  )
  const events = (await cloneTx.wait()).events
  const cloneAddress = events && events[0].address

  console.log("Contract clone deployed successfully! Address: " + cloneAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

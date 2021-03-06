import { ethers } from "hardhat"
import { JBETHERC20ProjectPayerTokensReceiver } from "../typechain-types/JBETHERC20ProjectPayerTokensReceiver"
import addresses from "../addresses.json"

const projectPayer = ""
const erc1155 = addresses["testnet"].SliceCore // Rinkeby Slice ERC1155
const to = ""
const id = 0
const amount = 0

async function main() {
  console.log("Transferring")

  const jbpp = (await ethers.getContractAt(
    "JBETHERC20ProjectPayerTokensReceiver",
    projectPayer
  )) as JBETHERC20ProjectPayerTokensReceiver

  await jbpp._safeTransferERC1155To(erc1155, to, id, amount)

  console.log("Tokens transferred successfully")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

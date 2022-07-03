import { ethers } from "hardhat"
import { JBETHERC20ProjectPayerTokensReceiver } from "../typechain-types/JBETHERC20ProjectPayerTokensReceiver"

const projectPayer = ""
const erc20 = "0x4F6Ff17F5dCb4f413C5f1b7eC42D6c18666452B0" // Rinkeby SLX
const to = ""
const amount = 0

async function main() {
  console.log("Transferring")

  const jbpp = (await ethers.getContractAt(
    "JBETHERC20ProjectPayerTokensReceiver",
    projectPayer
  )) as JBETHERC20ProjectPayerTokensReceiver

  await jbpp._transferERC20To(erc20, to, amount)

  console.log("Tokens transferred successfully")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const hardhat = require("hardhat");

const ethers = hardhat.ethers;

const config = {};

async function main() {
  await hardhat.run("compile");

  const Token = await ethers.getContractFactory("3dToken");
  const BnbStaking = await ethers.getContractFactory("BnbStaking");

  const [deployer] = await ethers.getSigners();

  const token = await Token.deploy();
  await token.deployed();

  const bnbStaking = await BnbStaking.deploy();
  await bnbStaking.deployed();

  console.log("Token deployed to:", token.address);
  console.log("BnbStaking deployed to:", bnbStaking.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


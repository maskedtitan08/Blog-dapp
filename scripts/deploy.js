const hre = require("hardhat");

async function main() {

  // const medium = await hre.ethers.deployContract("Medium", "Medium Blog","Blog","10000000000000000000");
  const medium = await hre.ethers.deployContract("Medium" ,["Medium Blog","Blog" ,"10000000000000000000"]);
  

  await medium.waitForDeployment();

  console.log("Contract deployed to", medium.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

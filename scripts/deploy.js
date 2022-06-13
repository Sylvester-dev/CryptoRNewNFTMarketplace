const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();
 
  const CryptoR = await hre.ethers.getContractFactory("CryptoR");
  const cryptoR = await CryptoR.deploy();

  await cryptoR.deployed();

  console.log("CryptoR deployed to:", cryptoR.address);

  //2.
  const PaymentGateway = await hre.ethers.getContractFactory("PaymentGateway");
  const paymentGateway = await PaymentGateway.deploy();

  await paymentGateway.deployed();

  console.log("paymentGateway deployed to:", paymentGateway.address);
  
  //3.
  const CryptoRMarketplace = await hre.ethers.getContractFactory("CryptoRMarketplace");
  const cryptoRMarketplace = await CryptoRMarketplace.deploy(cryptoR.address,paymentGateway.address,"0xef27136A30907107b2fcC6B3a066351565b5e3f4");

  await cryptoRMarketplace.deployed();

  console.log("cryptoRMarketplace deployed to:", cryptoRMarketplace.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

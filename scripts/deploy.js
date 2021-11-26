const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('NFTGame');
    console.log("Deploying contract...")
    const gameContract = await gameContractFactory.deploy(                     
        ["Bulbasaur", "Charmander", "Squirtle"],       // Names
        ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", // Images
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", 
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"],
        [300, 200, 100],                    // HP values
        [25, 50, 100],                       // Attack damage values
        "Morterozord", // Boss name
        "https://www.infobae.com/new-resizer/z1016_oQHnd16lNj9IT5x-N2p14=/1200x900/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/OQNMJ35SONFQ3MTT2CT3QTGIPA.jpg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
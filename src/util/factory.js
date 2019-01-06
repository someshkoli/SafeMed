import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0x122f850AC530D1F0C4CA62F3D4810a0d24a69867"
);

export default instance;

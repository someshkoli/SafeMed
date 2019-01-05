import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0x674A02A3AF30712329770409dC20d20644141A67"
);

export default instance;
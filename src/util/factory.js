import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0x487322ccf4af581d24f4aca278399106496c1c79"
);
export default instance;

import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0x043d96AFbdc584f230c364D266a399327f45e274"
);

export default instance;

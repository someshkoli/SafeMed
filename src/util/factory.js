import GetWeb3 from "./getWeb3";
import { RecordFactory } from "./build/RecordFactory.json";

const instance = new GetWeb3.eth.Contact(
    JSON.parse(RecordFactory.interface), "0x674A02A3AF30712329770409dC20d20644141A67"
);

export default instance;
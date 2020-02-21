import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  let ethereum=enableMetaMask()
  console.log(ethereum)
  web3 = new Web3(ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'hHTTP://127.0.0.1:7545'
  );
  web3 = new Web3(provider);
}
function enableMetaMask(){
  let ethereum= window.ethereum;
  ethereum.enable();
  return ethereum;
}

export default web3;
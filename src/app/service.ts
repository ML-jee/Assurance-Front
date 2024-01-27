import { MetaMaskSDK } from '@metamask/sdk';

const MMSDK = new MetaMaskSDK(
  dappMetadata: {
    name: "Example JavaScript Dapp",
    url: window.location.host,
  }
  // Other options
);

const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

ethereum.request({ method: 'eth_requestAccounts', params: [] });

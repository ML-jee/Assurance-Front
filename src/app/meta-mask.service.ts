import { Injectable } from '@angular/core';
import contractABI from './ABI/Verification.json';
import profileContractABI from './ABI/profileContractABI.json';
import MaRetraiteContractABI from './ABI/contracts/contratPersonaliser/MaRetraite.sol/MaRetraite.json';
import Web3 from 'web3';

declare let window: any;

const contractAddress = "0xa73fd1656df1d4233a070a4e78ecc34df7162457";
const profileContractAddress = "0x7c44626DFA8Bfac9f326Fd9dfeFEE8daBF8f1977";
const MaRetraiteContractAddress = "0xb7e711F6a58E70A7DBE8ACD5B499153Fbed1Ee93";


@Injectable({
  providedIn: 'root',
})
export class MetaMaskService {
  contract: any;
  connectMetaMask() {
    throw new Error('Method not implemented.');
  }
  private web3: any;
  private solde!: number;
  private adresse!: string;
  private privateKey!: string;
  private publicKey!: string;
  connectedAccount: string | undefined;

  constructor() {
    this.init();
  }

  private init(): void {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.enable()
        .then(() => {
          this.web3 = new Web3(window.ethereum);

          // Initialize your attributes with necessary values
          this.initializeAttributes();

          console.log('MetaMask is enabled.');
        })
        .catch((error: any) => {
          console.error('Error enabling MetaMask:', error);
        });
    } else {
      console.warn('MetaMask not detected!');
    }
  }

  private initializeAttributes(): void {
    // You can set your attributes with necessary values here
    this.solde = 0; // Set the initial value for solde
    this.adresse = '0x0E0a7edd5D401a5595E218A8490B4C1F86C85CbD'; // Set the initial value for adresse
    this.privateKey = ''; // Set the initial value for privateKey
    this.publicKey = ''; // Set the initial value for publicKey
  }

  getWeb3(): any {
    return this.web3;
  }

  isMetaMaskEnabled(): boolean {
    return typeof window.ethereum !== 'undefined';
  }

  async switchToSepolia(): Promise<void> {
    try {
      // Request user to switch to Sepolia
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }], // Chain ID for Sepolia in hexadecimal
      });
    } catch (switchError) {
      if ((switchError as any).code === 4902) {
        try {
          // If Sepolia is not added to user's MetaMask, add it
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xaa36a7',
                chainName: 'Sepolia',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.sepolia.org'],
              },
            ],
          });
        } catch (addError) {
          console.error('Failed to add Sepolia network to MetaMask', addError);
        }
      } else {
        console.error('Failed to switch to Sepolia network', switchError);
      }
    }
  }

  async connectWallet(): Promise<void> {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const networkId = await window.ethereum.request({
          method: 'net_version',
        });

        if (networkId !== '100') {
          // Network ID for Sepolia
          await this.switchToSepolia();
        }

        // user enables the app to connect to MetaMask
        // Assuming setWeb3, setContract, setAccount are methods you have in your service
        const contractInstance = new this.web3.eth.Contract(
          MaRetraiteContractABI,
          MaRetraiteContractAddress
        );
        this.contract=contractInstance;

        // const profileContractInstance = new tempWeb3.eth.Contract(
        //   profileContractABI,
        //   profileContractAddress
        // );
        // Assuming setProfileContract is a method you have in your service
        const accounts = await this.web3.eth.getAccounts();
        if (accounts.length > 0) {
          // Assuming setContract and setAccount are methods you have in your service
          this.adresse=accounts[0];
          this.connectedAccount = accounts[0]; // Set the connected account
        }
        console.log('NAHHHHHH');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No web3 provider detected');
    }
  }
  setAccount(arg0: string) {
    throw new Error('Method not implemented.');
  }

 


  async transferFunds(amount: number, optionalAddress?: string): Promise<void> {
    try {
      if (!this.web3) {
        console.error('Web3 is not initialized.');
        return;
      }

 

      if (!this.connectedAccount) {
        console.error('No account is connected.');
        return;
      }

      // Requesting user's signature
      const signature = await this.requestUserSignature(this.connectedAccount);

      // You can customize the contract method and parameters based on your actual contract
      const transaction = await this.contract.methods
        .addContract(amount, optionalAddress)
        .send({
          from: this.connectedAccount,
          gas: 3000000, // Adjust the gas value based on your contract's requirements
          signature,
        });



      prompt('Transaction details:', transaction);

      // Add any additional logic or notifications after a successful transfer
    } catch (error) {
      console.error('Failed to transfer funds:', error);
      // Handle errors or show user-friendly messages
    }
  }
  private async requestUserSignature(account: string): Promise<string> {
    try {
      const message = 'Please sign your Contract.';
      const signature = await this.web3.eth.personal.sign(message, account, '');
  
      return signature;
    } catch (error) {
      console.error('Failed to request user signature:', error);
      throw error;
    }
  }
  
  ContractAdded(){
    const wsweb3 = new Web3("wss://sepolia.infura.io/ws/v3/3TBN61IK7A554H7H3HTR8Q4Y5CTGZXV7E1");

    // create a new contract object, providing the ABI and address
    const contract = new wsweb3.eth.Contract(contractABI, this.adresse);
  
  // using contract.methods to get value
  const subscription = contract.events['ContractAdded']();
  subscription.on("data", console.log);
  }

}

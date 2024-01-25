import { Injectable } from '@angular/core';
import contractABI from './ABI/UserContractABI.json';
import profileContractABI from './ABI/profileContractABI.json';
import Web3 from 'web3';

declare let window: any;

const contractAddress = "0x5ddD38226F953A5ae7365cE51da7d2f5A6839C6f";
const profileContractAddress = "0x7c44626DFA8Bfac9f326Fd9dfeFEE8daBF8f1977";



@Injectable({
  providedIn: 'root',
})
export class MetaMaskService {
  private web3: any;
  private solde!: number;
  private adresse!: string;
  private privateKey!: string;
  private publicKey!: string;

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
    this.adresse = ''; // Set the initial value for adresse
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
        const tempWeb3 = new Web3(window.ethereum);
        // Assuming setWeb3, setContract, setAccount are methods you have in your service
        this.setWeb3(tempWeb3);
        const contractInstance = new tempWeb3.eth.Contract(
          contractABI,
          contractAddress
        );

        const profileContractInstance = new tempWeb3.eth.Contract(
          profileContractABI,
          profileContractAddress
        );
        // Assuming setProfileContract is a method you have in your service
        this.setProfileContract(profileContractInstance);
        console.log('HIIIIIII');
        const accounts = await tempWeb3.eth.getAccounts();
        console.log('aCCOUNTS', accounts);
        if (accounts.length > 0) {
          // Assuming setContract and setAccount are methods you have in your service
          this.setContract(contractInstance);
          this.setAccount(accounts[0]);
        }
        console.log('NAHHHHHH');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No web3 provider detected');
    }
  }

  // Add these methods based on your actual implementation
  private setWeb3(web3: any): void {
    // Set your web3 attribute
  }

  private setContract(contractInstance: any): void {
    // Set your contract attribute
  }

  private setProfileContract(profileContractInstance: any): void {
    // Set your profile contract attribute
  }

  private setAccount(account: string): void {
    // Set your account attribute
  }
}

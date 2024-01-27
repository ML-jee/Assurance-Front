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

  /*private init(): void {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.enable()
        .then(() => {
          this.web3 = new Web3(window.ethereum);
          console.log('MetaMask is enabled.');
        })
        .catch((error: any) => {
          console.error('Error enabling MetaMask:', error);
        });
    } else {
      console.warn('MetaMask not detected!');
    }
  }

  getWeb3(): any {
    return this.web3;
  }

  isMetaMaskEnabled(): boolean {
    return typeof window.ethereum !== 'undefined';
  }*/

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
}

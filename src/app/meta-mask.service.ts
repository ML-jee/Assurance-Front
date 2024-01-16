import { Injectable } from '@angular/core';
import Web3 from 'web3';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class MetaMaskService {
  private web3: any;

  constructor() {
    this.init();
  }

  private init(): void {
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
  }
}

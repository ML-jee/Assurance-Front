import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MetaMaskService } from '../meta-mask.service';

@Component({
  selector: 'app-wallet-button',
  imports: [MatButtonModule, MatIconModule], 
  standalone: true,
  templateUrl: './wallet-button.component.html',
  styleUrl: './wallet-button.component.css'
})
export class WalletButtonComponent {
  constructor(private metaMaskService: MetaMaskService) {}

  connectToMetaMask(): void {
    if (this.metaMaskService.isMetaMaskEnabled()) {
      const web3 = this.metaMaskService.getWeb3();

      // You can now use 'web3' to interact with MetaMask
      // Example: Get the user's Ethereum address
      web3.eth.getAccounts().then((accounts: any[]) => {
        const userAddress = accounts[0];
        prompt('Connected to MetaMask. User Address:', userAddress);
        console.log('Connected to MetaMask. User Address:', userAddress);
        // You can perform additional MetaMask-related actions here
      });
    } else {
      console.log('MetaMask is not enabled.');
      // Optionally provide user feedback or display a modal to prompt MetaMask installation
    }
  }
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MetaMaskService } from '../meta-mask.service';

@Component({
  selector: 'app-wallet-button',
  imports: [MatButtonModule, MatIconModule], 
  standalone: true,
  templateUrl: './wallet-button.component.html',
  styleUrl: './wallet-button.component.css'
})
export class WalletButtonComponent {
  userAddress: string = '';
  userBalance: number = 0;

  constructor(private metaMaskService: MetaMaskService) {}

  connectToMetaMask(): void {
    if (this.metaMaskService.isMetaMaskEnabled()) {
      const web3 = this.metaMaskService.getWeb3();

      // Get the user's Ethereum address
      web3.eth.getAccounts().then((accounts: any[]) => {
        this.userAddress = accounts[0];
        
        // Get the user's balance
        web3.eth.getBalance(this.userAddress).then((balance: any) => {
          this.userBalance = web3.utils.fromWei(balance, 'ether');
          
          // Display the user's address and balance (you can modify this part based on your UI)
          prompt('Connected to MetaMask. User Address:', this.userAddress);
          console.log('Connected to MetaMask. User Address:', this.userAddress);
          prompt('User Balance:', String(this.userBalance));
          
          // You can perform additional MetaMask-related actions here
        });
      });
    } else {
      console.log('MetaMask is not enabled.');
      // Optionally provide user feedback or display a modal to prompt MetaMask installation
    }
  }
}

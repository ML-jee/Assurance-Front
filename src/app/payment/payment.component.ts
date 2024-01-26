import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

declare let window: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentAmount!: number;

  constructor() { }

  ngOnInit(): void {
    this.initializeMetaMask();
  }

  async initializeMetaMask() {
    try {
      // Ensure MetaMask is installed
      if (window.ethereum) {
        // Request access to MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('MetaMask initialized.');

        // Now MetaMask is initialized, you can proceed with transactions
      } else {
        console.error('MetaMask not detected.');
        // Handle MetaMask not detected
      }
    } catch (error) {
      console.error('Error initializing MetaMask:', error);
      // Handle initialization error
    }
  }

  makePayment() {
    const amount = this.paymentAmount;
    const ethereum = window.ethereum;

    if (ethereum) {
      ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: 'RECEIVER_ADDRESS',
              from: ethereum.selectedAddress,
              value: window.web3.utils.toHex(window.web3.utils.toWei(amount, 'ether'))
            }
          ]
        })
        .then((txHash: string) => {
          console.log('Transaction successful:', txHash);
          // Handle success
        })
        .catch((error: any) => {
          console.error('Transaction error:', error);
          // Handle error
        });
    } else {
      console.error('MetaMask not detected.');
      // Handle MetaMask not detected
    }
  }
}

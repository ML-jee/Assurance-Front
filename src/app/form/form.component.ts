import {Component, NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import Web3 from 'web3';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'payment-form',
  styleUrls: ['form.component.css'],
  templateUrl: 'form.component.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class FormComponent {
  number: any;

  constructor() {
   
  }

  ngOnInit() {
  }

  // submitForm(): void {
  //   if ((window as any).ethereum) {
  //     const web3 = new Web3((window as any).ethereum);

  //     // Example: Get user's Ethereum address
  //     web3.eth.getAccounts().then((accounts: any[]) => {
  //       const userAddress = accounts[0];
  //       console.log('User Address:', userAddress);

  //       // Example: Send a transaction
  //       const contractAddress = '0xYourContractAddress'; // Replace with your contract address
  //       const contractABI = [
  //         // Replace with your contract ABI
  //       ];

  //       const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  //       // Example: Prepare transaction data
  //       const formData = {
  //         number: this.number, // Get the value from your form
  //         description: this.description // Get the value from your form
  //       };

  //       // Example: Convert the data to bytes
  //       const dataBytes = web3.utils.fromAscii(JSON.stringify(formData));

  //       // Example: Send a transaction
  //       contractInstance.methods.yourMethod(dataBytes)
  //         .send({ from: userAddress })
  //         .then((result: any) => {
  //           console.log('Transaction result:', result);
  //           // Handle the transaction result as needed
  //         })
  //         .catch((error: any) => {
  //           console.error('Transaction error:', error);
  //           // Handle the transaction error as needed
  //         });
  //     });
  //   } else {
  //     console.error('MetaMask not detected!');
  //   }
  // }
}

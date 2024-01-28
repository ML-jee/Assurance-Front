import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { MetaMaskService } from '../meta-mask.service';

declare let window: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  amount: number = 0;
  optionalAddress: string = '';
  registerForm: any;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      amount: ['', [Validators.required]],
      optionalAddress: ['', [Validators.required]],
    
    });
  }

  constructor(private metaMaskService: MetaMaskService,
    private fb: FormBuilder,) {
      
    }
  userAddress: string = '';
  userBalance: number = 0;

  onSubmit(): void {
    this.metaMaskService.connectWallet();

    this.optionalAddress = ''; // Initialize optionalAddress with an empty string
    this.amount = 0; // Initialize amount with 0
    // Call the transferFunds method from MetaMaskService
    this.metaMaskService.transferFunds(this.amount, this.optionalAddress);
    // Optionally, you can add logic to reset the form or show success messages
  }





}

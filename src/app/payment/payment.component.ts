import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { MetaMaskService } from '../meta-mask.service';
import { ContractAddedComponent } from '../contract-added/contract-added.component';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private metaMaskService: MetaMaskService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}
  userAddress: string = '';
  userBalance: number = 0;

  onSubmit(): void {
    this.metaMaskService.connectWallet();
    this.optionalAddress = '';
    this.amount = 0;
    this.metaMaskService.transferFunds(this.amount, this.optionalAddress);

    // Open a modal after funds transfer
    const dialogRef = this.dialog.open(ContractAddedComponent, {
      data: {
        title: 'Transfer Successful',
        content: 'Your funds have been transferred successfully!',
      },
    });

    // Optionally, you can subscribe to the dialog's afterClosed event
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }




}

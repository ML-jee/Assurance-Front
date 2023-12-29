import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-wallet-button',
  imports: [MatButtonModule, MatIconModule], 
  standalone: true,
  templateUrl: './wallet-button.component.html',
  styleUrl: './wallet-button.component.css'
})
export class WalletButtonComponent {


}

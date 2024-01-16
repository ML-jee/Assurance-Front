import { Component } from '@angular/core';
import { WalletButtonComponent } from '../wallet-button/wallet-button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [WalletButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}

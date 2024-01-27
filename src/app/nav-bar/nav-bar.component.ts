import { Component, OnInit } from '@angular/core';
import { WalletButtonComponent } from '../wallet-button/wallet-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [WalletButtonComponent,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  nom: string = '';
  prenom: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve login response from local storage
    const storedResponse = localStorage.getItem('loginResponse');
    if (storedResponse) {
      // Parse the JSON string to get the response object
      const response = JSON.parse(storedResponse);
      
      // Retrieve nom and prenom from the 'data' object in the response
      this.nom = response.data.nom; 
      this.prenom = response.data.prenom; 
    }
  }

  isLoggedIn(): boolean {
    // Check if loginResponse exists in local storage
    return localStorage.getItem('loginResponse') !== null;
  }

  logout(): void {
    // Clear user data from local storage
    localStorage.removeItem('loginResponse');
    // Redirect to the login page or any other desired page
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WalletButtonComponent } from "./wallet-button/wallet-button.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConnectionComponent } from "./connection/connection.component";
import {FormComponent } from "./form/form.component";
import { BlockchaineSectionComponent } from "./blockchaine-section/blockchaine-section.component";
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, 
      ConnectionComponent, HomepageComponent,
    RegisterComponent]})

export class AppComponent {
  title = 'Assurance-Front';
}
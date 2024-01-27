import { Routes } from '@angular/router';
import { ContractPresentationComponent } from './contract-presentation/contract-presentation.component';
import { BlockchaineSectionComponent } from "./blockchaine-section/blockchaine-section.component";

export const routes: Routes = [
  
  { path: 'home', component: BlockchaineSectionComponent },
  { path: 'contract', component: ContractPresentationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  
];
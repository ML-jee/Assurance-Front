import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-contract-added',
  standalone: true,
  imports: [],
  templateUrl: './contract-added.component.html',
  styleUrl: './contract-added.component.css'
})
export class ContractAddedComponent {

  
 
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
   
}

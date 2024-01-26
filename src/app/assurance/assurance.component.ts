import { Component, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { OnInit } from '@angular/core';
import { JwtService } from '../services/jwt.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-assurance',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,HttpClientModule,CommonModule],
  templateUrl: './assurance.component.html',
  styleUrl: './assurance.component.css',
  providers: [JwtService],
})
export class AssuranceComponent  implements OnInit{
  assurances: any[] = []; // Declare assurance as a property
  addAssuranceDto: any = {};
  constructor(private jwtService: JwtService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAssurance();
  }

  
  getAllAssurance(): void {
    this.jwtService.getAllAssurances()
      .subscribe({
        next: (data: any []) => {
          console.log('Fetched assurance:', data);
          this.assurances = data;
        },
        error: (error: any) => {
          console.error('Error fetching assurance:', error);
        }
      });
  }

  
  chooseInsurance(idAssurance: string): void {
    // Additional logic can be implemented here if needed
    this.jwtService.chooseInsurance(idAssurance, this.addAssuranceDto )
      .subscribe({
        next: (response: any) => {
          console.log('Insurance chosen successfully:', response);
          // Optionally, you can perform any additional action after choosing insurance
          // For example, navigate to the payment page
          this.router.navigate(['/payment']);
        },
        error: (error: any) => {
          console.error('Error choosing insurance:', error);
          // Optionally, you can handle error cases here
        }
      });
  }
  
  
  
  
  
}

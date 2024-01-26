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
    // Implement your logic for choosing insurance here
    console.log('Insurance chosen:', idAssurance);
     // Navigate to the payment page
     this.router.navigate(['/payment']);
  }
  
  
  
  
  
}

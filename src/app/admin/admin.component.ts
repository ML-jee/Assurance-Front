import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    MatTableModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[AdminService]
})
export class AdminComponent implements OnInit{
  isFormVisible: boolean[] = [false, false, false, false];
  newAssuranceForm!: FormGroup;

  

  // Add properties for each form field
  idAssurance: number | null = null;
  typeAssurance: string = '';
  nom: string = '';
  email: string = '';
  description: string = '';
  prix: number | null = null;
  
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }

  allAssurances: any[] = [];

  ngOnInit(): void {
    this.newAssuranceForm = this.fb.group({
      idAssurance: [null, [Validators.required]],
      typeAssurance: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix: [null, [Validators.required]],
    });
    this.fetchAllAssurances();

  }

  toggleForm(index: number) {
    this.isFormVisible[index] = !this.isFormVisible[index];
  }

  saveInsurance(index: number) {
    this.adminService.saveAssurance(this.newAssuranceForm.value).subscribe({
      next: (response) => {
        console.log('Insurance saved successfully:', response);
      },
      error: (error) => {
        console.error('Error saving insurance:', error);
      },
    });
  }
  isDetailsFetched: boolean = false;


  fetchInsuranceDetails(): void {
    const idToFetch = this.newAssuranceForm.get('idAssurance')!.value;
    if (idToFetch) {
        this.adminService.getAssuranceById(idToFetch).subscribe({
            next: (response) => {
                // Populate the form with existing data
                this.newAssuranceForm.patchValue(response);
                this.isDetailsFetched = true;
            },
            error: (error) => {
                console.error('Error fetching insurance details:', error);
                // Handle errors or show error messages
            },
        });
    }
}

  updateInsurance(index: number): void {
      if (this.newAssuranceForm.valid) {
          const idToUpdate = this.newAssuranceForm.get('idAssurance')!.value;
          const updateData = {
              description: this.newAssuranceForm.get('description')!.value,
              nom: this.newAssuranceForm.get('nom')!.value,
              prix: this.newAssuranceForm.get('prix')!.value,
          };

          this.adminService.updateAssurance(idToUpdate, updateData).subscribe({
              next: (response) => {
                  console.log('Insurance updated successfully:', response);
                  this.isFormVisible[index] = false;
                  this.newAssuranceForm.reset();
              },
              error: (error) => {
                  console.error('Error updating insurance:', error);
                  // Handle errors or show error messages
              },
          });
      } else {
          // Form is invalid, show error messages or perform additional actions
      }
  }

  fetchAllAssurances(): void {
    this.adminService.getAllAssurances().subscribe({
        next: (assurances) => {
            this.allAssurances = assurances;
        },
        error: (error) => {
            console.error('Error fetching all assurances:', error);
            // Handle errors or show error messages
        },
    });
}

}

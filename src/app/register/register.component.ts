  import { Component, OnInit } from '@angular/core';
  import { Inject } from '@angular/core';
  import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, NgForm, FormBuilder } from '@angular/forms';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import { MatIconModule } from '@angular/material/icon';
  import { MatButtonModule } from '@angular/material/button';
  import { MatSelectModule } from '@angular/material/select';
  import { FlexLayoutModule } from '@angular/flex-layout';
  import { MetaMaskService } from '../meta-mask.service';
  import { CommonModule } from '@angular/common'; // Import CommonModule
  import { JwtService } from '../services/jwt.service';
  import { HttpClientModule } from '@angular/common/http';

  @Component({
    selector: 'app-register',
    standalone: true,
    imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      FlexLayoutModule,
      CommonModule,
      HttpClientModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    providers: [JwtService]
  })
  export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    hide = true;
    // Add properties for each form field
    prenom: string = '';
    nom: string = '';
    cin: string = '';
    email: string = '';
    password: string = '';
    adresseWallet: string = '';
    revenue: number | null = null;
    nbreEnfants: number | null = null;
    adresse: string = '';
    emploi: string = '';
    statutMarital: string = '';
    dateNaissance: Date | null = null;

    constructor(
      private metaMaskService: MetaMaskService,
      private jwtService: JwtService,
      private fb: FormBuilder
    ) { }

    ngOnInit(): void {
      this.registerForm = this.fb.group({
        prenom: ['', [Validators.required]],
        nom: [''],
        cin: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        adresseWallet: [''],
        revenue: [null],
        nbreEnfants: [null],
        adresse: [''],
        emploi: [''],
        statutMarital: ['', [Validators.required]],
        dateNaissance: [null, [Validators.required]]
      });
    }
    
    onCreateOneClick(): void {
      this.metaMaskService.connectMetaMask();
    }

    onSubmit(): void {
      this.jwtService.register(this.registerForm.value)
  .subscribe({
    next: (response) => {
      // Handle successful response if needed
      console.log(response);
    },
    error: (error) => {
      // Handle error if needed
      console.error(error);
    }
  });    
    
  }

  }
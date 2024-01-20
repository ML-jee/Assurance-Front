import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MetaMaskService } from '../meta-mask.service';
import { FormBuilder } from '@angular/forms';
import { JwtService } from '../services/jwt.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule,
    MatIconModule, MatButtonModule, MatSelectModule, FlexLayoutModule, HttpClientModule],
    providers:[JwtService],
    templateUrl: './register.component.html',
    styleUrl :'./register.component.css'
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm!: FormGroup;
  control = new FormControl('Marital Status' as ThemePalette);
  constructor(
    private metaMaskService: MetaMaskService ,
    private service: JwtService,
   private fb : FormBuilder
  ) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      cin: ['',[Validators.required]],
      walletAddress: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      address: ['',[Validators.required]],
      job: ['',[Validators.required]],
      amount: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      maritalStatus: ['',[Validators.required]],
      noc: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  submitForm() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (response) =>{
        if(response.cin != null) {
        alert("Hello "+response.firstName+response.lastName)
      }
      }
    )

  }

  onCreateOneClick(): void {
    this.metaMaskService.connectMetaMask();
  }


  
}

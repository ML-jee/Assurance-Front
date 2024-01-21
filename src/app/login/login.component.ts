import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtService } from '../services/jwt.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JwtService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  adresseWallet: string = ''; // Add this line
  password: string = ''; // Add this line

  constructor(private service: JwtService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      adresseWallet: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
    });
    console.log(this.loginForm);
  }
}

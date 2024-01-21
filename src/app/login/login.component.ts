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
import { Router } from '@angular/router';

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

  constructor(private service: JwtService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      adresseWallet: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { adresseWallet, password } = this.loginForm.value;

    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);

      // Check if adresseWallet is adminWallet
      if (adresseWallet === 'adminWallet') {
        // Redirect to /admin
        this.router.navigate(['/admin']);
      } else {
        // Redirect to home page
        this.router.navigate(['/']);
      }
    });
  }
}

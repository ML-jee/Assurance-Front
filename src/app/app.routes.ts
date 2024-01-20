import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConnectionComponent } from "./connection/connection.component";


export const routes: Routes = [
  {path :'', component : ConnectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

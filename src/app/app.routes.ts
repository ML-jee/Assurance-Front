import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConnectionComponent } from "./connection/connection.component";
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AssuranceComponent } from './assurance/assurance.component';

export const routes: Routes = [
  {path :'', component : HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'admin', component: AdminComponent},
  {path : 'about', component:AboutComponent},
  {path : 'assurance', component:AssuranceComponent}
  
];

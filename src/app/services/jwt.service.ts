import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const BASE_URL = 'http://localhost:8085/';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'client/register', registerRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'client/login', loginRequest)
  }
}

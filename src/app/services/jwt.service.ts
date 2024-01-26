import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


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


  getAllAssurances(): Observable<any> {
    return this.http.get(BASE_URL + 'client/getInsurances');
  }

  getInsurance(idAssurance: string): Observable<any> {
    return this.http.get(BASE_URL + `client/getInsurance/${idAssurance}`);
  }

  chooseInsurance(idAssurance: string, addAssuranceDto: any): Observable<any> {
    return this.http.post(BASE_URL + `client/chooseInsurance/${idAssurance}`, addAssuranceDto);
  }
}

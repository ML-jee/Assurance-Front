import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  private apiUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  predictAssuranceWithParams(params: any): Observable<any> {
    const { dateNaissance, adresse, genre, statutMarital } = params;
    const url = `${this.apiUrl}/predict/${dateNaissance}/${adresse}/${genre}/${statutMarital}`;
    console.log(url);
    return this.http.get(url);
  }
}

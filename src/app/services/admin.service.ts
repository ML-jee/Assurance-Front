// admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8087/admin'; 

  constructor(private httpClient: HttpClient) {}

  getAllAssurances(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/all`);
  }

  getAssuranceById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  saveAssurance(addRequest: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/add`, addRequest);
  }

  updateAssurance(id: number, updateRequest: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, updateRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  api:string='http://78.138.46.125:8080';
  constructor(private http: HttpClient) { }
   login(correo:string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {correo, password };

    return this.http.post(this.api +"/login", body, { headers });
  }
}



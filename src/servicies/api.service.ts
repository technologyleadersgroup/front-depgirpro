import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 api = 'http://78.138.46.125:8080';

 constructor(private http: HttpClient) {   }
  login(correo:string, password:string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const body = {correo, password};
    return this.http.post(`${this.api}/login`, body, {headers})
  }

}

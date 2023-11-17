import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  private apiUrl = 'https://technologyleadersgroup.com.co/api/login.php';
  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${this.apiUrl}/ruta-de-la-api`);
  }
}


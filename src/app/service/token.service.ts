import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  // Guardar el token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Validar el token
  isValidToken(): Observable<boolean> {
    const token = this.getToken();
    if (!token) {
      return of(false);
    }

    // Aquí debes reemplazar 'your-api-endpoint' con el endpoint que valida el token
    return this.http.post<{ valid: boolean }>('http://78.138.46.125:8080', { token }).pipe(
      map(response => response.valid),
      catchError(() => of(false))
    );
  }
}

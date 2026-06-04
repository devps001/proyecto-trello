import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserLogin, LoginResponse } from '../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5158'; // Cambia por tu URL

  // Señal para saber si el usuario está logueado globalmente
  public isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));

  login(credentials: UserLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/auth/login`, credentials).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        this.isAuthenticated.set(true);
      }),
    );
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  autenticar(login: string, password: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/usuarios/login`,
      { login, password },
      { observe: 'response'}
    ).pipe(
      tap((response) => {
        const authToken = response.body?.access_token || '';
        this.userService.salvarToken(authToken);
      })
    );
  }

}

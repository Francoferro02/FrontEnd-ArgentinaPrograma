import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUsuario } from '../model/register-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  constructor(private httpClient:HttpClient) { }

  public register(nuevoUsuario:RegisterUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo',RegisterUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }
}

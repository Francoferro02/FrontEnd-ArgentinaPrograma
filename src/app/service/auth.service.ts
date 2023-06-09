import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUsuario } from '../model/register-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://backendfranco.onrender.com/auth/';
  constructor(private httpClient:HttpClient) { }

  public register(nuevoUsuario:RegisterUsuario):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo',RegisterUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login',loginUsuario);
  }
}

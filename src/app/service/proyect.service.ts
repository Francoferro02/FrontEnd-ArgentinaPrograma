import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Proyect } from '../model/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  URL = 'https://backendfranco.onrender.com/proyect/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyect[]>{
    return this.httpClient.get<Proyect[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Proyect>{
    return this.httpClient.get<Proyect>(this.URL + `detail/${id}`);
  }

  public save(proyect:Proyect):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create',proyect);
  }

  public update(id:number,proyect:Proyect):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,proyect);
  }

  public delete(id:number):Observable<any>{
  return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}

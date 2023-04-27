import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienciaLabo } from '../model/experiencia-labo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceExperienciaService {
  expURL= environment.URL + '/explab/'

  constructor(private httpCliente:HttpClient) { }

  public lista(): Observable<ExperienciaLabo[]> {
    return this.httpCliente.get<ExperienciaLabo[]>(this.expURL + 'lista');
  }

  public detail(id:number): Observable<ExperienciaLabo> {
  return this.httpCliente.get<ExperienciaLabo>(this.expURL + `detail/${id}`);
  }

  public save(ExperienciaLabo:ExperienciaLabo): Observable<any>{
    return this.httpCliente.post<any>(this.expURL + 'create', ExperienciaLabo);
  }

  public update(id:number,ExperienciaLabo:ExperienciaLabo): Observable<any>{
    return this.httpCliente.put<any>(this.expURL + `update/${id}`,ExperienciaLabo);
  }

  public delete(id:number): Observable<any>{
    return this.httpCliente.delete<any>(this.expURL + `delete/${id}`);
  }
}

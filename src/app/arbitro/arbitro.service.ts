import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitro } from './arbitro';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  //Esta URL obtiene el listado de todos los arbitros en el backend
  private baseURL = "http://localhost:8080/api/arbitros";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los arbitros
  obtenerListaDeArbitros():Observable<Arbitro[]>{
    return this.httpClient.get<Arbitro[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un arbitro
  registrarArbitro(arbitro:Arbitro):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,arbitro)
  }

  //Esta metodo nos sirve para actualizar un arbitro
  actualizarArbitro(id:number,arbitro:Arbitro):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,arbitro)
  }

  //este metodo nos sirve para obtener o buscar un torneo
  obtenerArbitroPorId(id:number):Observable<Arbitro>{
    return this.httpClient.get<Arbitro>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un arbitro
  eliminarArbitro(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

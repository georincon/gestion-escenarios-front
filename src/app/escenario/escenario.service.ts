import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escenario } from './escenario';

@Injectable({
  providedIn: 'root'
})
export class EscenarioService {

  //Esta URL obtiene el listado de todos los escenarios en el backend
  private baseURL = "http://localhost:8080/api/escenarios";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los escenarios
  obtenerListaDeEscenarios():Observable<Escenario[]>{
    return this.httpClient.get<Escenario[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un escenario
  registrarEscenario(escenario:Escenario):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,escenario)
  }

  //Esta metodo nos sirve para actualizar un escenario
  actualizarEscenario(id:number,escenario:Escenario):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,escenario)
  }

  //este metodo nos sirve para obtener o buscar un escenario
  obtenerEscenarioPorId(id:number):Observable<Escenario>{
    return this.httpClient.get<Escenario>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un escenario
  eliminarEscenario(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


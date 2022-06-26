import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrenador } from './entrenador';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {


  //Esta URL obtiene el listado de todos los entrenadores en el backend
  private baseURL = "http://localhost:8080/api/entrenadores";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los entrenadores
  obtenerListaDeEntrenadores():Observable<Entrenador[]>{
    return this.httpClient.get<Entrenador[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un entrenador
  registrarEntrenador(entrenador:Entrenador):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,entrenador)
  }

  //Esta metodo nos sirve para actualizar un entrenador
  actualizarEntrenador(id:number,entrenador:Entrenador):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,entrenador)
  }

  //este metodo nos sirve para obtener o buscar un entrenador
  obtenerEntrenadorPorId(id:number):Observable<Entrenador>{
    return this.httpClient.get<Entrenador>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un entrenador
  eliminarEntrenador(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


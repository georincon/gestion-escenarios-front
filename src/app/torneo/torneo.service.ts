import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Torneo } from './torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  //Esta URL obtiene el listado de todos los torneos en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/torneos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los torneos
  obtenerListaDeTorneos():Observable<Torneo[]>{
    return this.httpClient.get<Torneo[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un torneo
  registrarTorneo(torneo:Torneo):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,torneo)
  }

  //Esta metodo nos sirve para actualizar un torneo
  actualizarTorneo(id:number,torneo:Torneo):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,torneo)
  }

  //este metodo nos sirve para obtener o buscar un torneo
  obtenerTorneoPorId(id:number):Observable<Torneo>{
    return this.httpClient.get<Torneo>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un torneo
  eliminarTorneo(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

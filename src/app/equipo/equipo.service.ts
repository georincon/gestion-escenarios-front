import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  //Esta URL obtiene el listado de todos los equipos en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/equipos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los equipos
  obtenerListaDeEquipos():Observable<Equipo[]>{
    return this.httpClient.get<Equipo[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un equipo
  registrarEquipo(equipo:Equipo):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,equipo)
  }

  //Esta metodo nos sirve para actualizar un equipo
  actualizarEquipo(id:number,equipo:Equipo):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,equipo)
  }

  //este metodo nos sirve para obtener o buscar un equipo
  obtenerEquipoPorId(id:number):Observable<Equipo>{
    return this.httpClient.get<Equipo>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un equipo
  eliminarEquipo(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


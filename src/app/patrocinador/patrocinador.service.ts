import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patrocinador } from './patrocinador';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {

  //Esta URL obtiene el listado de todos los patrocinadores en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/patrocinadores";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los patrocinadores
  obtenerListaDePatrocinadores():Observable<Patrocinador[]>{
    return this.httpClient.get<Patrocinador[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un patrocinador
  registrarPatrocinador(patrocinador:Patrocinador):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,patrocinador)
  }

  //Esta metodo nos sirve para actualizar un patrocinador
  actualizarPatrocinador(id:number,patrocinador:Patrocinador):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,patrocinador)
  }

  //este metodo nos sirve para obtener o buscar un patrocinador
  obtenerPatrocinadorPorId(id:number):Observable<Patrocinador>{
    return this.httpClient.get<Patrocinador>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un patrocinador
  eliminarPatrocinador(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

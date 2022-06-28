import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deportista } from './deportista';

@Injectable({
  providedIn: 'root'
})
export class DeportistaService {

  //Esta URL obtiene el listado de todos los deportistas en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/deportistas";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los deportistas
  obtenerListaDeDeportistas():Observable<Deportista[]>{
    return this.httpClient.get<Deportista[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un deportista
  registrarDeportista(deportista:Deportista):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,deportista)
  }

  //Esta metodo nos sirve para actualizar un deportista
  actualizarDeportista(id:number,deportista:Deportista):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,deportista)
  }

  //este metodo nos sirve para obtener o buscar un deportista
  obtenerDeportistaPorId(id:number):Observable<Deportista>{
    return this.httpClient.get<Deportista>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un deportista
  eliminarDeportista(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancha } from './cancha';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {


  //Esta URL obtiene el listado de todas las canchas en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/canchas";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener las canchas
  obtenerListaDeCanchas():Observable<Cancha[]>{
    return this.httpClient.get<Cancha[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar una cancha
  registrarCancha(cancha:Cancha):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cancha)
  }

  //Esta metodo nos sirve para actualizar una cancha
  actualizarCancha(id:number,cancha:Cancha):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cancha)
  }

  //este metodo nos sirve para obtener o buscar una cancha
  obtenerCanchaPorId(id:number):Observable<Cancha>{
    return this.httpClient.get<Cancha>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar una cancha
  eliminarCancha(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColegioArbitral } from './colegio-arbitral';

@Injectable({
  providedIn: 'root'
})
export class ColegioArbitralService {

  //Esta URL obtiene el listado de todos los colegios arbitrales en el backend
  private baseURL = "http://localhost:8080/api/colegios_arbitrales";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los colegios arbitrales
  obtenerListaDeColegiosArbitrales():Observable<ColegioArbitral[]>{
    return this.httpClient.get<ColegioArbitral[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un colegio arbitral
  registrarColegioArbitral(colegioArbitral:ColegioArbitral):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,colegioArbitral)
  }

  //Esta metodo nos sirve para actualizar un colegio arbitral
  actualizarColegioArbitral(id:number,colegioArbitral:ColegioArbitral):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,colegioArbitral)
  }

  //este metodo nos sirve para obtener o buscar un colegio arbitral
  obtenerColegioArbitralPorId(id:number):Observable<ColegioArbitral>{
    return this.httpClient.get<ColegioArbitral>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un colegio arbitral
  eliminarColegioArbitral(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

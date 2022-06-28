import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from './municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  //Esta URL obtiene el listado de todos los municipios en el backend
  private baseURL = "https://gestion-escenarios-backend.herokuapp.com/api/municipios";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los municipios
  obtenerListaDeMunicipios():Observable<Municipio[]>{
    return this.httpClient.get<Municipio[]>(`${this.baseURL}`);
  }

  //Esta metodo nos sirve para registrar un municipio
  registrarMunicipio(municipio:Municipio):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,municipio)
  }

  //Esta metodo nos sirve para actualizar un municipio
  actualizarMunicipio(id:number,municipio:Municipio):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,municipio)
  }

  //este metodo nos sirve para obtener o buscar un municipio
  obtenerMunicipioPorId(id:number):Observable<Municipio>{
    return this.httpClient.get<Municipio>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para eliminar un municipio
  eliminarMunicipio(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

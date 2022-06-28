import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Torneo } from '../torneo';
import { TorneoService } from '../torneo.service';
import { Municipio } from '../../municipio/municipio'
import { MunicipioService } from 'src/app/municipio/municipio.service';

@Component({
  selector: 'app-registrar-torneo',
  templateUrl: './registrar-torneo.component.html',
  styleUrls: ['./registrar-torneo.component.css']
})
export class RegistrarTorneoComponent implements OnInit {

  listadoMunicipios: Municipio[];
  torneo : Torneo = new Torneo();
  constructor(
    private municipioService:MunicipioService, 
    private torneoServicio:TorneoService, 
    private router:Router
    ) {}
  

  ngOnInit(): void {
    console.log(this.torneo);
    this.municipioService.obtenerListaDeMunicipios().subscribe(datos => {
      this.listadoMunicipios = datos;
      console.log(datos);
    })   
  }

  guardarTorneo(){
    console.log(this.torneo);
    let tornen = {
      nombre:  this.torneo.nombre,
      categoria: this.torneo.categoria,
      fechaFin: this.torneo.fechaFin,
      fechaInicio: this.torneo.fechaInicio,
      municipio: {
        id: Number(this.torneo.fk_municipio),
      }
    }
      this.torneoServicio.registrarTorneo(tornen).subscribe(dato => {
      console.log(dato); 
      this.irAlaListaDeTorneos();
    },error => console.log(error))
  }

  irAlaListaDeTorneos(){
    this.router.navigate(['/torneos']);
    swal('Torneo registrado',`El torneo ${this.torneo.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarTorneo();
  }
}
